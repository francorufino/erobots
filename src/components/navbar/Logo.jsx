import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <div>
        <svg className="robotFaceImg" width="50" height="50">
          <rect x="5" y="5" width="40" height="40" fill="rgb(110, 237, 237)" />
          <circle cx="15" cy="25" r="5" fill="#000" />
          <circle cx="35" cy="25" r="5" fill="#000" />
          <path
            d="M 12 34 Q 25 41 37 34"
            stroke="#000"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      <div className="text-rainbow-animation">e-robots</div>
    </div>
  );
};

export default Logo;
