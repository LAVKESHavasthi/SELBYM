// netlify/functions/sendTelegram.js
exports.handler = async function(event, context) {
  // Only accept POST (you can loosen for GET debugging)
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Simple secret check (optional but recommended)
  const SECRET_HEADER = process.env.WEBHOOK_SECRET || ""; // set in env
  if (SECRET_HEADER) {
    const incomingSecret = (event.headers["x-sel-secret"] || event.headers["x-sel-secret".toLowerCase()]) || "";
    if (!incomingSecret || incomingSecret !== SECRET_HEADER) {
      return { statusCode: 401, body: JSON.stringify({ ok:false, error: "Unauthorized" }) };
    }
  }

  const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
  const TG_CHAT_ID   = process.env.TG_CHAT_ID;

  if (!TG_BOT_TOKEN || !TG_CHAT_ID) {
    return { statusCode: 500, body: JSON.stringify({ ok:false, error: "Missing env vars TG_BOT_TOKEN or TG_CHAT_ID" }) };
  }

  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ ok:false, error: "Invalid JSON" }) };
  }

  // Build message. Client can send `message` or `text`
  const message = payload.message || payload.text || "No message provided";

  try {
    const res = await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true
      })
    });

    const data = await res.json().catch(()=>({ ok:false, description:"Invalid TG response" }));

    return {
      statusCode: res.ok ? 200 : 502,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ ok:false, error: err.message }) };
  }
};
