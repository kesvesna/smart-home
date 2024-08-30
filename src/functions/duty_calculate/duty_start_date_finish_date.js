const startDateString = "08.05.2024"; // 05 august 2024
const finishDateString = "08.11.2024"; // 11 august 2024
const addDays = 35;


export const dutyStartDateFinishDate = (roomNumber) => {

    const startDate = new Date(startDateString);
    startDate.setDate(startDate.getDate() + addDays + (roomNumber -1) * 7);

    const finishDate = new Date(finishDateString);
    finishDate.setDate(finishDate.getDate() + addDays + (roomNumber -1) * 7);

    return {
        "startDate": startDate,
        "finishDate": finishDate
    };
};




