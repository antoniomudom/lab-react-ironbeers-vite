import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
function AddBeerPage() {
  const navigate = useNavigate();

  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBeerData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCreateBeer = async (event) => {
    event.preventDefault();

    try {
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData);
      navigate('/beers');
    } catch (error) {
      console.error('fallo al añadir la cervecita:', error);
      
    }
  };

  return (
    <div>
      <h1>Añadir nueva cervecita</h1>
      <form onSubmit={handleCreateBeer}>
        <label>Name</label>
        <input type="text" name="name" value={beerData.name} onChange={handleInputChange} required />
        <br />

        <label>Tagline</label>
        <input type="text" name="tagline" value={beerData.tagline} onChange={handleInputChange} required />
        <br />

        <label>Description</label>
        <textarea name="description" value={beerData.description} onChange={handleInputChange} required />
        <br />

        <label>First Brewed</label>
        <input type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleInputChange} required />
        <br />

        <label>Brewer's Tips</label>
        <input type="text" name="brewers_tips" value={beerData.brewers_tips} onChange={handleInputChange} required />
        <br />

        <label>Attenuation Level</label>
        <input type="number" name="attenuation_level" value={beerData.attenuation_level} onChange={handleInputChange} required />
        <br />

        <label>Contributed By</label>
        <input type="text" name="contributed_by" value={beerData.contributed_by} onChange={handleInputChange} required />
        <br />

        <Button variant="success" type="submit">Add Beer</Button>
      </form>
    </div>
  );
}

export default AddBeerPage;

