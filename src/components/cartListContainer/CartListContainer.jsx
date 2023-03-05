import React, { useContext, useState, useEffect } from 'react';
import CartList from '../cartList/CartList';
import { CartContext } from '../../contexts/CartContext';
import EmptyCart from '../../views/emptyCart/EmptyCart';
import { Layout } from '../../components/layout/Layout';

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
    return <EmptyCart />;
  }

  return (
    <div>
      <Layout>
        <div className="header">
          <div className="titleShoppingCart">Shopping Cart</div>
          <div className="titlePrice"> Price</div>
        </div>
        <hr />
        {allProductsInCart.map((product) => {
          return <CartList key={product.id} product={product} />;
        })}
      </Layout>
    </div>
  );
};

export default CartListContainer;
