import React, { useContext, useState, useEffect } from 'react';
import './CheckOut.css';
import { FaLock } from 'react-icons/fa';
import Logo from '../navbar/Logo';
import '../../components/loginAndSignup/Login.css';
import Footer from '../../components/footer/Footer';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import BtnGlowNOTformSubmit from '../../components/btn/BtnGlowNOTformSubmit';
import BtnBlackFormSubmit from '../../components/btn/BtnBlackFormSubmit';

const CheckOut = () => {
  const navigate = useNavigate();
  const { cartTotal, productsAdded, placeOrder } = useContext(CartContext);

  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  const userAddress = JSON.parse(localStorage.getItem('userAddress'));
  const userBorough = JSON.parse(localStorage.getItem('userBorough'));
  const userZipCode = JSON.parse(localStorage.getItem('userZipCode'));
  const userCreditCard = JSON.parse(localStorage.getItem('userCreditCart'));

  useEffect(() => {
    if (!userFirstName || !userLastName || !userEmail) {
      navigate('/login');
    }
  }, [userFirstName, userLastName, userEmail]);

  useEffect(() => {
    if (productsAdded.length == 0) {
      navigate('/');
    }
  }, [productsAdded]);

  const [promocode, setPromocode] = useState('');
  const [applyPromoCode, setApplyPromoCode] = useState(0);
  const [tax, setTax] = useState(cartTotal * (8.875 / 100));
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    if (shipping === 0) {
      setShipping(Math.floor(Math.random() * 21 + 10));
    }
  }, []);

  function handleSubmitPromoCode(e) {
    setApplyPromoCode(0);
    e.preventDefault();
    localStorage.setItem('promocode', JSON.stringify(promocode));
    sweetAlertVerifiyngPromoCode();
    const getPromoCode = JSON.parse(localStorage.getItem('promocode'));
    if (getPromoCode.length < 6) {
      sweetAlertWrongPromoCodeMsg();
    } else {
      setApplyPromoCode(Math.floor(Math.random() * 101 + 100));
      setTimeout(() => {
        sweetAlertPromoCodeApllied();
      }, 1500);
    }
  }

  function sweetAlertVerifiyngPromoCode() {
    new Swal({
      title: 'Verifying',
      text: 'Verifying Promo Code',
      icon: 'warning',
      iconColor: '#ea58f9',
      color: '#ea58f9',
      background: '#212121',
      showConfirmButton: false,
      backdrop: `
      rgb(110, 237, 237))
      // })`,
      padding: '3em',
      timer: 3000,
    });
  }

  function sweetAlertPromoCodeApllied() {
    new Swal({
      title: 'Applied!',
      text: 'Your promo code was applied to your order',
      icon: 'success',
      iconColor: '#ea58f9',
      color: '#ea58f9',
      background: '#212121',
      showConfirmButton: false,
      backdrop: `
    rgb(110, 237, 237))
    // })`,
      padding: '3em',
      timer: 3000,
    });
  }

  function sweetAlertWrongPromoCodeMsg() {
    new Swal({
      title: 'Wrong Promo Code',
      text: 'Please verifying your promo code and try again. Our promo codes are at least 6 digits long',
      icon: 'error',
      iconColor: '#ea58f9',
      color: '#ea58f9',
      background: '#212121',
      showConfirmButton: true,
      backdrop: `
      rgb(110, 237, 237))
      // })`,
      padding: '3em',
      confirmButtonColor: 'rgb(44, 157, 157)',
    });
  }

  return (
    <div>
      <div className="outterContainerCheckout">
        <div className="bg-nav">
          <div className="container">
            <div className="headerContainer">
              <div className="logo">
                <Link className="link" to={'/'}>
                  <Logo />
                </Link>
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
                  {`${userFirstName?.toUpperCase()} ${userLastName?.toUpperCase()}`}
                </div>
                <div>{userAddress}</div>
                <div>
                  {userBorough}, {userZipCode}
                </div>
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
                  <div> Mastercard ending in {userCreditCard?.substr(-4)}</div>
                </div>

                <div className="formPromoCode">
                  <p>Add a gift card or promotion code (optional)</p>{' '}
                </div>
                <form onSubmit={handleSubmitPromoCode} action="">
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
                    <BtnBlackFormSubmit
                      text="Submit"
                      fn={handleSubmitPromoCode}
                    />
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
                  <div>
                    U$ {Number(shipping).toFixed(2).toLocaleString('en')}
                  </div>
                  <div>
                    - U$ {Number(shipping).toFixed(2).toLocaleString('en')}
                  </div>
                  <div>
                    {'- U$ ' +
                      Number(applyPromoCode).toFixed(2).toLocaleString('en')}
                  </div>
                  <div>U$ {Number(tax).toFixed(2).toLocaleString('en')} </div>
                  <div className="totalCheckout totalAmount">
                    U${' '}
                    {Number(cartTotal + tax - applyPromoCode)
                      .toFixed(2)
                      .toLocaleString('en')}{' '}
                  </div>
                </div>
              </div>
              <hr />
              <div className="btnPlaceOrderContainer">
                <BtnGlowNOTformSubmit
                  text="Place order"
                  fn={() => placeOrder(cartTotal + tax - applyPromoCode)}
                />
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
