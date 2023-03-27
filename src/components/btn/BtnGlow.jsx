import React from 'react';

const BtnGlow = ({ text, fn }) => {
  return (
    <div>
      <button type="submit" onClick={fn}>
        {text}
      </button>
    </div>
  );
};

export default BtnGlow;
