import React from 'react';
import Sensor from "../../components/sensors/Sensor";


const Room4Climate = () => {

    const room_name = 'Комната 4';
    const url = process.env.REACT_APP_SENSOR_7_URL;
    const tempCalibration = 4.0;

    return (
        <div className="container text-center">
            <Sensor room={room_name} url={url} tempCalibration={tempCalibration} />
        </div>
    );
};

export default Room4Climate;
