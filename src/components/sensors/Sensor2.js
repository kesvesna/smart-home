import React, { useState, useEffect } from 'react';
import SensorCard from "./layouts/SensorCard";
import LoadingView from "./layouts/LoadingView";
import ErrorView from "./layouts/ErrorView";
import fetchSensorData from "./FetchSensorData";
import checkAlarms from "./alarms/CheckAlarms";

const Sensor2 = ({ room, url, tempCalibration }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mac, setMac] = useState('');
    const [alarms, setAlarms] = useState({ temperature: false, humidity: false, gas: false, pressure: false });
    const handleSensorData = (result) => {
        setMac(result.mac);
        const newAlarms = checkAlarms(result, room);
        setAlarms(newAlarms);
        setData(result);
        setIsLoading(false);
    };

    const fetchData = async () => {
        try {
            const result = await fetchSensorData(url);
            handleSensorData(result);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5500);
        return () => clearInterval(intervalId);
    }, []);

    if (isLoading) {
        return <LoadingView room={room} />;
    }

    if (error) {
        return <ErrorView room={room} message={error.message} />;
    }

    return (
        <SensorCard room={room} mac={mac} alarms={alarms} data={data} tempCalibration={tempCalibration} />
    );
};

export default Sensor2;
