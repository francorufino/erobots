import React, { useContext } from 'react';
import '../btn/BtnPlaceOrder.css';
import { CartContext } from '../../contexts/CartContext';

const BtnPlaceOrder = () => {
  const { placeOrder } = useContext(CartContext);
  return (
    <button className="btnPlaceOrder" onClick={placeOrder}>
      Place Order
    </button>
  );
};

export default BtnPlaceOrder;
