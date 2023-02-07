import React, { Fragment, useState } from 'react';
import itemDetail from '../itemDetail/itemDetail';
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

const ItemList = () => {
  const [detail, setDetail] = useState(itemDetail);

  return (
    <Fragment>
      <section className="robot">
        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column">
                <div className="single-robot">
                  <div className="card">
                    <div className="robot-thumb">
                      <img className="img" src={detail.image} alt="" />
                      <BtnSeeDetails
                        detailDetails={detail.description}
                        className="robot-tag"
                      />
                    </div>
                    <div className="robot-content">
                      <h3>{detail.name}</h3>
                      <div className="mark">
                        <span>{detail.description}</span>
                      </div>
                      <div className="containerBtns">
                        <div className="containerPrice"> U$ {detail.price}</div>
                        <div>
                          <BtnAddToCart detailStock={detail.stock} />
                        </div>
                      </div>
                    </div>

                    <div className="robot-footer">
                      <div className="footerImg">
                        <span>
                          {detail.type === 'business' && <ImgBusiness />}
                        </span>
                        <span>
                          {detail.type === 'house' && (
                            <FaHome className="icon" />
                          )}
                        </span>
                        <span>
                          {detail.type === 'companion' && (
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
                              Product Ref: {detail.id}
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
