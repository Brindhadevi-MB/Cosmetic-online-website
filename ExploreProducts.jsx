// src/components/ExploreProducts.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExploreProducts.css';

const ExploreProducts = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const offerImages = [
    "https://i.imgur.com/Xy9mQPN.jpg",
    "https://i.imgur.com/qAVCxqO.jpg",
    "https://i.imgur.com/VsN0yEv.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 30); // speed of scroll
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="explore-page">
      <div className="image-slider" ref={sliderRef}>
        {offerImages.map((src, index) => (
          <img key={index} src={src} alt={`Offer ${index}`} />
        ))}
      </div>

      <div className="explore-content">
        <h2>Unveil Your Glam Look 💖</h2>
        <p>✨ Exclusive Discounts Await You ✨</p>
        <div className="explore-buttons">
          <button onClick={() => navigate('/skincare')}>Shop Skincare</button>
          <button onClick={() => navigate('/makeup')}>Shop Makeup</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
