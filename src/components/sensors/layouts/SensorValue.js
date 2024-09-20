import React from "react";

const SensorValue = ({ label, value, alarm, unit }) => {
    const style = {
        color: alarm ? "red" : "green"
    };
    return (
        <p className="m-0">
            <span>{label}: </span>
            <span style={style} className="fw-bold">{value}</span><span> {unit}</span>
        </p>
    );
};

export default SensorValue;