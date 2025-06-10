// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTags, FaShoppingCart, FaSignInAlt, FaHome, FaStore } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="Secret Hues Logo" className="brand-logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        
        <li>
          <Link to="/offers">
            <FaTags className="nav-icon" /> Offers
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart className="nav-icon" /> Cart
          </Link>
        </li>
     
      </ul>
    </nav>
  );
};

export default Navbar;
