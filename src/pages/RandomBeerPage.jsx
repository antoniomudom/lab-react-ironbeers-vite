import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    console.log('Fetching random beer...');
    async function fetchRandomBeer() {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setRandomBeer(response.data);
      } catch (error) {
        console.error('Error eligiendo random beer:', error);
      }
    }

    fetchRandomBeer();
  }, []);

  console.log('RandomBeerPage render');

  if (!randomBeer) {
    console.log('RandomBeerPage: No random beer data');
    return <h3>Loading...</h3>;
  }

  console.log('RandomBeerPage: Random beer data', randomBeer);

  return (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ width: '100px' }} />
      <h1>{randomBeer.name}</h1>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
