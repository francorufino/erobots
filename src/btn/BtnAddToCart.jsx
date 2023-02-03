import React, { useState } from 'react';
import './BtnAddToCart.css';

function BtnAddToCart({ detailStock }) {
  const [stock, setStock] = useState(detailStock);
  const [wantToBuy, setWantToBuy] = useState(0);

  function addToWantToBuy() {
    if (stock >= 1) {
      setStock(stock - 1);
      setWantToBuy(wantToBuy + 1);
    }
  }

  function removeFromWantToBuy() {
    if (wantToBuy >= 1) {
      setStock(stock + 1);
      setWantToBuy(wantToBuy - 1);
    }
  }

  function addToCartFn() {
    setWantToBuy(0);
    if (stock === 0) {
    }
  }

  return (
    <div>
      <div>
        <div className="btnAddToCart">
          <button onClick={addToCartFn} className="addtocart">
            Add to cart
          </button>
          <div className="qtdeToAddToCart">
            <span>Qtde: </span>
            <button onClick={removeFromWantToBuy} disabled={wantToBuy === 0}>
              -
            </button>
            <button>{wantToBuy}</button>
            <button onClick={addToWantToBuy} disabled={stock === 0}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="textUnderAddToCartBtn">
        <span className="inStockTextNumber">Only {stock} left in stock </span>
      </div>
    </div>
  );
}

export default BtnAddToCart;
