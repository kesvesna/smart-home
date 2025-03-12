import React from 'react';


const SmartRules = () => {

    return (
        <div className="container">
            <p className="pt-3">Комнаты сдаются только на длительный срок (от 3-х месяцев).</p>
            <p className="pt-3">Поэтому: одна неделя проживания = аренда за месяц / 2.</p>
            <p className="pt-3">Один день проживания = аренда за месяц / 10.</p>
            <p className="pt-3">Это только для тех, кто уже арендует комнату, не для вновь прибывших.</p>
            <br/>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>
        </div>
    );
};

export default SmartRules;
