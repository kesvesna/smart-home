import sendTelegramNotification from "../../../notifications/TelegramNotification";

const HIGH_TEMPERATURE_ALARM = 30;
const HIGH_GAS_LEVEL_ALARM = 400;
const LOW_HUMIDITY_LEVEL_ALARM = 30;

const checkAlarms = (result, room) => {

    const newAlarms = { temperature: false, humidity: false, gas: false, pressure: false };

    if (parseFloat(result.sensor_1.value) > HIGH_TEMPERATURE_ALARM) {
        sendTelegramNotification(`${room}, высокая температура: ${parseFloat(result.sensor_1.value).toFixed(1)}`);
        newAlarms.temperature = true;
    }

    if (parseInt(result.sensor_2.value) > HIGH_GAS_LEVEL_ALARM) {
        sendTelegramNotification(`${room}, высокое содержание газа: ${parseInt(result.sensor_2.value)}`);
        newAlarms.gas = true;
    }

    if (parseInt(result.sensor_4.value) < LOW_HUMIDITY_LEVEL_ALARM) {
        sendTelegramNotification(`${room}, низкая влажность: ${parseInt(result.sensor_4.value)}`);
        newAlarms.humidity = true;
    }

    return newAlarms;
};

export default checkAlarms;