import React from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-container">
      <div className="cart">
        <Link to="/cart">
          <img
            className="cart-img navbarNames"
            src={require('../../src/images/robotarm.png')}
            alt=""
          />
        </Link>
      </div>
      <span className="cart-number ">0</span>
    </div>
  );
};

export default CartWidget;
