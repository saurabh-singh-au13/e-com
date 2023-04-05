import React from 'react';
import './Cart.css';

function Cart({ title, price, image }) {
  return (
    <div className="cart">
      <div className="cart-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Cart;
