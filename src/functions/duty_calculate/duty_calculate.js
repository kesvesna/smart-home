import { dutyStartDateFinishDate } from "./duty_start_date_finish_date";
import { addDays } from "./add_days";
import { subtractDays } from "./subtract_days";

var moment = require('moment');

export const dutyCalculate = (roomNumber) => {

    let firstDutyWeek = dutyStartDateFinishDate(roomNumber);

    const period = 35; // days between duty
    const oneWeek = 6; // days one duty (one week)

    let dutyWeekStart = firstDutyWeek.startDate;

    while(moment().isAfter(dutyWeekStart)) {
        dutyWeekStart = addDays(dutyWeekStart, period);
    }

    dutyWeekStart = subtractDays(dutyWeekStart, period);
    let dutyWeekEnd = addDays(dutyWeekStart, oneWeek);

    let roomDutyWeeks = [];
    roomDutyWeeks.push({"week": {"startDate": dutyWeekStart, "finishDate": dutyWeekEnd, "index": 1}});

    let begin = null;
    let end = null;

    for (let i = 2; i < 7; i++) {
        begin = addDays(roomDutyWeeks[roomDutyWeeks.length - 1].week.startDate, period);
        end = addDays(roomDutyWeeks[roomDutyWeeks.length - 1].week.finishDate, period);
        roomDutyWeeks.push({"week": {"startDate": begin, "finishDate": end, "index":i}});
    }

    console.log('result: ', roomDutyWeeks);
    return roomDutyWeeks;
};




