import React from 'react';
import './CartPage.css';

const CartList = ({ product }) => {
  return (
    <div>
      <div className="container">
        <section>
          <div className="bodyCart">
            <div>
              <img className="imgProductCart" src={product.image}></img>
            </div>
            <div className="sumaryProduct">
              <div className="tituloProductCart">{product.name}</div>
              <div>
                <span className="btnQtdeItem">
                  <span>Qty: </span>
                  <span className="btnsQty">
                    <button>-</button>
                    <span className="qtdeEditItem">1</span>
                    <button>+</button>
                  </span>
                </span>
                <span className="deleteItemCart"> | delete</span>
                <span className="shareItemCart"> | share</span>
              </div>
            </div>
            <div className="productPrice">
              U$ {Number(product.price).toLocaleString('en')}
            </div>
          </div>
          <hr />
          <div className="totalCart">
            <span className="totalProductCart">
              Subtotal ({product.length} items): $ {product.price}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartList;