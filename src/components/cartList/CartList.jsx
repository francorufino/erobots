import React from 'react';
import './CartPage.css';

const CartList = ({ product, amount }) => {
  return (
    <div>
      <section>
        <div className="bodyCart">
          <div>
            <img className="imgProductCart" src={product.image}></img>
          </div>
          <div className="bodyDescription">
            <div className="descriptionProduct">
              <div>{product.name}</div>
              <div>
                <span className="btnQtdeItem">
                  <span>Qty: </span>
                  <span className="btnsQty">
                    <button>-</button>
                    <span className="qtdeEditItem">{amount}</span>
                    <button>+</button>
                  </span>
                </span>
                <span> | detail</span>
                <span> | delete</span>
              </div>
            </div>
          </div>
          <span className="priceItem">
            U$ {Number(product.price).toLocaleString('en')}
          </span>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default CartList;
