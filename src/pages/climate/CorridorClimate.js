import React from 'react';
import Sensor from "../../components/sensors/Sensor";

const CorridorClimate = () => {

    const room_name = 'Коридор';
    const url = process.env.REACT_APP_SENSOR_4_URL;
    const tempCalibration = 2.5;

    return (
        <div className="container text-center">
            <Sensor room={room_name} url={url} tempCalibration={tempCalibration}/>
        </div>
    );
};

export default CorridorClimate;
