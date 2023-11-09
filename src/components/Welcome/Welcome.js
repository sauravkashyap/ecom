// src/Welcome.js

import React from 'react';
import './Welcome.css'; // Import your custom styles
import '../Banner/Banner';
import Banner from '../Banner/Banner';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Banner />
    </div>
  );
};

export default Welcome;
