// src/components/CustomerSignup.jsx
import './CustomerSignup.css';
import React, { useState } from 'react';

const CustomerSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [skinType, setSkinType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Later: send data to Spring Boot
    alert(`Signup successful for ${name}!`);
  };

  return (
    <div className="signup-container">
      <h2>Signup for Radiant Skin</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <select
        value={skinType}
        onChange={(e) => setSkinType(e.target.value)}
      >
        <option value="">Select Skin Type</option>
        <option value="Oily">Oily</option>
        <option value="Dry">Dry</option>
        <option value="Combination">Combination</option>
        <option value="Normal">Normal</option>
        <option value="Sensitive">Sensitive</option>
      </select>
      <input
        type="password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default CustomerSignup;
