import React from 'react';


const Why = () => {


    return (
        <div className="container">
            <h5 className="mt-3">Почему штрафы:</h5>
            <ul className="list-group mt-3">
                <li className="list-group-item">Арендодатель совсем обнаглел и не хочет воспитывать чужих детей (мы все чьи-то дети)</li>
                <li className="list-group-item">Список штрафов пополняется по мере возникновения нештатных ситуаций</li>
                <li className="list-group-item">Плата за аренду не дает Вам право наносит ущерб имуществу и окружающим</li>
                <li className="list-group-item">Если Вы умудрились заработать штраф, подумайте, может Вам лучше жить отдельно</li>
            </ul>
            <br/>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>
        </div>
    );
};

export default Why;
