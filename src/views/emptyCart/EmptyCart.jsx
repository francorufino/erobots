import React from 'react';
import { Layout } from '../../components/layout/Layout';
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div>
      <Layout>
        <div className="outterContainerEmptyCart">
          <div className="emptyCartText">
            <p>Your cart is empty</p>
          </div>
          <div className="bgForTextEmptyCart"></div>
          <div className="imageEmptyCart">
            <img
              src={require('../../assets/images/robotCryingPink.png')}
              alt=""
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EmptyCart;
