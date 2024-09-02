import React from 'react';
import { NavLink } from "react-router-dom";
import Logout from '../../pages/auth/Logout'

const Navbar = ({ auth, user, setAuth }) => {

    return (
        <>
            <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold fs-4 active-link" to={"/"}>Квартира 42</NavLink>
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
                                        <NavLink className="dropdown-item" to={"/duty/room_1"}>Комната 1</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/duty/room_2"}>Комната 2</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/duty/room_3"}>Комната 3</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/duty/room_4"}>Комната 4</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/duty/room_5"}>Комната 5</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Штрафы
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to={"/fines/reasons"}>За что</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/fines/why"}>Почему</NavLink>
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
                                        <NavLink className="dropdown-item" to={"/memo/tenant"}>Жильца</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/memo/duty"}>Дежурного</NavLink>
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
                                        <NavLink className="dropdown-item" to={"/washing/shower_cabin"}>Душевая
                                            кабинка</NavLink>
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
                                        <NavLink className="dropdown-item" to={"/storage/things"}>Вещи</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/storage/shoes"}>Обувь</NavLink>
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
                                        <a className="dropdown-item"
                                           href="/user_files/ShowerRoomWashingMachineKraft.pdf">В душевой</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/user_files/KitchenWashingMachineBeko.pdf">На
                                            кухне</a>
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
                                        <NavLink className="dropdown-item" to={"/video/all_rooms"}>Все
                                            помещения</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/video/kitchen"}>Кухня</NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/video/room_5"}>Комната 5</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "
                                         to={"/power_supply/electrical_panel"}>Электрощит</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/health/first_aid_kit"}>Аптечка</NavLink>
                            </li>
                            {auth != null ?
                                <li className="nav-item">
                                    <div className="nav-link"><Logout setAuth={setAuth}/></div>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/login"}>Войти</NavLink>
                                </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    );
}

export default Navbar;
