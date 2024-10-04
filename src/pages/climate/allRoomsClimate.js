import React from 'react';
import KitchenClimate from "./KitchenClimate";
import Room5Climate from "./Room5Climate";
import Room1Climate from "./Room1Climate";
import Room4Climate from "./Room4Climate";
import Room3Climate from "./Room3Climate";
import Room2Climate from "./Room2Climate";
import CorridorClimate from "./CorridorClimate";
import WashRoomClimate from "./WashRoomClimate";

const AllRoomsClimate = () => {

    return (
        <div>
            <div className="container text-center">
                <div className="row mt-3">
                    <div className="col-12 col-md-4 mb-3">
                        <Room1Climate/>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <Room2Climate/>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <Room3Climate/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-4 mb-3">
                        <Room4Climate/>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <Room5Climate/>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <CorridorClimate/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-4 mb-3">
                        <KitchenClimate/>
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <WashRoomClimate/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllRoomsClimate;
