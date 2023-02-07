import React, { useState } from 'react';
import './BtnAddToCart.css';
import CartWidget from '../cartwidget/CartWidget';

function BtnAddToCart({ detailStock }) {
  const [stock, setStock] = useState(detailStock);
  const [wantToBuy, setWantToBuy] = useState(0);
  const [cart, setCart] = useState([]);

  function addToWantToBuy() {
    if (stock >= 1) {
      setWantToBuy(wantToBuy + 1);
    }
  }

  function removeFromWantToBuy() {
    if (wantToBuy >= 0) {
      setWantToBuy(wantToBuy - 1);
    }
    if (wantToBuy === 0) {
      setWantToBuy(1);
    }
  }

  function addToCartFn() {
    if (stock === 0) {
      setWantToBuy(0);
      alert('This product is unavailable at this moment');
    } else if (wantToBuy === 0 && stock >= 1) {
      alert('Choose a quantity to buy');
    } else if (wantToBuy >= 1 && stock >= 1) {
      setStock(stock - wantToBuy);
      setWantToBuy(0);
    }
  }

  return (
    <div>
      <div>
        <div className="btnAddToCart">
          <button
            onClick={addToCartFn}
            className="addtocart"
            style={
              stock === 0 && wantToBuy === 0
                ? { backgroundColor: 'gray', color: '#1a1a1d' }
                : { backgroundColor: '#e9974a', color: '#1a1a1d' }
            }
          >
            {wantToBuy === 0 && stock === 0 ? 'Out of stock' : 'Add to cart'}
          </button>
          <CartWidget number={cart} />
          <div className="qtdeToAddToCart">
            <span>Qtde: </span>
            <button onClick={removeFromWantToBuy} disabled={wantToBuy === 0}>
              -
            </button>
            <button>{wantToBuy}</button>
            <button
              onClick={addToWantToBuy}
              disabled={stock === 0 || wantToBuy >= stock}
            >
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
