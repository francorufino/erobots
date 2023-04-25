import React from 'react';
import BtnGlowNOTformSubmit from '../../components/btn/BtnGlowNOTformSubmit';
import { Layout } from '../../components/layout/Layout';
import './EmptyCart.css';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="outterContainerEC">
            <div className="left-containerEC">
              <div>
                <h2>Your cart is empty</h2>
                <div className="ecBtnStartShopping">
                  <Link to={'/'}>
                    {' '}
                    <BtnGlowNOTformSubmit text="Start shopping" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="right-containerEC"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EmptyCart;
