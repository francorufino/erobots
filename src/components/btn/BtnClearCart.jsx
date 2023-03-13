import './BtnClearCart.css';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ClearCart = () => {
  const { clearCart } = useContext(CartContext);

  return (
    <div>
      <button className="clearCartBtn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default ClearCart;
