import React, { useContext } from 'react';
import CartList from '../cartList/CartList';
import { CartContext } from '../../contexts/CartContext';
import EmptyCart from '../../views/emptyCart/EmptyCart';
import { Layout } from '../../components/layout/Layout';
import './CartListContainer.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import BtnGlowNOTformSubmit from '../../components/btn/BtnGlowNOTformSubmit';
import BtnBlack from '../btn/BtnBlack';

const CartListContainer = () => {
  const navigate = useNavigate();
  const { productsAdded, cartTotal, handleClickClearCart } =
    useContext(CartContext);
  if (productsAdded.length === 0) {
    return <EmptyCart />;
  }

  function messageToUserEmptyCart() {
    new Swal({
      title: 'Checkout is empty',
      text: 'Add something to your cart see the checkout page',
      icon: 'warning',
      iconColor: '#ea58f9',
      color: '#ea58f9',
      background: '#212121',
      showConfirmButton: true,
      backdrop: `
    rgb(110, 237, 237))
    // })`,
      padding: '3em',
    });
  }

  function goToCheckout() {
    if (productsAdded.length > 0) {
      navigate('/checkout');
    } else {
      messageToUserEmptyCart();
    }
  }

  return (
    <div>
      <Layout>
        <div className="container">
          <div className="cartListContainerHolder">
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
                <div className="totalProductCart">
                  Subtotal ({productsAdded.length} items): U${' '}
                  {Number(cartTotal).toLocaleString('en')}
                </div>
                <div className="clcBtnsContainerHolder">
                  <div className="clcLeftColumn"></div>
                  <div>
                    <div className="clcRightColumn">
                      <div className="btnGlowCLC">
                        <Link to="/checkout">
                          <BtnGlowNOTformSubmit
                            fn={goToCheckout}
                            text="Procced to checkout"
                          />
                        </Link>
                      </div>
                      <div className="btnBlack">
                        <BtnBlack fn={handleClickClearCart} text="Clear cart" />
                      </div>
                    </div>
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
