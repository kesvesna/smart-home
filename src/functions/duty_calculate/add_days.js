
export const addDays = (date, addDays) => {

    const result = new Date(date);
    result.setDate(result.getDate() + addDays);

    return result;
};




