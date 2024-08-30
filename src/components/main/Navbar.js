import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4" href="/">Квартира 42</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    График уборки
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/duty/room_1">Комната 1</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/duty/room_2">Комната 2</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/duty/room_3">Комната 3</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/duty/room_4">Комната 4</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/duty/room_5">Комната 5</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Памятки
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/memo/tenant">Жильца</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/memo/duty">Дежурного</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Мытье
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/washing/shower_cabin">Душевая кабинка</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Хранение
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/storage/things">Вещи</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/storage/shoes">Обувь</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Стирка
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/user_files/KitchenWashingMachineBeko.pdf">На
                                        кухне</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item"
                                           href="/user_files/ShowerRoomWashingMachineKraft.pdf">В душевой</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Видео
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/video/all_rooms">Все помещения</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/video/kitchen">Кухня</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="/video/room_5">Комната 5</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/health/first_aid_kit">Аптечка</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    );
}

export default Navbar;
