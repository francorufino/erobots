import React, { useContext, useState, useEffect } from 'react';
import CartList from '../cartList/CartList';
import { CartContext } from '../../contexts/CartContext';
import EmptyCart from '../../views/emptyCart/EmptyCart';
import { Layout } from '../../components/layout/Layout';
import '../cartList/CartPage.css';
import BtnPlaceOrder from '../btn/BtnPlaceOrder';
import BtnClearCart from '../../components/btn/BtnClearCart';

const CartListContainer = () => {
  const { productsAdded, cartTotal } = useContext(CartContext);
  if (productsAdded.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <Layout>
        <div className="container">
          <div className="header">
            <div className="titleShoppingCart">Shopping Cart</div>
            <div className="titlePrice priceEBtnClear">
              <div>Price</div>
            </div>
          </div>
          <hr />
          {productsAdded.map((product) => {
            return (
              <CartList
                key={product.id}
                product={product}
                sumCart={cartTotal}
              />
            );
          })}
          <div className="totalCart">
            <span className="totalProductCart">
              Subtotal ({productsAdded.length} items): $ {cartTotal}
            </span>
          </div>
        </div>
        <div>
          <BtnPlaceOrder />
        </div>
        <div>
          <BtnClearCart />
        </div>
      </Layout>
    </div>
  );
};

export default CartListContainer;
