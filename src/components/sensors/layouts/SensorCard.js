import React from "react";
import SensorValue from "./SensorValue";

const SensorCard = ({ room, mac, alarms, data, tempCalibration }) => (
    <div className="card">
        <div className="card-header">
            <span className="fw-bold fs-5">{room} </span><span className="small">({mac})</span>
        </div>
        <div className="card-body p-0 pt-3">
            <SensorValue label="Температура" value={parseFloat(data.sensor_1.value).toFixed(1) - tempCalibration} alarm={alarms.temperature} unit="°C" />
            <SensorValue label="Влажность" value={parseFloat(data.sensor_4.value).toFixed(0)} alarm={alarms.humidity} unit="%" />
            <SensorValue label="Дым / CO2" value={parseFloat(data.sensor_2.value).toFixed(0)} alarm={alarms.gas} unit="" />
        </div>
    </div>
);

export default SensorCard;