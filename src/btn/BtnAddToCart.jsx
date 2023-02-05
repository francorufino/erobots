import React, { useState } from 'react';
import './BtnAddToCart.css';

function BtnAddToCart({ detailStock }) {
  const [stock, setStock] = useState(detailStock);
  const [wantToBuy, setWantToBuy] = useState(0);

  function addToWantToBuy() {
    if (stock >= 1) {
      setWantToBuy(wantToBuy + 1);
      setStock(stock - 1);
    }
  }

  function removeFromWantToBuy() {
    if (wantToBuy >= 0) {
      setWantToBuy(wantToBuy - 1);
      setStock(stock + 1);
    }
    if (wantToBuy === 0) {
      setWantToBuy(1);
    }
  }

  function addToCartFn() {
    setWantToBuy(1);
    if (stock >= 1) {
      setStock(stock - 1);
    }
    if (stock === 0) {
      setWantToBuy(0);
    }
    if (stock !== 0 && wantToBuy !== 0) {
      alert('Product(s) added to your cart');
    }
  }

  return (
    <div>
      <div>
        <div className="btnAddToCart">
          <button
            onClick={addToCartFn}
            className="addtocart"
            disabled={stock === 0 && wantToBuy === 0}
            style={
              stock === 0 && wantToBuy === 0
                ? { backgroundColor: 'gray', color: '#1a1a1d' }
                : { backgroundColor: '#e9974a', color: '#1a1a1d' }
            }
          >
            {wantToBuy === 0 && stock === 0 ? 'Out of stock' : 'Add to cart'}
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
        <span
          className="inStockTextNumber"
          style={stock < 5 ? { color: '#e9974a' } : { color: '#d3cfcd' }}
        >
          Only {stock} left in stock{' '}
        </span>
      </div>
    </div>
  );
}

export default BtnAddToCart;
