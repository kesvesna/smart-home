import sendTelegramNotification from "../../../notifications/TelegramNotification";

const HIGH_TEMPERATURE_ALARM = 32;
const HIGH_GAS_LEVEL_ALARM = 470;
const LOW_HUMIDITY_LEVEL_ALARM = 25;
const HIGH_HUMIDITY_LEVEL_ALARM = 80;
const LOW_PRESSURE_LEVEL_ALARM = 740;

const checkAlarms = (result, room) => {

    const newAlarms = { temperature: false, humidity: false, gas: false, pressure: false };
    let message = '';

    if (parseFloat(result.sensor_1.value) > HIGH_TEMPERATURE_ALARM) {
        message = `${room}, высокая температура: ${parseFloat(result.sensor_1.value).toFixed(1)}`;
        sendTelegramNotification(message);
        newAlarms.temperature = true;
    }

    if (parseInt(result.sensor_2.value) > HIGH_GAS_LEVEL_ALARM) {
        message = `${room}, высокое содержание газа: ${parseInt(result.sensor_2.value)}`;
        sendTelegramNotification(message);
        newAlarms.gas = true;
    }

    if (parseInt(result.sensor_4.value) < LOW_HUMIDITY_LEVEL_ALARM) {
        message = `${room}, низкая влажность: ${parseInt(result.sensor_4.value)}`;
        sendTelegramNotification(message);
        newAlarms.humidity = true;
    }

    if (parseInt(result.sensor_4.value) > HIGH_HUMIDITY_LEVEL_ALARM) {
        message = `${room}, высокая влажность: ${parseInt(result.sensor_4.value)}`;
        sendTelegramNotification(message);
        newAlarms.humidity = true;
    }

    return newAlarms;
};

export default checkAlarms;