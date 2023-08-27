import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    async function fetchBeerDetails() {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeerDetails(response.data);
      } catch (error) {
        console.error('Error en beer details:', error);
      }
    }

    fetchBeerDetails();
  }, [beerId]);

  if (!beerDetails) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <img src={beerDetails.image_url} alt={beerDetails.name} style={{ width: '100px' }} />
      <h1>{beerDetails.name}</h1>
      <p>{beerDetails.tagline}</p>
      <p>First Brewed: {beerDetails.first_brewed}</p>
      <p>Attenuation Level: {beerDetails.attenuation_level}</p>
      <p>Description: {beerDetails.description}</p>
      <p>Contributed by: {beerDetails.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
