import React, { useState, useContext } from 'react';
import './BtnAddToCart.css';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';
import BtnBlack from './BtnBlack';
import BtnGlowNOTformSubmit from '../btn/BtnGlowNOTformSubmit';

function BtnAddToCart({ item }) {
  const { addProduct } = useContext(CartContext);
  const [stock, setStock] = useState(item.stock);
  const [wantToBuy, setWantToBuy] = useState(stock > 0 ? 1 : 0);

  function addToWantToBuy() {
    if (stock > 0) {
      setWantToBuy(wantToBuy + 1);
    } else if (stock === 0) {
      setWantToBuy(0);
    }
  }

  function removeFromWantToBuy() {
    if (wantToBuy >= 2) {
      setWantToBuy(wantToBuy - 1);
    }
    if (wantToBuy === 1) {
      setWantToBuy(1);
    }
  }

  function productAddedToCartAlert() {
    const Toast = Swal.mixin({
      background: '#212121',
      toast: true,
      position: 'top-start',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      iconColor: '#ea58f9',
      color: '#ea58f9',
      title: 'Your product was added to cart',
    });
  }

  function productOutOfStockAlert() {
    new Swal({
      title: 'Sold out',
      text: 'Sorry, this product is unavailable at this moment, but there is more on the way!',
      icon: 'error',
      iconColor: '#ea58f9',
      // button: 'OK',
      timer: '4000',
      color: 'rgb(110, 237, 237)',
      background: '#212121',
      showConfirmButton: false,
      timer: '4000',
    });
  }

  function chooseQtyToBuyAlert() {
    new Swal({
      title: 'Oops...',
      text: 'Please choose a quantity first',
      icon: 'warning',
      button: 'OK',
    });
  }

  function addToCartFn() {
    if (stock === 0) {
      setWantToBuy(0);
      productOutOfStockAlert();
    } else if (wantToBuy === 0 && stock >= 1) {
      chooseQtyToBuyAlert();
    } else if (wantToBuy >= 1 && stock >= 1) {
      setStock(stock - wantToBuy);
      addProduct(item, wantToBuy);
      productAddedToCartAlert();
    }
    setWantToBuy(stock > 0 ? 1 : 0);
  }

  return (
    <div>
      <div>
        <div className="btnAddToCart">
          {(stock === 0 && wantToBuy === 1) ||
          (stock === 0 && wantToBuy === 0) ? (
            <BtnBlack text="Out of stock" fn={productOutOfStockAlert} />
          ) : (
            <BtnGlowNOTformSubmit fn={addToCartFn} text="Add to cart" />
          )}

          <div className="qtdeToAddToCart">
            <span className="wantBuyQty">Qty: </span>
            <button
              className="wantBuyMinus"
              onClick={removeFromWantToBuy}
              disabled={stock === 0 || wantToBuy === 1}
            >
              -
            </button>
            <button className="wantNumber">
              {stock === 0 ? 0 : wantToBuy}
            </button>
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
