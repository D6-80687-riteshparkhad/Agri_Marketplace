import React from 'react';
import '../CSS/Navbar.css'; // Import your custom CSS

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
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/buy">Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sell">Sell</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/share">Share</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
