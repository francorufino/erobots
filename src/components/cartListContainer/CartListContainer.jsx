import React, { useContext, useState, useEffect } from 'react';
import CartList from '../cartList/CartList';
import { CartContext } from '../../contexts/CartContext';

const CartListContainer = () => {
  const { productsAdded } = useContext(CartContext);
  const [allProductsInCart, setAllProductsInCart] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsAdded);
      }, 5000);
    }).then((data) => {
      console.log('esse eh o carrinho agora: ' + data);
      setAllProductsInCart(data);
    });
  }, [allProductsInCart]);

  if (allProductsInCart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <div className="titleShoppingCart">Shopping Cart</div>
      {allProductsInCart.map((product) => {
        return <CartList key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CartListContainer;
