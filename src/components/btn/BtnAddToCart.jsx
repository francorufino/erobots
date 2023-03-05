import React, { useState, useContext } from 'react';
import './BtnAddToCart.css';
import { CartContext } from '../../contexts/CartContext';

function BtnAddToCart({ item }) {
  const { addProduct } = useContext(CartContext);
  const [stock, setStock] = useState(item.stock);
  const [wantToBuy, setWantToBuy] = useState(1);

  function addToWantToBuy() {
    if (stock >= 1) {
      setWantToBuy(wantToBuy + 1);
    }
  }

  function removeFromWantToBuy() {
    if (wantToBuy > 1) {
      setWantToBuy(wantToBuy - 1);
    }
    // if (wantToBuy === 0) {
    //   setWantToBuy(1);
    // }
  }

  function addToCartFn() {
    if (stock === 0) {
      setWantToBuy(0);
      alert('This product is unavailable at this moment');
    } else if (wantToBuy === 0 && stock >= 1) {
      alert('Choose a quantity to buy');
    } else if (wantToBuy >= 1 && stock >= 1) {
      setStock(stock - wantToBuy);
      addProduct(item, wantToBuy);
      setWantToBuy(1);

      //fazer a logica de salvar o item clicado no add to cart no firebase passando o item inteiro e recuperar esses dados no componente CartPage
    }
  }

  //qdo add no cart ver se eh o mesmo id,
  //se for nao add no cart
  //mas atualizar a +qtde want to buy no cartpage
  //e update o total final
  //colocar o botao de wanttobuy no cartpage

  return (
    <div>
      <div>
        <div className="btnAddToCart">
          <button
            id="glow"
            onClick={addToCartFn}
            className={stock === 0 && wantToBuy === 0 ? 'outOfStock' : 'glow'}
          >
            {wantToBuy === 0 && stock === 0 ? 'Out of stock' : 'Add to cart'}
          </button>
          <div className="qtdeToAddToCart">
            <span className="wantBuyQty">Qtde: </span>
            <button
              className="wantBuyMinus"
              onClick={removeFromWantToBuy}
              disabled={stock === 0 || wantToBuy === 1}
            >
              -
            </button>
            <button className="wantNumber">{wantToBuy}</button>
            <button
              className="wantBuyPlus"
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
