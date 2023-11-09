// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import your custom styles

const Footer = () => {
  // Dummy data for your footer
  const dummyData = {
    companyName: 'Your E-Commerce Site',
    address: '1234 Example Street, City, Country',
    phone: '+1 (123) 456-7890',
    email: 'info@your-ecommerce-site.com',
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">{dummyData.companyName}</p>
        <p className="footer-text">{dummyData.address}</p>
        <p className="footer-text">{dummyData.phone}</p>
        <p className="footer-text">{dummyData.email}</p>
      </div>
    </footer>
  );
};

export default Footer;
