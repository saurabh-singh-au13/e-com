import React from 'react';
import Cart from './Cart';
import './MultipleCarts.css';

function MultipleCarts() {
  const carts = [
    {
      title: 'Product 1',
      price: '$10.00',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Product 2',
      price: '$20.00',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Product 3',
      price: '$30.00',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Product 4',
      price: '$40.00',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Product 5',
      price: '$50.00',
      image: 'https://via.placeholder.com/150',
    },
    // {
    //   title: 'Product 6',
    //   price: '$60.00',
    //   image: 'https://via.placeholder.com/150',
    // },
  ];

  return (
    <div className="multiple-carts">
      {carts.map((cart, index) => (
        <Cart key={index} {...cart} />
      ))}
    </div>
  );
}

export default MultipleCarts;
