import React from "react";

const fetchSensorData = async (url) => {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export default fetchSensorData;