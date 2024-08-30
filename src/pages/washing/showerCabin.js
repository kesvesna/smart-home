import React from 'react';


const ShowerCabin = () => {

    return (
        <div className="container">
            <p className="pt-3">Если душевая занята, а Вам срочно надо помыться, то можно воспользоваться душевой кабиной в умывальнике.</p>
            <p className="pt-3">Закрываете шторку и моетесь. Между туалетами на стене есть крючок для вещей.</p>
            <p className="pt-3">С туалетами тоже самое. Если Ваш туалет занят, а Вам надо срочно, то можно зайти в соседний туалет.</p>
            <br/>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>
        </div>
    );
};

export default ShowerCabin;
