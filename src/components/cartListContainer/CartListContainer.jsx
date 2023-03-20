import React, { useContext } from 'react';
import CartList from '../cartList/CartList';
import { CartContext, CartContextProvider } from '../../contexts/CartContext';
import EmptyCart from '../../views/emptyCart/EmptyCart';
import { Layout } from '../../components/layout/Layout';
import '../cartList/CartPage.css';
import BtnPlaceOrder from '../../components/btn/BtnPlaceOrder';
import BtnClearCart from '../../components/btn/BtnClearCart';

const CartListContainer = () => {
  const { productsAdded, cartTotal, qtyPerItem, totalItemsInCart } =
    useContext(CartContext);
  if (productsAdded.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <Layout>
        <div className="container cartListContainer">
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
                qty={qtyPerItem.get(product.id)}
              />
            );
          })}
          <div className="totalCart">
            <div className="totalCartInnerDiv">
              <span className="totalProductCart">
                Subtotal ({totalItemsInCart()} items): U${' '}
                {Number(cartTotal).toLocaleString('en')}
              </span>
              <div>
                <CartContextProvider>
                  <BtnPlaceOrder />
                </CartContextProvider>
              </div>

              <div className="btnClearCart">
                <BtnClearCart />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CartListContainer;
