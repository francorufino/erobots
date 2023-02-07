import React from 'react';
import './CartWidget.css';

const CartWidget = (props) => {
  return (
    <div className="cart-container">
      <image className="cart">
        <img
          className="cart-img"
          src={require('../../src/images/robotarm.png')}
          alt=""
        />
      </image>
      <span className="cart-number">{props.number}</span>
    </div>
  );
};

export default CartWidget;
