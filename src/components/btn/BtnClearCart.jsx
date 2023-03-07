import './BtnClearCart.css';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ClearCart = () => {
  const { clear } = useContext(CartContext);

  return (
    <div>
      <button className="clearCartBtn" onClick={clear}>
        Clear Cart
      </button>
    </div>
  );
};

export default ClearCart;
