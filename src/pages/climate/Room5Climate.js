import React from 'react';
import Sensor3 from "../../components/sensors/Sensor3";


const Room5Climate = () => {

    const room_name = 'Комната 5';

    return (
        <div className="container text-center">
            <Sensor3 room={room_name}/>
        </div>
    );
};

export default Room5Climate;
