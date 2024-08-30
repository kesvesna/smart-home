import React, { useEffect, useState } from 'react';
import { dutyCalculate } from '../../functions/duty_calculate/duty_calculate'


const Room1 = ({roomNumber}) => {

    const thStyleRed = {
        color: 'red',
        fontSize: '18px'
    };

    const thStyleBlack = {
        color: 'black',
        fontSize: '18px'
    };

    const [dutyWeeks, setDutyWeeks] = useState({});

    useEffect(() => {

        const dutyWeeks = dutyCalculate(roomNumber);
        setDutyWeeks(dutyWeeks);

    }, []); // This will run only once after the initial render

    return (
        <div className="container">
            <table className="table table-striped table-bordered mt-3">
                <thead>
                <tr>
                    <th scope="col" style={thStyleBlack}>Комната {roomNumber}, недели уборки</th>
                </tr>
                <tr>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(dutyWeeks) && dutyWeeks.map(({week}) => (
                    <tr key={week.index}>
                        <th style={thStyleBlack}>
                            {week.startDate.toLocaleDateString()} - {week.finishDate.toLocaleDateString()}
                        </th>
                    </tr>
                ))}
                <tr>
                    <th></th>
                </tr>
                <tr>
                    <th style={thStyleRed}>
                        В понедельник принимаете дежурство
                    </th>
                </tr>
                <tr>
                    <th style={thStyleRed}>
                        Дежурный моет всё
                    </th>
                </tr>
                <tr>
                    <th style={thStyleRed}>
                        Уборка стоит 3000р, если нет желания убираться
                    </th>
                </tr>
                </tbody>
            </table>
            <a href="javascript:history.back()" className="btn btn-success btn-lg btn-sm mb-2">Назад</a>

        </div>
    );
};

export default Room1;
