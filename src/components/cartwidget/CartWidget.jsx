import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {
  const { qtyToBuy } = useContext(CartContext);
  return (
    <div className="cart-container">
      <Link to="/cart">
        <div className="cart">
          <img
            className="cart-img navbarNames"
            src={require('../../assets/images/robotarm.png')}
            alt=""
          />
          <span className="cart-number ">{qtyToBuy}</span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
