import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './Checkout.css';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discountMsg, setDiscountMsg] = useState('');

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (coupon === 'GLOW10') {
      setDiscountMsg('✨ Coupon GLOW10 applied! 10% OFF');
    } else if (coupon === 'SHINE20') {
      setDiscountMsg('🌟 Coupon SHINE20 applied! 20% OFF');
    } else if (coupon !== '') {
      setDiscountMsg('❌ Invalid Coupon');
    } else {
      setDiscountMsg('');
    }

    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">
        <h2>🧾 Confirm Your Order</h2>
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <div className="input-wrapper">
            <span className="icon">👩‍💼</span>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-wrapper">
            <span className="icon">🏠</span>
            <input type="text" placeholder="Address" required />
          </div>
          <div className="input-wrapper">
            <span className="icon">🌆</span>
            <input type="text" placeholder="City" required />
          </div>
          <div className="input-wrapper">
            <span className="icon">📮</span>
            <input type="text" placeholder="Pincode" required />
          </div>
          <div className="input-wrapper">
            <span className="icon">📱</span>
            <input type="text" placeholder="Mobile Number" required />
          </div>
          <div className="input-wrapper">
            <span className="icon">📧</span>
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-wrapper">
            <span className="icon">💳</span>
            <select required>
              <option value="">Select Payment Method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          <div className="input-wrapper">
            <span className="icon">🏷️</span>
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          {discountMsg && <p className="discount-msg">{discountMsg}</p>}
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
        <p className="thankyou-msg">Thanks for shopping with Secret Hues 💖</p>
      </div>

      {orderPlaced && (
        <>
          <Confetti />
          <div className="popup">
            <h3>🎉 Order Placed Successfully!</h3>
            <p>Thank you for choosing Secret Hues 💄</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
