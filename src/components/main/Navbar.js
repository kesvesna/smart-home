import React from 'react';
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to={"/"}>Квартира 42</Link>
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
                                    <li>
                                        <Link className="dropdown-item" to={"/duty/room_1"}>Комната 1</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/duty/room_2"}>Комната 2</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/duty/room_3"}>Комната 3</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/duty/room_4"}>Комната 4</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/duty/room_5"}>Комната 5</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Памятки
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/memo/tenant"}>Жильца</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/memo/duty"}>Дежурного</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Мытье
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/washing/shower_cabin"}>Душевая кабинка</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Хранение
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/storage/things"}>Вещи</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/storage/shoes"}>Обувь</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Стирка
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/user_files/ShowerRoomWashingMachineKraft.pdf">В душевой</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/user_files/KitchenWashingMachineBeko.pdf">На кухне</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Видео
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/video/all_rooms"}>Все помещения</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/video/kitchen"}>Кухня</Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"/video/room_5"}>Комната 5</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/health/first_aid_kit"}>Аптечка</Link>
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
