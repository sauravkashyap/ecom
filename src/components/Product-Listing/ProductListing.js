import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductListing.css';
import product1 from '../../assets/images/image1.jpg';
import product2 from '../../assets/images/image2.jpg';
import Cart from '../Cart/Cart';

const ProductListing = () => {
  // Dummy product data with image URLs
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$19.99',
      description: 'Product 1 description',
      imageUrl: product1,
    },
    {
      id: 2,
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

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="product-listing-container">
      <h2 className="product-listing-title">Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/products/${product.id}`}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
