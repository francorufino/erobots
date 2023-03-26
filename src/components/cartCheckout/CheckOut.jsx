import React, { useContext, useState } from 'react';
import './CheckOut.css';
import { FaLock } from 'react-icons/fa';
import Logo from '../navbar/Logo';
import '../../components/loginAndSignup/Login.css';
import BtnGlow from '../../components/btn/BtnGlow';
import BtnBlack from '../../components/btn/BtnBlack';
import Footer from '../../components/footer/Footer';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

const CheckOut = () => {
  const { cartTotal, productsAdded } = useContext(CartContext);
  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  const [promocode, setPromocode] = useState('');

  function handleSubmitPromoCode(e) {
    e.preventDefault();
    if (promocode === '') {
      return;
    } else {
      console.log({ promocode });
      new Swal({
        title: 'Wrong code',
        text: 'The promo code you entered is invalid, please verify and try again',
        icon: 'warning',
        iconColor: '#ea58f9',
        color: 'rgb(110, 237, 237)',
        background: '#212121',
      });
      setPromocode({ promocode: '' });
    }
    //how do i clear the form?
  }

  return (
    <div>
      <div className="outterContainerCheckout">
        <div className="bg-nav">
          <div className="container">
            <div className="headerContainer">
              <div className="logo">
                <Logo />
              </div>
              <div className="checkoutNameNav">
                <div>{`Checkout (${productsAdded.length} items) `}</div>
              </div>
              <div className="lockContainer">
                <FaLock />
              </div>
            </div>
          </div>
        </div>
        <h3 className="reviewOrderTitle">Review your order</h3>
        <hr className="container" />
        <div className="bodyContainer container">
          <div className="left-container">
            <div>
              <div>
                <div>
                  <p className="title">1. Shipping Address</p>{' '}
                </div>
              </div>
              <div>
                <div>
                  {`${userFirstName.toUpperCase()} ${userLastName.toUpperCase()}`}
                </div>
                <div>3445 23st apt 3B</div>
                <div>Manhattan, NY 10005</div>
              </div>
            </div>
            <hr />

            <div className="paymentContainer">
              <div>
                <div className="title">
                  <p className="title">2. Payment Method</p>
                </div>
                <div className="masterCardContainer">
                  <div>
                    <img
                      className="masterCard"
                      src={require('../../assets/images/mastercard.png')}
                      alt=""
                    />
                  </div>{' '}
                  <div> Mastercard ending in 4509</div>
                </div>

                <div className="formPromoCode">
                  <p>Add a gift card or promotion code (optional)</p>{' '}
                </div>
                <form onClick={handleSubmitPromoCode} action="">
                  <div className="formCheckoutContainer">
                    <span className="fieldPromo">
                      {' '}
                      <input
                        id="inputPromoCode"
                        className="imput"
                        type="text"
                        onChange={(e) => setPromocode(e.target.value)}
                      />
                    </span>
                    <span>
                      <BtnBlack text="Apply" className="btnApply" />
                    </span>
                  </div>
                </form>
                <hr />
                <div>
                  <p className="title">3. Send Order Confirmation to:</p>
                  <p>{userEmail}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sideContainer">
            <div className="right-container">
              <div>
                <p className="title orderSumaryTitle">Order Sumary</p>
              </div>
              <hr />
              <div className="totalBreakDownContainer">
                <div className="descriptionTBD">
                  <div>Items ({productsAdded.length}):</div>
                  <div>Shipping:</div>
                  <div>Shipping:</div>
                  <div>Promo Code:</div>
                  <div>Tax to be collected:</div>

                  <div className="totalCheckout">Order Total:</div>
                </div>
                <div className="amountTBD">
                  {' '}
                  <div>
                    U$ {Number(cartTotal).toFixed(2).toLocaleString('en')}
                  </div>
                  <div>U$ 5.99</div>
                  <div>- U$ 5.99</div>
                  <div>- U$ 0.00</div>
                  <div>
                    U${' '}
                    {Number(cartTotal + 8.875 / 100)
                      .toFixed(2)
                      .toLocaleString('en')}{' '}
                  </div>
                  <div className="totalCheckout totalAmount">
                    U${' '}
                    {Number(cartTotal + 8.875 / 100)
                      .toFixed(2)
                      .toLocaleString('en')}{' '}
                  </div>
                </div>
              </div>
              <hr />
              <div className="btnPlaceOrderContainer">
                <BtnGlow text="Place order" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
