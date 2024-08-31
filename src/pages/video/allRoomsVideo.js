import React from 'react';
import KitchenVideo from "./KitchenVideo";
import Room5Video from "./Room5Video";
const AllRoomsVideo = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <KitchenVideo />
                </div>
                <div className="col">
                    <Room5Video />
                </div>
            </div>
        </div>
    );
};

export default AllRoomsVideo;
