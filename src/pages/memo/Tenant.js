import React from 'react';


const Tenant = () => {

    const headerStyle = {
        "background-color":"rgba(255,208,208,0.3)"
    }
    return (
        <div className="container">
            <ul className="list-group pt-2">
                <li className="list-group-item">
                    Уважайте покой окружающих, возможно люди работали в ночную смену.
                </li>
                <li className="list-group-item">
                    По квартире ходим только в тапочках.
                </li>
                <li className="list-group-item">
                    Туалет №2: комнаты №1, №2, №3, №4.
                </li>
                <li className="list-group-item">
                    Уборку делаем только в том туалете, в который ходим.
                </li>
                <li className="list-group-item">
                    Готовьтесь пожалуйста к уборке заранее. Не надо в день уборки рассказывать, что у вас нет ведра или
                    швабры.
                </li>
                <li className="list-group-item">
                    Все необходимое для уборки храним на своем балконе.
                </li>
                <li className="list-group-item">
                    Стиральная машина на кухне для комнат №1, №2, №3, №4.
                </li>
                <li className="list-group-item">
                    Гость один до 22:00. Ночевать с Вами может только Ваша мама.
                </li>
                <li className="list-group-item">
                    Въезжаете в комнате чисто, выезжаете в комнате и холодильнике должно быть чисто.
                </li>
                <li className="list-group-item">
                    О намерении съехать предупреждайте пожалуйста заранее, хотя бы за неделю.
                </li>
                <li className="list-group-item">
                    У каждого все свое: посуда, бытовая химия и т.д. Не берите чужое без разрешения во избежание
                    недоразумений.
                </li>
                <li className="list-group-item">
                    Чем-то пользовались? Швабра, пылесос и т.д. Верните на место в первоначальном виде.
                </li>
                <li className="list-group-item">
                    Ставьте окна на балконе на верхнее проветривание или закрывайте, если Вас нет в квартире, может
                    пойти дождь, балкон течет к соседям снизу
                </li>
                <li className="list-group-item">
                    Если Вас не будет больше трех дней, перед отъездом показывайте, что в холодильнике и комнате.
                </li>
                <li className="list-group-item">
                    Выкидывайте мусор сразу, не ждите пока он начнет пахнуть, желающих его нюхать нет.
                </li>
                <li className="list-group-item">
                    Приготовили еду, освободите плиту и духовку.
                </li>
                <li className="list-group-item">
                    Балкон для сушки белья, не надо на нем устраивать свалку коробок и прочего барахла.
                </li>
                <li className="list-group-item">Не успеваете сделать уборку по графику предупредите об этом следующего
                    дежурного или арендодателя.
                </li>
                <li className="list-group-item">
                    <ul className="list-group">
                        <li className="list-group-item border-danger border-2" style={headerStyle}>
                            <b>Запрещено:</b>
                        </li>
                        <li className="list-group-item border-danger border-2">
                            Приготовление пищи в комнате, для этого есть кухня.
                        </li>
                        <li className="list-group-item border-danger border-2">
                            Употреблять вещества изменяющие сознание, алкоголь в том числе.
                        </li>
                        <li className="list-group-item border-danger border-2">
                            Курить в квартире, без разницы что это.
                        </li>
                        <li className="list-group-item border-danger border-2">
                            Ароматерапия, свечи, палочки.
                        </li>
                        <li className="list-group-item border-danger border-2">
                            Спать на матрасе без постельного белья.
                        </li>
                        <li className="list-group-item border-danger border-2">
                            Открывать входную дверь, если это не к Вам. Не имеет значения кто за ней.
                        </li>
                    </ul>
                </li>
                <li className="list-group-item">
                    Вы имеете право находиться в квартире, а не сеять хаос и разруху.
                </li>
            </ul>
            <br/>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>
        </div>
    );
};

export default Tenant;
