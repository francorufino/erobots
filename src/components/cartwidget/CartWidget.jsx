import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const totalItemsInCart = useContext(CartContext);
  return (
    <div className="cart-container">
      <Link to="/cart">
        <div className="cart">
          <img
            className="cart-img navbarNames"
            src={require('../../assets/images/robotarm.png')}
            alt=""
          />
          <span className="cart-number ">{totalItemsInCart.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
