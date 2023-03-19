import React, { useState } from 'react';
import './Login.css';
import { Layout } from '../layout/Layout';

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
      console.log('TESTEEEEEE' + userEmail, userFName, userLName);
      console.log('TESTEEEEEE 2' + localStorage.getItem('userFN'));
      setUserFName(localStorage.getItem('userFN'));
      setUserLName(localStorage.getItem('userLN'));
      setUserEmail(localStorage.getItem('userEmail'));
    }
  }

  return (
    <Layout>
      <div className="containerHolder">
        <div className="outter-left">teste</div>
        <div className="outter-right">
          teste2
          <p>{userFName}</p>
          <div className="inner-right">testing</div>
          <form onSubmit={submitUserLocalStorage}>
            <label>
              Name:
              <input
                type="text"
                value={userFName}
                onChange={(e) => setUserFName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Last name:
              <input
                type="text"
                value={userLName}
                onChange={(e) => setUserLName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Confirm Email:
              <input
                type="email"
                value={userEmailConfirm}
                onChange={(e) => setUserEmailConfirm(e.target.value)}
              />
            </label>
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
