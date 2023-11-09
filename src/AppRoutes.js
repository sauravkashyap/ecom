// src/AppRoutes.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductListing from './components/Product-Listing/ProductListing';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* Add more routes as needed */}
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
