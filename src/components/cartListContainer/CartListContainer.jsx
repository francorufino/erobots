import React, { useContext } from 'react';
import CartList from '../cartList/CartList';
import { CartContext } from '../../contexts/CartContext';
import EmptyCart from '../../views/emptyCart/EmptyCart';
import { Layout } from '../../components/layout/Layout';
import './CartListContainer.css';
// import BtnPlaceOrder from '../../components/btn/BtnPlaceOrder';
// import BtnClearCart from '../../components/btn/BtnClearCart';
import BtnGlow from '../btn/BtnGlow';
import BtnBlack from '../btn/BtnBlack';

const CartListContainer = () => {
  const { productsAdded, cartTotal, handleClickClearCart } =
    useContext(CartContext);
  if (productsAdded.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <Layout>
        <div className="container">
          <div className="header">
            <div className="titleShoppingCart">Shopping Cart</div>
            <div className="titlePrice">
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
                stock={product.stock}
              />
            );
          })}
          <div>
            <div>
              <span className="totalProductCart">
                Subtotal ({productsAdded.length} items): U${' '}
                {Number(cartTotal).toLocaleString('en')}
              </span>
              <div>
                <div className="container-right">
                  <div className="btnGlowCLC">
                    <BtnGlow text="Procced to checkout" />
                  </div>
                  <div className="btnBlack">
                    <BtnBlack
                      onClick={handleClickClearCart}
                      className="teste"
                      text="Clear cart"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CartListContainer;
