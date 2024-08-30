import React from "react";


const HomeComponent = () => {
    return (
        <div>
            <div className="alert alert-success mt-3" role="alert">
                Уважайте покой соседей
            </div>
            <div className="alert alert-success mt-3" role="alert">
                Гость, один, до 22:00
            </div>
            <div className="alert alert-danger mt-3" role="alert">
                Курить запрещено
            </div>
            <div className="alert alert-danger mt-3" role="alert">
                Готовить еду в комнате запрещено
            </div>
            <div className="alert alert-danger mt-3" role="alert">
                Употреблять наркотики запрещено
            </div>
            <div className="alert alert-danger mt-3" role="alert">
                Входную дверь открывать запрещено
            </div>
            <div className="alert alert-info" role="alert">
                Более подробная инфа в памятках
            </div>
            <div className="alert alert-info" role="alert">
                Просьбы, жалобы, предложения пишите в личку
            </div>
        </div>
    );
};

export default HomeComponent;