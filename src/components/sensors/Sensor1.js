import React, { useState, useEffect } from 'react';
import axios from "axios";

const Sensor1 = ({room}) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = process.env.REACT_APP_SENSOR_1_URL;
    const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;
    const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID; // Flat_42
    const HIGH_TEMPERATURE_ALARM = 30;
    const HIGH_GAS_LEVEL_ALARM = 950;
    const LOW_HUMIDITY_LEVEL_ALARM = 40;
    const LOW_PRESSURE_LEVEL_ALARM = 740;

    const fetchData = async () => {
        try {

            // const secret_token = {
            //     "secret_token": "@WelcomeFromHere@"
            // };

            const response = await fetch(url, {mode:'cors'});

            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            //console.log("Result: ", result);
            setData(result);
            setIsLoading(false);

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
        }, 7000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    if (isLoading) {
        return <>
            <p className="card-text">запрос данных ...</p>
        </>;
    }

    if (error) {
        return <>
            <p className="card-text">Error: {error.message}</p>
        </>;
    }



    return (
        <>
            <p></p>
            <p className="card-text">
                <span>Т: </span><span
                className="fw-bold">{parseFloat(data.sensor_1.value.toFixed(1))}&#176;</span>
                {/*<span className="fw-light figure-caption">&nbsp;&nbsp;&nbsp;{data.sensor_1.mac}</span>*/}
                <span>&nbsp;&nbsp;&nbsp;Влага: </span><span
                className="fw-bold">{parseFloat((data.sensor_4.value).toFixed(0))}</span>
                <span>%</span>
                <span>&nbsp;&nbsp;&nbsp;Газ: </span><span
                className="fw-bold">{parseFloat(data.sensor_2.value.toFixed(0))}</span>
            </p>
            <p className="card-text">
                <span>Давление: </span><span
                className="fw-bold">{parseFloat((data.sensor_3.value / 1.33).toFixed(0))}</span>
                <span> мм.рт.ст.</span>
            </p>
        </>
    );
};

export default Sensor1;
