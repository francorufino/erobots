import React from 'react';
import { Layout } from '../../components/layout/Layout';
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div>
      <Layout>
        <div className="head-text-empty">
          <div className="head-image-empty"></div>
          <div class="text-on-image-empty">
            <h3 id="text-empty" className="container text-empty">
              {' '}
              Your cart is empty{' '}
            </h3>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EmptyCart;
