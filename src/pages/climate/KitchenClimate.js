import React from 'react';
import Sensor from "../../components/sensors/Sensor";
import Camera1 from "../../components/cameras/Camera1";


const iframeStyle = {
    "width": "100%",
    "border": "none",
    "overflow": "hidden",
    "height": "100vh"
};

const KitchenClimate = () => {

    const url = process.env.REACT_APP_SENSOR_2_URL;
    const tempCalibration = 3.0;
    const room_name = 'Кухня';

    return (
        <div className="container text-center">
            <Sensor room={room_name} url={url} tempCalibration={tempCalibration} />
        </div>
    )
        ;
};

export default KitchenClimate;
