import React from 'react';
import Sensor from "../../components/sensors/Sensor";


const Room6Climate = () => {

    const room_name = 'Комната 6';
    const url = process.env.REACT_APP_SENSOR_10_URL;
    const tempCalibration = 4.0;

    return (
        <div className="container text-center">
            <Sensor room={room_name} url={url} tempCalibration={tempCalibration} />
        </div>
    );
};

export default Room6Climate;
