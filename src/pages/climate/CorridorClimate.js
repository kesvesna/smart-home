import React from 'react';
import Sensor4 from "../../components/sensors/Sensor4";


const CorridorClimate = () => {

    const room_name = 'Коридор';

    return (
        <div className="container text-center">
            <Sensor4 room={room_name}/>
        </div>
    );
};

export default CorridorClimate;
