import React from 'react';


const ElectricalPanel = () => {

    return (
        <div className="container">
            <p></p>
            <p>Номера автоматов идут слева направо, сверху вниз</p>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item">Кухня, комната 6, розетка над эл. щитом</li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item">Розетка в аквариуме (стекляшке)</li>
                <li className="list-group-item">43 квартира, комнаты 1 и 2</li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item">Умывальник</li>
                <li className="list-group-item">Комната 5</li>
                <li className="list-group-item">Комната 1, комната 2</li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item">Коридор</li>
                <li className="list-group-item">Розетки: комната 4, комната 5, возле входной двери в квартиру</li>
                <li className="list-group-item">Вводной</li>
            </ol>
            <br/>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>
        </div>
    );
};

export default ElectricalPanel;
