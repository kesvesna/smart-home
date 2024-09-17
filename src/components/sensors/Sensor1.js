import React, { useState, useEffect } from 'react';
import axios from "axios";

const Sensor1 = ({room}) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mac, setMac] = useState('');

    const [temperatureAlarm, setTemperatureAlarm] = useState(false);
    const [humidityAlarm, setHumidityAlarm] = useState(false);
    const [gasAlarm, setGasAlarm] = useState(false);
    const [pressureAlarm, setPressureAlarm] = useState(false);

    const url = process.env.REACT_APP_SENSOR_1_URL;
    const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;
    const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID; // Flat_42
    const HIGH_TEMPERATURE_ALARM = 30;
    const HIGH_GAS_LEVEL_ALARM = 950;
    const LOW_HUMIDITY_LEVEL_ALARM = 40;
    const LOW_PRESSURE_LEVEL_ALARM = 740;

    const fetchData = async () => {
        try {

            setPressureAlarm(false);
            setHumidityAlarm(false);
            setTemperatureAlarm(false);
            setGasAlarm(false);

            const response = await fetch(url, {mode:'cors'});

            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            //console.log("Result: ", result);
            setData(result);
            setIsLoading(false);
            setMac(result.mac);

            if(parseFloat(result.sensor_1.value) > HIGH_TEMPERATURE_ALARM) {
                const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    chat_id: CHAT_ID,
                    text: room + ", высокая температура: " + parseFloat(result.sensor_1.value.toFixed(1))
                });
            }

            if(parseInt(result.sensor_2.value) > HIGH_GAS_LEVEL_ALARM) {
                const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    chat_id: CHAT_ID,
                    text: room + ", высокое содержание газа: " + parseInt(result.sensor_2.value.toFixed(0))
                });
            }

            if(parseInt(result.sensor_4.value) < LOW_HUMIDITY_LEVEL_ALARM) {
                const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    chat_id: CHAT_ID,
                    text: room + ", низкая влажность: " + parseInt(result.sensor_4.value.toFixed(0))
                });
            }

            if(parseInt(result.sensor_3.value) < LOW_PRESSURE_LEVEL_ALARM) {
                const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    chat_id: CHAT_ID,
                    text: "Низкое давление: " + parseInt(result.sensor_3.value.toFixed(0))
                });
            }

            //console.log(result);

        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };


    useEffect(() => {
        // Fetch data initially
        fetchData();

        // Set up an interval to fetch data every 5 seconds
        const intervalId = setInterval(() => {
            fetchData();
        }, 5000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    if (isLoading) {
        return <>
            <div className="card">
                <h5 className="card-header">{room}</h5>
                <div className="card-body p-0 pt-3">
                    <p className="card-text">Запрос данных ...</p>
                </div>
            </div>
        </>;
    }

    if (error) {
        return <>
            <div className="card">
                <h5 className="card-header">{room}</h5>
                <div className="card-body p-0 pt-3">
                    <p className="card-text">Ошибка: {error.message}</p>
                </div>
            </div>
        </>;
    }

    const styleSuccess = {
        "color": "green"
    }

    const styleAlarm = {
        "color": "red"
    }

    return (
        <>
            <div className="card">
                <h5 className="card-header">{room}</h5>
                <div className="card-body p-0 pt-3">
                    <p className="m-0">
                        <span>Температура: </span>
                        <span style={temperatureAlarm === true ? styleAlarm : styleSuccess}
                              className="fw-bold">{parseFloat(data.sensor_1.value.toFixed(1))}&#176;</span>
                    </p>
                    <p className="m-0">
                        <span>Влажность: </span>
                        <span style={humidityAlarm === true ? styleAlarm : styleSuccess}
                              className="fw-bold">{parseFloat((data.sensor_4.value).toFixed(0))}%</span>
                    </p>
                    <p className="m-0 mb-2">
                        <span>Газ: </span><span style={gasAlarm === true ? styleAlarm : styleSuccess}
                                                className="fw-bold">{parseFloat(data.sensor_2.value.toFixed(0))}</span>
                    </p>
                    {/*<p className="card-text">*/}
                    {/*    <span>Давление: </span><span*/}
                    {/*    className="fw-bold">{parseFloat((data.sensor_3.value / 1.33).toFixed(0))}</span>*/}
                    {/*    <span> мм.рт.ст.</span>*/}
                    {/*</p>*/}
                </div>
            </div>
        </>
    );
};

export default Sensor1;
