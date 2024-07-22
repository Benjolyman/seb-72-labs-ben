import React, { useState, useEffect } from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = () => {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        const fetchStarships = async () => {
            let allStarships = [];
            let url = 'https://swapi.dev/api/starships/';
            while (url) {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    allStarships = allStarships.concat(data.results);
                    url = data.next; // SWAPI provides the URL for the next page
                } catch (error) {
                    console.error('Error fetching starships:', error);
                    url = null; // Exit the loop on error
                }
            }
            setStarships(allStarships);
        };

        fetchStarships();
    }, []);

    return (
        <main>
            <h2>Starships</h2>
            <p>Number of results: {starships.length}</p>
            <section>
                <ul>
                    {starships.map((starship, index) => (
                        <StarshipCard key={index} starship={starship} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default StarshipList;
