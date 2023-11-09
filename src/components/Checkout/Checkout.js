// src/components/Checkout/Checkout.js

import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Checkout.css';

const Checkout = ({ cart, removeFromCart }) => {
  const [shippingAddresses, setShippingAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');

  const handleAddAddress = () => {
    if (newAddress) {
      setShippingAddresses([...shippingAddresses, newAddress]);
      setNewAddress('');
    }
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = [...shippingAddresses];
    updatedAddresses.splice(index, 1);
    setShippingAddresses(updatedAddresses);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="cart-and-addresses">
        <div className="cart">
          <h3>Shopping Cart</h3>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
        <div className="shipping-addresses">
          <h3>Shipping Addresses</h3>
          <ul>
            {shippingAddresses.map((address, index) => (
              <li key={index}>
                {address}
                <button onClick={() => handleRemoveAddress(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Enter a new shipping address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <button onClick={handleAddAddress}>Add Address</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
