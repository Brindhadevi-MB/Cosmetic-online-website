// src/components/AdminLogin.js
import './AdminLogin.css';
import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateAdmin = () => {
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validateAdmin}>Login</button>
    </div>
  );
};

export default AdminLogin;
