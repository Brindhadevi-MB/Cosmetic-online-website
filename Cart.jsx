// src/components/Cart.jsx
import React, { useContext } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, getTotalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const totalAmount = getTotalAmount();

  return (
    <div className="cart-bg">
      <div className="cart-container">
        <h2 className="cart-title">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Explore products to add some glam!</p>
        ) : (
          <div className="cart-box">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <h4 className="cart-name">{item.name}</h4>
                  <p className="cart-price">₹{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Total: ₹{totalAmount}</h3>
              <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
