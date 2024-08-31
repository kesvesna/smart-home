import React from 'react';
import Sensor1 from "../../components/sensors/Sensor1";
import Camera1 from "../../components/cameras/Camera1";


const Room5Video = () => {

    return (
        <div className="container">
            <div className="card mt-2" style={{width: "30rem"}}>
                <div className="card-body">
                    <h4 className="card-title">Комната 5:</h4>
                    <Sensor1 room={"Кухня"}/>
                    <Camera1/>
                </div>
            </div>
        </div>
    );
};

export default Room5Video;
