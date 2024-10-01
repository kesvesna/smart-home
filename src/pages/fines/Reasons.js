import React from 'react';


const Reasons = () => {


    return (
        <div className="container">
            <h5 className="mt-3">За что штрафы:</h5>
            <ul className="list-group mt-3">
                <li className="list-group-item">Мешок с мусором больше суток лежит в квартире или возле</li>
                <li className="list-group-item">Мусор пахнет</li>
                <li className="list-group-item">Еда испортилась в холодильнике и пахнет</li>
                <li className="list-group-item">Открыто окно на балконе и налило воды во время дождя</li>
                <li className="list-group-item">Открыто окно на балконе и намело снега</li>
                <li className="list-group-item">Утром на столе вчерашняя еда или мусор</li>
                <li className="list-group-item">Свалка на балконе</li>
                <li className="list-group-item">Просрочка платежа без уведомления арендодателя, увеличение платы
                    на весь срок проживания
                </li>
                <li className="list-group-item">Не успели сделать уборку по графику и никого об этом не предупредили</li>
                <li className="list-group-item">Гость после 22:00</li>
                <li className="list-group-item">Оскорбление жильцов</li>
                <li className="list-group-item">Приготовление пищи в комнате</li>
                <li className="list-group-item">Курение в квартире (без разницы табак или электронка)</li>
                <li className="list-group-item">Употребление алкоголя</li>
                <li className="list-group-item">Открыли входную дверь посторонним</li>
                <li className="list-group-item">Спите на матрасе без постельного белья</li>
                <li className="list-group-item">Справляете нужду в комнате (сразу выселение, в этот же день)</li>
            </ul>
            <ul className="list-group mt-3">
                <li className="list-group-item">Первый штраф +500р. к аренде в этом месяце</li>
                <li className="list-group-item">Второй штраф по этой же причине +2000р. к аренде в этом месяце</li>
                <li className="list-group-item">Третий штраф по этой же причине минус Залог и До свидания</li>
            </ul>
            <br/>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>
        </div>
    );
};

export default Reasons;
