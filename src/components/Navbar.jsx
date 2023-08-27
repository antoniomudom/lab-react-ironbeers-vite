import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{backgroundColor:'blue'}}>
          <Link to="/">Inicio
          <img src="src/assets/home-icon.png" alt="" />
          </Link>
        </nav>
      );

}

export default Navbar;
