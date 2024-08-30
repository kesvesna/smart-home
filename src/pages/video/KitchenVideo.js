import React from 'react';
import Camera1 from "../../components/cameras/Camera1";
import Sensor1 from "../../components/sensors/Sensor1";


const KitchenVideo = () => {

    return (
        <div className="container pt-2">
            <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                    <h4 className="card-title">Кухня:</h4>
                    <Sensor1 room={"Кухня"}/>
                    <Camera1/>
                </div>
            </div>
        </div>
    );
};

export default KitchenVideo;
