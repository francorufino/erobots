import React from 'react';
import BtnGlow from '../../components/btn/BtnGlow';
import { Layout } from '../../components/layout/Layout';
import './EmptyCart.css';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
      <Layout>
        <div className="outterContainerEC">
          <div className="left-containerEC">
            <div>
              <h2>Your cart is empty</h2>
              <Link to={'/'}>
                {' '}
                <BtnGlow text="Start shopping" />
              </Link>
            </div>
          </div>
          <div className="right-containerEC"></div>
        </div>
      </Layout>
    </div>
  );
};

export default EmptyCart;
