import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../contexts/CartContext';
import { FaDollyFlatbed } from 'react-icons/fa';

const CartWidget = () => {
  const { getTotalQtyOfItems } = useContext(CartContext);
  return (
    <div id="cart" className="cart">
      <FaDollyFlatbed />
      <span className="cart-number ">{getTotalQtyOfItems()}</span>
    </div>
  );
};

export default CartWidget;
