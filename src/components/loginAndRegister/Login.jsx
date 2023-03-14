import React from 'react';
import './Login.css';
import { Layout } from '../../components/layout/Layout';

const login = () => {
  return (
    <Layout>
      <div className="containerHolder">
        <div className="outter-left">teste</div>
        <div className="outter-right">
          teste2
          <div className="inner-right">testing</div>
          {/* <div className="wrapper">
            <div className="title-text">
              <div className="title login">Login Form</div>
              <div className="title sinup">Signup Form</div>
            </div>
            <div className="form-container">
              <div className="slide-controls">
                <input type="radio" name="slider" id="login" checked />
                <input type="radio" name="slider" id="signup" />
                <label htmlFor="login" className="slide login">
                  Login
                </label>
                <label htmlFor="signup" className="slide signup">
                  Signup
                </label>
                <div className="slide-tab"></div>
              </div>
              <div className="form-inner">
                <form action="#" className="login">
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Type your email address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Type your password"
                      required
                    />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field">
                    <input type="submit" value="Login" />
                  </div>
                  <div className="signup-link">
                    Not a member? <a href="#">Sign up now</a>
                  </div>
                </form>
                <form action="#" className="signup">
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Type your email address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Confirm your Email address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Type your password"
                      required
                    />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field">
                    <input type="submit" value="Signup" />
                  </div>
                  <div className="signup-link">
                    Not a member? <a href="#">Sign up now</a>
                  </div>
                </form>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default login;
