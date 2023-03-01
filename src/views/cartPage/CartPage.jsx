import React, { useEffect, useState, useContext } from 'react';
import Navbarr from '../../components/navbar/Navbar';
import './CartPage.css';
import { CartContext } from '../../contexts/CartContext';

const CartPage = () => {
  const { productsAdded } = useContext(CartContext);
  // const [productsInCart, setProductsInCart] = useState([]);

  // // console.log(fruits);
  // console.log(productsInCart);
  // // console.log(productsInCart.name);

  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 1000);
  //   }).then((data) => {
  //     setProductsInCart(data);
  //   });
  //   console.log(productsInCart);
  // },
  // [productsInCart]);

  return (
    <div>
      <Navbarr />
      <div className="container">
        <div className="header">
          <div className="titleShoppingCart">Shopping Cart</div>
          <div className="titlePrice"> Price</div>
        </div>
        <hr />
        <section>
          <div className="bodyCart">
            <div>
              {/* <div className="imgProductCart">{productsAdded[0].image}</div> */}
            </div>
            <div className="sumaryProduct">
              <div className="tituloProductCart">{productsAdded[0].name}</div>
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
            <div>{productsAdded[0].price}</div>
          </div>
          <hr />
          <div className="totalCart">
            <span className="totalProductCart">
              Subtotal ({productsAdded.length} itens): $ {productsAdded.price}
              total do carrinho
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
