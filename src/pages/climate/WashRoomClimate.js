import React from 'react';
import Sensor5 from "../../components/sensors/Sensor5";


const WashRoomClimate = () => {

    const room_name = 'Умывальник';

    return (
        <div className="container text-center">
            <Sensor5 room={room_name}/>
        </div>
    );
};

export default WashRoomClimate;
