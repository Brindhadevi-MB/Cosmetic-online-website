import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Navbar from './components/Navbar';
import ExploreProducts from './components/ExploreProducts';
import AdminLogin from './components/AdminLogin';
import CustomerSignup from './components/CustomerSignup';
import CustomerLogin from './components/CustomerLogin';
import Skincare from './components/Skincare';
import Makeup from './components/Makeup';
import Offers from './components/Offers';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FrontPage from './components/FrontPage';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </CartProvider>
  );
};

const MainContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/'; // Hide Navbar only on front page

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/customersignup" element={<CustomerSignup />} />
        <Route path="/customerlogin" element={<CustomerLogin />} />
        <Route path="/exploreproducts" element={<ExploreProducts />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
