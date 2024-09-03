import React from 'react';
import Sensor1 from "../../components/sensors/Sensor1";


const iframeStyle = {
    "width": "100%",
    "border": "none",
    "overflow": "hidden",
    "height": "100vh"
};

const KitchenClimate = () => {

    return (
        <div className="container">
            <div className="card mt-2" style={{width: "20rem"}}>
                <div className="card-body">
                    <h4 className="card-title">Кухня:</h4>
                    <Sensor1/>
                </div>
            </div>
            {/*<iframe src="//5.16.20.15:62000" id="iframe_sensor_1" style={iframeStyle}>*/}
            {/*</iframe>*/}
        </div>
    );
};

export default KitchenClimate;
