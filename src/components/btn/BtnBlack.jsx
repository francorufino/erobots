import React from 'react';
import './BtnBlack.css';

const BtnBlack = ({ text, fn }) => {
  return (
    <div>
      <button onClick={fn} id="blackBtn">
        {text}
      </button>
    </div>
  );
};

export default BtnBlack;
