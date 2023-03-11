import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="bg">
      <div className="loaderContainer">
        <div className="loader"></div>
        <div className="loading">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
