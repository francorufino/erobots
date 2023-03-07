import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { CartContext } from '../../contexts/CartContext';
import { FaDollyFlatbed } from 'react-icons/fa';

const CartWidget = () => {
  const { totalItemsInCart } = useContext(CartContext);
  return (
    <div className="cart-container">
      <Link to="/cart">
        <div id="cart" className="cart">
          <FaDollyFlatbed />
          <span className="cart-number ">{totalItemsInCart()}</span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
