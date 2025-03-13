import React from 'react';


const Duty = () => {

    return (
        <div className="container">
            <p></p>
            <h6>На неделе две уборки</h6>
            <hr/>
            <h6>Первая - в среду или четверг</h6>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kitchen">
                Кухня
            </button>
            <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#toilet">
                Туалет
            </button>

            <hr/>
            <h6>Вторая - в субботу или воскресенье</h6>

            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal"
                    data-bs-target="#kitchen">
                Кухня
            </button>
            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal"
                    data-bs-target="#toilet">
                Туалет
            </button>
            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal"
                    data-bs-target="#wash_basin">
                Умывальник
            </button>
            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal"
                    data-bs-target="#corridor">
                Коридор
            </button>
            <button type="button" className="btn btn-primary me-2 mb-2" data-bs-toggle="modal"
                    data-bs-target="#shower">
                Душевая
            </button>
            <hr/>
            <p>Если что-то непонятно или не получается, спросите у арендодателя или соседей.</p>

            <div className="modal fade" id="kitchen" tabIndex="-1" aria-labelledby="labelKitchen"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="labelKitchen">Уборка кухни</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Подметаем пол, моем пол, раковины, краны, плиту, протираем подоконник
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="toilet" tabIndex="-1" aria-labelledby="labelToilet"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="labelToilet">Уборка туалета</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Только свой туалет</p>
                            <p>Подметаем пол, моем пол, унитаз, бачок</p>
                            <p>В унитазе после уборки не должно быть желтых подтеков и пятен</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="wash_basin" tabIndex="-1" aria-labelledby="labelWashBasin"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="labelWashBasin">Уборка умывальника</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Подметаем пол, моем пол, раковины, зеркала, краны</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="corridor" tabIndex="-1" aria-labelledby="labelCorridor"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="labelCorridor">Уборка коридора</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Подметаем пол, моем пол, зеркала, коврик, места под обувью</p>
                            <p>Входную железную дверь моем по необходимости</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="shower" tabIndex="-1" aria-labelledby="labelShower"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="labelShower">Уборка душевой</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Стены, пол</p>
                            <p>Шторку замачиваем на пару часов (вода, соль 3 ст. ложки, порошок 1 ст. ложка, белизна 2
                                колпачка, сода)</p>
                            <p>Потом стираем в любой машинке</p>
                            <p>После уборки на стенах не должно быть желтых подтеков и пятен</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>
        </div>
    );
};

export default Duty;
