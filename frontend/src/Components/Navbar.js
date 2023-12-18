import React from 'react';
import '../CSS/Navbar.css'; // Import your custom CSS
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand m-lg-auto" href="/">Agriculture Marketplace</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nvb" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'/buy'}>Buy</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'/sell'}>Sell</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'/trend'}>Trends</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
