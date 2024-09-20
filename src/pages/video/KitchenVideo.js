import React from 'react';
import Camera1 from "../../components/cameras/Camera1";


const KitchenVideo = () => {

    return (
        <div className="container pt-2">
            <div className="card" style={{width: "30rem"}}>
                <div className="card-body">
                    <p>В разработке</p>
                    <h4 className="card-title">Кухня:</h4>
                    <Camera1/>
                </div>
            </div>
        </div>
    );
};

export default KitchenVideo;
