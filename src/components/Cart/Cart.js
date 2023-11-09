// src/components/Cart.js

import React, { useEffect, useState } from 'react';
import './Cart.css'; // Import your custom styles

const Cart = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
     const getCart = JSON.parse(localStorage.getItem('cart'))
     if(getCart) {
        setCart(getCart)
     }
    },[]);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
      };
  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart && cart.length === 0 ? ( // Check if cart is defined and empty
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cart?.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-details">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div>
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">{item.price}</p>
                  <p className="cart-item-description">{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-from-cart-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
