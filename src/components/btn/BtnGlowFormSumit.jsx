import React from 'react';
import './BtnGlow.css';

const BtnGlowFormSubmit = ({ text, fn }) => {
  return (
    <div>
      <button className="glow" type="submit" onClick={fn}>
        {text}
      </button>
    </div>
  );
};

export default BtnGlowFormSubmit;
