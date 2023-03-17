import React, { useState, useContext } from 'react';
import './Login.css';
import { Layout } from '../layout/Layout';
import { UserContext } from '../../contexts/UserContext';

const Login = () => {
  const [userFName, setUserFName] = useState('');
  const [userLName, setUserLName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSubmitLogin, validateEmail } = useContext(UserContext);

  function submitFormLogin(e) {
    e.preventDefault();
    handleSubmitLogin(userFName, userLName, email, confirmEmail, password);
    validateEmail(email, confirmEmail);
  }

  return (
    <Layout>
      <div className="containerHolder">
        <div className="outter-left">teste</div>
        <div className="outter-right">
          teste2
          <div className="inner-right">testing</div>
          <form onSubmit={submitFormLogin}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Confirm Email:
              <input
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </label>
            <br />
            {/* <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label> */}
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
