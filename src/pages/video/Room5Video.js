import React from 'react';
import Camera1 from "../../components/cameras/Camera1";


const Room5Video = () => {

    return (
        <div className="container">
            <div className="card mt-2" style={{width: "30rem"}}>
                <div className="card-body">
                    <p>В разработке</p>
                    <h4 className="card-title">Комната 5:</h4>
                    <Camera1/>
                </div>
            </div>
        </div>
    );
};

export default Room5Video;
