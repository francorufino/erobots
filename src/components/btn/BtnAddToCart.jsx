import React, { useState, useContext } from 'react';
import './BtnAddToCart.css';

function BtnAddToCart({ item }) {
  const [stock, setStock] = useState(item.stock);
  const [wantToBuy, setWantToBuy] = useState(0);

  const promiseStock = new Promise((resolve, reject) => {
    if (item) {
      setTimeout(() => {
        resolve(item);
      }, 2000);
    }
    promiseStock
      .then((data) => {
        setStock(data);
      })
      .catch((rej) => {
        alert('Oh oh, something went wrong, try again later');
        console.error('Error at promiseStock: ' + rej);
      });
  });

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
      //add o item no cartContext. (cartContext eh como se fosse um localstorage)

      //fazer a logica de salvar o item clicado no add to cart no localstorage ou firebase passando o item inteiro e recuperar esses dados no componente CartPage
    }
  }

  return (
    <div>
      <div>
        <div className="btnAddToCart">
          <button
            id="glow"
            onClick={addToCartFn}
            className="addtocart"
            style={
              stock === 0 && wantToBuy === 0
                ? { backgroundColor: 'gray', color: '#1a1a1d' }
                : { backgroundColor: 'rgb(44, 157, 157)', color: '#1a1a1d' }
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
