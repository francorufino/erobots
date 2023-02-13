import React from 'react';
import './CartPage.css';

const CartPage = ({itemCart}) => {
  return (
    <div>
      <div className="container">
        <h2 className="headerCart">Shopping Cart</h2>
        <span className="priceCart">Price</span>
      </div>
      <section>
        <div className="bodyCart">
          <div className="imgProductCart">image produto</div>
          <div className="tituloProductCart">textos produto</div>
          <div className="subtotalProductCart">subtotal</div>
          <div>
            <button className="btnQtdeCart">qtde</button>
            <span className="deleteCart"> | delete</span>
          </div>
        </div>
        <div>
          <span className="totalProductCart">
            Subtotal number of items and price
          </span>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
