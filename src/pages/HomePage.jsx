import React from 'react';
import { Link } from 'react-router-dom';
import AllBeersImage from '../assets/beers.png';
import RandomBeerImage from '../assets/random-beer.png';
import NewBeerImage from '../assets/new-beer.png';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to IronBeers!</h2>
      <div className="links">
        <Link to="/beers">
          <img src={AllBeersImage} alt="All Beers" />
          <h3>All Beers</h3>
        </Link>
        <Link to="/random-beer">
          <img src={RandomBeerImage} alt="Random Beer" />
          <h3>Random Beer</h3>
        </Link>
        <Link to="/new-beer">
          <img src={NewBeerImage} alt="New Beer" />
          <h3>New Beer</h3>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
