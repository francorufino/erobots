import React from 'react';
import './BtnBlack.css';

const BtnBlackFormSubmit = ({ text, fn }) => {
  return (
    <div>
      <button onSubmit={fn} id="blackBtn">
        {text}
      </button>
    </div>
  );
};

export default BtnBlackFormSubmit;
