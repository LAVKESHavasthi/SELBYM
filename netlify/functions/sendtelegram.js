export async function handler(event, context) {
  try {
    const { text } = JSON.parse(event.body || "{}");

    const TOKEN = process.env.TG_BOT_TOKEN;
    const CHAT_ID = process.env.TG_CHAT_ID;

    if (!TOKEN || !CHAT_ID) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing TG_BOT_TOKEN or TG_CHAT_ID" }),
      };
    }

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const telegramResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text || "Default test message 🚀",
      }),
    });

    const data = await telegramResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
