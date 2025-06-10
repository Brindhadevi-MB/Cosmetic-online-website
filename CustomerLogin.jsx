import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerLogin.css';

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 👈 For page navigation

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password123') {
      // ✅ Successful login
      navigate('/exploreproducts');
    } else {
      alert('Invalid login credentials!');
    }
  };

  return (
    <div className="login-container">
      <h2>Customer Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default CustomerLogin;
