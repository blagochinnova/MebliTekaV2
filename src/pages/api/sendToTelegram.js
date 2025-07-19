export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
  
    const { message } = JSON.parse(req.body);
  
    const TELEGRAM_BOT_TOKEN = "7829601576:AAEFDfBoRTNbCX-WOSO5GQjaB5YFEpTzASo"; 
    const TELEGRAM_CHAT_ID = "713468325";  
  
    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });
  
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Telegram error", err);
      res.status(500).json({ error: "Failed to send to Telegram" });
    }
  }
  