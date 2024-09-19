import React from "react";

const LoadingView = ({ room }) => (
    <div className="card">
        <h5 className="card-header">{room}</h5>
        <div className="card-body p-0 pt-3">
            <p className="card-text">Запрос данных ...</p>
        </div>
    </div>
);

export default LoadingView;