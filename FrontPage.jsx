import React from 'react';
import { Link } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="frontpage">
      <header className="header">
        <div className="logo">SECRET HUES</div>
        <nav className="main-nav">
  <Link to="/"><i className="fa fa-home"></i> Home</Link>
  <Link to="/exploreproducts"><i className="fa fa-shopping-bag"></i> Shop</Link>
  <Link to="/about"><i className="fa fa-info-circle"></i> About</Link>
  <Link to="/cart" className="cart-icon"><i className="fa fa-shopping-cart"></i></Link>
</nav>

      </header>

      <div className="hero">
        <div className="hero-image">
          <img src="https://media.istockphoto.com/id/883019542/photo/keep-your-skin-healthy.jpg?s=612x612&w=0&k=20&c=IRpHXgfvBQwq_FhYb9JOjFF-wEN3VdlhTGap-7TM2JQ=" alt="Beauty Model" />
          <div className="leaf-overlay">BEAUTY</div>
        </div>

        <div className="hero-text">
          <h1>New Products<br />For You</h1>
          <p>
            Discover the magic of skincare and self-care with Secret Hues. Curated with love and nature.
          </p>
          <div className="button-group">
            <Link to="/adminlogin" className="hero-btn">Admin Login</Link>
            <Link to="/customersignup" className="hero-btn">Customer Signup</Link>
            <Link to="/customerlogin" className="hero-btn">Customer Login</Link>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>www.secrethues.com</p>
        <div className="socials">
          <i className="fa fa-instagram" />
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
        </div>
      </footer>
    </div>
  );
};

export default FrontPage;
