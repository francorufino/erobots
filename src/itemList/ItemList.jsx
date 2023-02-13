import React, { Fragment } from 'react';
import './ItemList.css';
import ImgBusiness from '../images/ImgBusiness';
import BtnAddToCart from '../btn/BtnAddToCart';
import '../btn/BtnAddToCart.css';
import BtnSeeDetails from '../btn/BtnSeeDetails';
import '../btn/BtnSeeDetails.css';
import {
  FaCheck,
  FaClipboard,
  FaHome,
  FaDog,
  FaIndustry,
} from 'react-icons/fa';
import BtnGlow from '../btn/BtnGlow';

const ItemList = ({ item }) => {
  return (
    <Fragment>
      <section className="robot">
        <div className="row">
          {item.map((item) => {
            return (
              <div className="column">
                <div className="single-robot">
                  <div className="card">
                    <div className="robot-thumb">
                      <img className="img" src={item.image} alt="" />
                      <BtnSeeDetails detail={item} className="robot-tag" />
                    </div>
                    <div className="robot-content">
                      <h3>{item.name}</h3>
                      <div className="mark">
                        <span>{item.description}</span>
                      </div>
                      <div className="containerBtns">
                        <div className="containerPrice"> U$ {item.price}</div>
                        <div>
                          <BtnAddToCart detailStock={item.stock} />
                        </div>
                      </div>
                    </div>

                    <div className="robot-footer">
                      <div className="footerImg">
                        <span>
                          {item.type === 'business' && <ImgBusiness />}
                        </span>
                        <span>
                          {item.type === 'house' && <FaHome className="icon" />}
                        </span>
                        <span>
                          {item.type === 'companion' && (
                            <FaDog className="icon" />
                          )}
                        </span>
                      </div>
                      <div className="footerRight">
                        <ul>
                          <li className="footerTexts">
                            <span>
                              <FaCheck className="checkMark" />
                            </span>
                            <span className="freeReturnsText">
                              Same Day Delivery
                            </span>
                          </li>
                          <li className="footerTexts">
                            <span>
                              <FaCheck className="checkMark" />
                            </span>
                            <span className="freeReturnsText">
                              Free returns
                            </span>
                          </li>
                          <li className="footerTexts">
                            <span>
                              <FaClipboard className="clipboard" />
                            </span>
                            <span className="freeReturnsText">
                              Product Ref: {item.id}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="more-robot">
          <a className="robot-btn" href="#">
            More Robots
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default ItemList;
