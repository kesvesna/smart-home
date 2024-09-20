import React from 'react';
import Sensor from "../../components/sensors/Sensor";


const WashRoomClimate = () => {

    const room_name = 'Умывальник';
    const url = process.env.REACT_APP_SENSOR_5_URL;
    const tempCalibration = 2.5;

    return (
        <div className="container text-center">
            <Sensor room={room_name} url={url} tempCalibration={tempCalibration} />
        </div>
    );
};

export default WashRoomClimate;
