import axios from "axios";

const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;
const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;

const sendTelegramNotification = async (message = '') => {

    try {
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message   })}
    catch (error) {
        console.error("Send telegram error: ", error);
    }



};

export default sendTelegramNotification;