import React from 'react';
import './BtnGlow.css';

const BtnGlowNOTformSubmit = ({ fn, text }) => {
  return (
    <div>
      <button className="glow" onClick={fn}>
        {text}
      </button>
    </div>
  );
};

export default BtnGlowNOTformSubmit;
