import React from 'react';
import Sensor1 from "../../components/sensors/Sensor1";


const Room5Climate = () => {

    return (
        <div className="container">
            <div className="card mt-2" style={{width: "20rem"}}>
                <div className="card-body">
                    <h4 className="card-title">Кухня:</h4>
                    <Sensor1/>
                </div>
            </div>
        </div>
    );
};

export default Room5Climate;
