import React, { useState } from 'react';
import './Login.css';
import { Layout } from '../layout/Layout';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userFName, setUserFName] = useState('');
  const [userLName, setUserLName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userEmailConfirm, setUserEmailConfirm] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userZipCode, setUserZipCode] = useState('');
  const [userBorough, setUserBorough] = useState('');
  const [userCreditCard, setUserCreditCard] = useState('');
  const navigate = useNavigate();

  function submitUserLocalStorage(e) {
    e.preventDefault();
    if (
      userFName === '' ||
      userLName === '' ||
      userEmail === '' ||
      userEmailConfirm === '' ||
      userAddress === '' ||
      userZipCode === '' ||
      userBorough === '' ||
      userCreditCard === ''
    ) {
      alert('The fields cannot be empty');
    } else if (userEmail !== userEmailConfirm) {
      alert('your emails do not match');
    } else {
      localStorage.setItem('userFN', JSON.stringify(userFName));
      localStorage.setItem('userLN', JSON.stringify(userLName));
      localStorage.setItem('userEmail', JSON.stringify(userEmail));
      localStorage.setItem('userAddress', JSON.stringify(userAddress));
      localStorage.setItem('userZipCode', JSON.stringify(userZipCode));
      localStorage.setItem('userBorough', JSON.stringify(userBorough));
      localStorage.setItem('userCreditCart', JSON.stringify(userCreditCard));
      navigate('/checkout');
    }
  }

  return (
    <Layout>
      <div className="container containerHolderRegister">
        <div className="outter-leftRegister left-columnRegister">
          <h2>Guest Checkout</h2>
          <div></div>
          <div className="containerFormRegister">
            <form onSubmit={submitUserLocalStorage}>
              <label>
                What is your first name?
                <input
                  className="imputRegister"
                  type="text"
                  value={userFName}
                  onChange={(e) => setUserFName(e.target.value)}
                />
              </label>
              <br />
              <label>
                What is your last name?
                <input
                  className="imputRegister"
                  type="text"
                  value={userLName}
                  onChange={(e) => setUserLName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Which email we should send your order confirmation to?
                <input
                  className="imputRegister"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                Please re-type your email:
                <input
                  className="imputRegister"
                  type="email"
                  value={userEmailConfirm}
                  onChange={(e) => setUserEmailConfirm(e.target.value)}
                />
              </label>
              <br />
              <label>
                Which address we should send your robot to?
                <input
                  className="imputRegister"
                  type="text"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                />
              </label>
              <br />
              <label>
                Please type the zip code
                <input
                  className="imputRegister"
                  type="text"
                  value={userZipCode}
                  onChange={(e) => setUserZipCode(e.target.value)}
                />
              </label>
              <br />
              <label>
                Please type the borough or area for this address
                <input
                  className="imputRegister"
                  type="text"
                  value={userBorough}
                  onChange={(e) => setUserBorough(e.target.value)}
                />
              </label>
              <br />
              <label>
                Please type the credit card number
                <input
                  className="imputRegister"
                  type="text"
                  value={userCreditCard}
                  onChange={(e) => setUserCreditCard(e.target.value)}
                />
              </label>
              <br />
              <div className="divBtnLogInRegister">
                <button id="btnSubmitFormLogin" className="glow" type="submit">
                  Submit
                </button>
              </div>
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
        </div>
        <div className="outter-rightRegister">
          <div className="inner-rightRegister">
            <img
              id="img"
              src={require('../../assets/images/login.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
