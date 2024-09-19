import React from "react";

const ErrorView = ({ room, message }) => (
    <div className="card">
        <h5 className="card-header">{room}</h5>
        <div className="card-body p-0 pt-3">
            <p className="card-text">Ошибка: {message}</p>
        </div>
    </div>
);

export default ErrorView;