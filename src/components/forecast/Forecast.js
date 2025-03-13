import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
    const [data, setData] = useState(null); // State to hold the fetched data
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to hold any errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=60.00&longitude=30.28&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&start_date=2024-09-18&end_date=2024-09-18"); // Replace with your HTTPS URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json(); // Parse the response as JSON
                setData(jsonData); // Set the fetched data to state
            } catch (err) {
                setError(err.message); // Capture any errors
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array means this runs once when the component mounts

    // Handle loading, error, and display the data
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>На улице</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the JSON data */}
        </div>
    );
};

export default DataFetchingComponent;
