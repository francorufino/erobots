import React, { useContext } from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const CartList = ({ product, qty }) => {
  const { add1ToCart, remove1FromCart, deleteProductFromCart } =
    useContext(CartContext);
  return (
    <div>
      <section id="cartContainer">
        <div className="bodyCart">
          <div>
            <img className="imgProductCart" src={product.image}></img>
          </div>
          <div className="bodyDescription">
            <div className="descriptionProduct">
              <div>{product.name}</div>
              <div className="divLineQtyDetDel">
                <span className="btnQtdeItem">
                  <span>Qty: </span>
                  <span className="btnsQty">
                    <button onClick={() => remove1FromCart(product.id)}>
                      -
                    </button>
                    <span className="qtdeEditItem">{qty}</span>
                    <button onClick={() => add1ToCart(product.id)}>+</button>
                  </span>
                </span>
                <span> | </span>
                <Link to={`/item/${product.id}`}>
                  <span>detail</span>
                </Link>
                <span> | </span>
                <span onClick={deleteProductFromCart}>delete</span>
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
