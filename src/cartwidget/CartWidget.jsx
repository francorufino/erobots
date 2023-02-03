import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-container">
      <image className="cart">
        <img
          className="cart-img"
          src={require('../../src/images/robotarm.png')}
          alt=""
        />
      </image>
      <span className="cart-number">0</span>
    </div>
  );
};

export default CartWidget;
