import React, { useState, useContext } from 'react';
import './Login.css';
import { Layout } from '../layout/Layout';
import { UserContext } from '../../contexts/UserContext';

const Signup = () => {
  const [userFName, setUserFName] = useState('');
  const [userLName, setUserLName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { handleSubmitSignUp } = useContext(UserContext);

  function submitFormSignup(e) {
    e.preventDefault();
    handleSubmitSignUp(
      userFName,
      userLName,
      email,
      emailConfirm,
      password,
      passwordConfirm,
    );
  }

  return (
    <Layout>
      <div className="containerHolder">
        <div className="outter-left">teste</div>
        <div className="outter-right">
          teste2
          <div className="inner-right">testing</div>
          <form onSubmit={submitFormSignup}>
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
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
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

export default Signup;
