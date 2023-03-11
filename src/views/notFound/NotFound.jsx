import React from 'react';
import './NotFound.css';
import '../../App.css';

const NotFound = () => {
  return (
    <div className="head-text">
      <div className="head-image"></div>
      <div class="text-on-image">
        <h3 id="text" className="container text">
          {' '}
          Uh oh... something went wrong{' '}
        </h3>
        <h3 id="text2" className="container text2">
          {' '}
          error: 404 page not found{' '}
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
