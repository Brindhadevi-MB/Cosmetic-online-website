// src/components/Offers.jsx
import React from 'react';

import './Offers.css';

const offerList = [
  {
    description: 'Get 20% OFF on all skincare products!',
    code: 'GLOW20',
  },
  {
    description: 'Flat ₹100 OFF on orders above ₹999',
    code: 'HUES100',
  },
  {
    description: 'Buy 2 Lipsticks, Get 1 FREE!',
    code: 'LIPLOVE',
  },
  {
    description: 'Free shipping on your first order 💌',
    code: 'FREESHIP',
  },
  {
    description: 'Get a free face mask on orders above ₹499',
    code: 'MASKME',
  },
  {
    description: 'Weekend Deal! 15% OFF storewide 🎉',
    code: 'WEEKEND15',
  },

];

const Offers = () => {
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code "${code}" copied! 🛍️`);
  };

  return (
    <div>
     
      <div className="offers-container">
        <h2>🎁 Exciting Offers Just for You!</h2>
        <div className="offers-list">
          {offerList.map((offer, index) => (
            <div className="offer-card" key={index}>
              <p className="offer-desc">{offer.description}</p>
              <div className="coupon-section">
              <span className="coupon-code">{offer.code}</span>
              <button onClick={() => handleCopy(offer.code)}>Copy</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
