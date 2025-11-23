exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const text = body.text || "";

    // ---- ENV TOKENS ----
    const USER_BOT_TOKEN = process.env.TG_BOT_TOKEN;
    const USER_CHAT_ID   = process.env.TG_CHAT_ID;

    const ORDER_BOT_TOKEN = process.env.ORDER_BOT;
    const ORDER_CHAT_ID   = process.env.ORDER_ID;

    // ---- Decide which bot to use ----
    let botToken, chatId;

    if (text.includes("Activity Notification")) {
      // USER ACTIVITY BOT
      botToken = USER_BOT_TOKEN;
      chatId = USER_CHAT_ID;
    } else {
      // LOGIN / ORDER BOT
      botToken = ORDER_BOT_TOKEN;
      chatId = ORDER_CHAT_ID;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML"
      })
    });

    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, result: data })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message })
    };
  }
};
