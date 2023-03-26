import React from 'react';
import CheckOut from '../cartCheckout/CheckOut';
import { CartContext } from '../../contexts/CartContext';

const CartCheckoutContainer = () => {
  const { productsAdded, cartTotal } = useContext(CartContext);

  return <CheckOut totalCart={cartTotal} totalItems={productsAdded.length} />;
};

export default CartCheckoutContainer;
