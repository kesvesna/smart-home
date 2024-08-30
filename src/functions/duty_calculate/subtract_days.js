
export const subtractDays = (date, subtractDays) => {

    const result = new Date(date);
    result.setDate(result.getDate() - subtractDays);

    return result;
};




