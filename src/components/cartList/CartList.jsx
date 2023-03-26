import React, { useContext } from 'react';

import './CartPage.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const CartList = ({ product, qty, stock }) => {
  const { updateToCart, deleteProductFromCart, addProduct } =
    useContext(CartContext);

  const isAvailableToAdd = product.quantityAdded < product.item.stock;
  const isAvailableToAddRemove = product.quantityAdded > 1;

  return (
    <div>
      <section id="cartContainer">
        <div className="bodyCart">
          <div>
            <img className="imgProductCart" src={product.item.image}></img>
          </div>
          <div>
            <div className="descriptionProduct">
              <div>{product.item.name}</div>
              <div className="divLineQtyDetDel">
                <span className="btnQtdeItem">
                  <span>Qty: </span>
                  <span className="btnsQty">
                    <button
                      disabled={!isAvailableToAddRemove}
                      onClick={() => updateToCart(product, false)}
                    >
                      -
                    </button>
                    <span className="qtdeEditItem">
                      {product.quantityAdded}
                    </span>
                    <button
                      disabled={!isAvailableToAdd}
                      onClick={() => updateToCart(product, true)}
                    >
                      +
                    </button>
                  </span>
                </span>
                <span> | </span>
                <Link to={`/item/${product.item.id}`}>
                  <span>detail</span>
                </Link>
                <span> | </span>
                <span onClick={() => deleteProductFromCart(product.item.id)}>
                  delete
                </span>
              </div>
            </div>
          </div>
          <span className="priceItem">
            U$ {Number(product.item.price).toLocaleString('en')}
          </span>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default CartList;
