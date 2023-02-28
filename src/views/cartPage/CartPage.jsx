import React, { useEffect, useState, useContext } from 'react';
import Navbarr from '../../components/navbar/Navbar';
import './CartPage.css';
import { CartContext } from '../../contexts/CartContext';

const CartPage = () => {
  const { fruits, veggies } = useContext(CartContext);
  const [productsInCart, setProductsInCart] = useState([]);
  console.log(fruits);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(userCart);
      }, 1000);
    }).then((data) => {
      setProductsInCart(data);
    });
  }, [productsInCart]);

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
              <div className="imgProductCart">image produto</div>
            </div>
            <div className="sumaryProduct">
              <div className="tituloProductCart">nome produto</div>
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
            <div>$ 20.00</div>
          </div>
          <hr />
          <div className="totalCart">
            <span className="totalProductCart">
              Subtotal (2 itens): $ 100.00
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
