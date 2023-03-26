import React from 'react';
import './BtnBlack.css';

const BtnBlack = ({ text }) => {
  return (
    <div>
      <button className="blackBtn">{text}</button>
    </div>
  );
};

export default BtnBlack;
