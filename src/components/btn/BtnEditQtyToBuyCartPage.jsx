import React from 'react';
import './BtnEditQtyToBuyCartPage.css';

const BtnEditQtyToBuy = () => {
  return (
    <div>
      <span className="btnQtdeItem">
        <span>Qty: </span>
        <span className="btnsQty">
          <button>-</button>
          <span className="qtdeEditItem">1</span>
          <button>+</button>
        </span>
      </span>
    </div>
  );
};

export default BtnEditQtyToBuy;
