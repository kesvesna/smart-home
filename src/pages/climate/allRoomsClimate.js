import React from 'react';
import KitchenClimate from "./KitchenClimate";
import Room5Climate from "./Room5Climate";
import CorridorClimate from "./CorridorClimate";
import WashRoomClimate from "./WashRoomClimate";

const AllRoomsClimate = () => {

    return (
        <div>
            <div className="container text-center">
                <div className="row mt-3">
                    <div className="col-12 col-md-6 mb-3">
                        <KitchenClimate/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <Room5Climate/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-6 mb-3">
                        <CorridorClimate/>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <WashRoomClimate/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRoomsClimate;
