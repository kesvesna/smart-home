import React from 'react';
import KitchenClimate from "./KitchenClimate";
import Room5Climate from "./Room5Climate";
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
            </div>
        </div>
    );
};

export default AllRoomsClimate;
