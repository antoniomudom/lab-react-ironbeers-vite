import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{ width: '50px' }} />
            <Link to={`/beers/${beer._id}`}>
              <h2>{beer.name}</h2>
            </Link>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
