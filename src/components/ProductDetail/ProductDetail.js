// src/components/ProductDetail/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import product1 from '../../assets/images/image1.jpg';
import product2 from '../../assets/images/image2.jpg';
import Cart from '../Cart/Cart';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  // Get the product ID from the route params
  const { productId } = useParams();

  // Dummy product data with image URLs
  const products = [
    {
      id: '1',
      name: 'Product 1',
      price: '$19.99',
      description: 'Product 1 description',
      imageUrl: product1,
    },
    {
      id: '2',
      name: 'Product 2',
      price: '$29.99',
      description: 'Product 2 description',
      imageUrl: product2,
    },
    // Add more products here
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

   // Save cart data to local storage whenever the cart changes
   useEffect(() => {
    if(cart?.length!=0){
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount


  // Find the selected product
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-detail-container">
      <h2 className="product-detail-title">{selectedProduct.name}</h2>
      <div className="product-detail">
        <img
          src={selectedProduct.imageUrl}
          alt={selectedProduct.name}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <p className="product-detail-description">{selectedProduct.description}</p>
          <p className="product-detail-price">{selectedProduct.price}</p>
          <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
