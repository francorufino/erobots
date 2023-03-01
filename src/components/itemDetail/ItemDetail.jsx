import React from 'react';
import BtnAddToCart from '../btn/BtnAddToCart';
import './ItemDetail.css';
import BtnCheckOut from '../btn/BtnCheckOut';
import BtnContinueShopping from '../btn/BtnContinueShopping';

const ItemDetail = ({ item }) => {
  return (
    <section className="outterContainerItemDetail">
      <div className="containerItemDetail">
        <ul>
          <div className="content">
            <img src={item.image} />
          </div>
          <div className="descContainer">
            <li>{item.name}</li>
            <li className="descriptionContainer">Description:</li>
            <li>{item.description}</li>
            <div className="containerPriceEBtns">
              <div className="priceContainer">
                <div className="price">
                  <li>U$ {item.price}</li>
                </div>
              </div>
              <div>
                <BtnAddToCart item={item} />
              </div>
              <div>
                <BtnCheckOut />
                <BtnContinueShopping />
              </div>
            </div>
          </div>
          >
        </ul>
      </div>
    </section>
  );
};

export default ItemDetail;
