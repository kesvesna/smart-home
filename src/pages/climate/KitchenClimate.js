import React from 'react';
import Sensor2 from "../../components/sensors/Sensor2";
import Camera1 from "../../components/cameras/Camera1";


const iframeStyle = {
    "width": "100%",
    "border": "none",
    "overflow": "hidden",
    "height": "100vh"
};

const KitchenClimate = () => {

    const url = process.env.REACT_APP_SENSOR_2_URL;
    const tempCalibration = 2;
    const room_name = 'Кухня';

    return (
        <div className="container text-center">
            <Sensor2 room={room_name} url={url} tempCalibration={tempCalibration}/>
        </div>
    )
        ;
};

export default KitchenClimate;
