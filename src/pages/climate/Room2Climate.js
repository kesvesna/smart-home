import React from 'react';
import Sensor from "../../components/sensors/Sensor";


const Room2Climate = () => {

    const room_name = 'Комната 2';
    const url = process.env.REACT_APP_SENSOR_9_URL;
    const tempCalibration = 4.0;

    return (
        <div className="container text-center">
            <Sensor room={room_name} url={url} tempCalibration={tempCalibration} />
        </div>
    );
};

export default Room2Climate;
