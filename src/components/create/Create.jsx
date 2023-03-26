import React from 'react';
import { Layout } from '../layout/Layout';
import './Create.css';

const Create = () => {
  return (
    <Layout>
      <div className="create">
        <div>
          <div>
            <h2>Create your own company robot!</h2>
            <h5>Shipped to you in 2 business days!</h5>
          </div>
          <div>
            <img src={require('../../assets/images/creating.png')} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
