// src/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from "react-icons/bi";
import './Header.css'; // Import your custom styles

const Header = () => {
  return (
    <header className="custom-header">
      <div className="logo">Your Logo</div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart"><BiCartAlt /></Link>
      </nav>
    </header>
  );
};

export default Header;
