const fetch = require("node-fetch");

exports.handler = async function(event) {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;  // Securely stored in Netlify
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;  // Securely stored in Netlify
    
    try {
        const orderData = JSON.parse(event.body);
        const message = `
        🛒 *New Order Received!*  
        📦 Product: ${orderData.product.name}  
        🔢 Quantity: ${orderData.quantity}  
        💰 Total Price: ₹${orderData.totalPrice}  
        👤 Name: ${orderData.name}  
        📞 Phone: ${orderData.phonenumber}  
        🏡 Address: ${orderData.address}  
        📌 Pincode: ${orderData.pincode}  
        🚚 Delivery: ${orderData.deliveryMethod}  
        `;

        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "Markdown"
            })
        });

        return { statusCode: 200, body: JSON.stringify({ success: true }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
