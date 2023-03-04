import React from 'react';
import BtnAddToCart from '../btn/BtnAddToCart';
import './ItemDetail.css';
import BtnCheckOut from '../btn/BtnCheckOut';
import BtnContinueShopping from '../btn/BtnContinueShopping';
import {
  FaCheck,
  FaClipboard,
  FaHome,
  FaDog,
  FaCashRegister,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <section className="outter">
        <div>
          <h2 className="title">{item.name}</h2>
          <hr />
        </div>
        <hr />
        <div className="outterContainerItemDetail">
          <div className="containerItemDetail">
            <div className="content">
              <div>
                <div className="containerMainPic">
                  <img src={item.image} />
                </div>
                <div className="containerSmallPics">
                  <div className="containerPhotoSmall">
                    <img src={item.image2} />
                  </div>
                  <div className="containerPhotoSmall">
                    <img src={item.image3} />
                  </div>
                </div>
              </div>
              <div className="descContainer">
                <div className="productDescriptionDetail">
                  {item.description}
                </div>
                <div className="outterContainer">
                  <div className="container-price">
                    <div className="priceContainer">
                      <div className="price">
                        U$ {Number(item.price).toLocaleString('en')}
                      </div>
                      <div className="list">
                        {' '}
                        <div>
                          <span>
                            <FaCheck className="checkMark" />{' '}
                          </span>
                          <span>Same Day Delivery</span>{' '}
                        </div>
                        <div>
                          <span>
                            <FaCheck className="checkMark" />{' '}
                          </span>
                          <span>Free returns</span>{' '}
                        </div>
                        <div>
                          <span>
                            <FaClipboard className="checkMark" />{' '}
                          </span>{' '}
                          <span className="freeReturnsText">
                            Product Ref: {item.id}{' '}
                          </span>{' '}
                        </div>
                      </div>
                      <div>
                        <div className="icon">
                          <span className="categoryImage">
                            {item.category === 'business' && (
                              <FaCashRegister className="icon" />
                            )}
                          </span>{' '}
                          <span>
                            {item.category === 'house' && (
                              <FaHome className="icon" />
                            )}{' '}
                          </span>{' '}
                          <span>
                            {item.category === 'companion' && (
                              <FaDog className="icon" />
                            )}{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btnAddCart">
                    <div>
                      <BtnAddToCart item={item} />
                    </div>
                    <div className="btns">
                      <div>
                        <Link to="/cart">
                          <BtnCheckOut />
                        </Link>
                      </div>
                      <div>
                        <Link to="/">
                          <BtnContinueShopping />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="gap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
