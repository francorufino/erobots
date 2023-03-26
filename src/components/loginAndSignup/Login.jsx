import React, { useState } from 'react';
import './Login.css';
import { Layout } from '../layout/Layout';
import '../../components/btn/BtnAddToCart.css';

const Login = () => {
  const [userFName, setUserFName] = useState('');
  const [userLName, setUserLName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userEmailConfirm, setUserEmailConfirm] = useState('');

  function submitUserLocalStorage(e) {
    e.preventDefault();
    if (
      userFName === '' ||
      userLName === '' ||
      userEmail === '' ||
      userEmailConfirm === ''
    ) {
      alert('The fields cannot be empty');
    } else if (userEmail !== userEmailConfirm) {
      alert('your emails do not match');
    } else {
      localStorage.setItem('userFN', JSON.stringify(userFName));
      localStorage.setItem('userLN', JSON.stringify(userLName));
      localStorage.setItem('userEmail', JSON.stringify(userEmail));
      setUserFName(localStorage.getItem('userFN'));
      setUserLName(localStorage.getItem('userLN'));
      setUserEmail(localStorage.getItem('userEmail'));
    }
    setUserEmail('');
    setUserFName('');
    setUserLName('');
    setUserEmailConfirm('');
  }

  return (
    <Layout>
      <div className="container containerHolder">
        <div className="outter-left left-column">
          <h2>Login</h2>
          <div></div>
          <div className="containerForm">
            <form onSubmit={submitUserLocalStorage}>
              <label>
                Name:
                <input
                  className="imput"
                  type="text"
                  value={userFName}
                  onChange={(e) => setUserFName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Last name:
                <input
                  className="imput"
                  type="text"
                  value={userLName}
                  onChange={(e) => setUserLName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  className="imput"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </label>
              <br />
              <label>
                Confirm Email:
                <input
                  className="imput"
                  type="email"
                  value={userEmailConfirm}
                  onChange={(e) => setUserEmailConfirm(e.target.value)}
                />
              </label>
              <br />
              <br />
              <div className="divBtnLogIn">
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
        <div className="outter-right">
          <div className="inner-right">
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
