import React, { Fragment, useState } from 'react';
import itemDetail from '../itemDetail/itemDetail';
import './CardComponent.css';
import ImgBusiness from '../images/ImgBusiness';
import BtnAddToCart from '../btn/BtnAddToCart';
import '../btn/BtnAddToCart.css';
import BtnSeeDetails from '../btn/BtnSeeDetails';
import '../btn/BtnSeeDetails.css';
import { FaCheck } from 'react-icons/fa';

const CardComponent = () => {
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
                      <BtnSeeDetails
                        detailDetails={detail.description}
                        className="robot-tag"
                      />
                      <img className="img" src={detail.image} alt="" />
                    </div>
                    <div className="robot-content">
                      <h3>{detail.name}</h3>
                      <div className="mark">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>{detail.description}</span>
                      </div>
                      <div className="containerBtns">
                        <div>
                          <div>U$ {detail.price}</div>
                        </div>
                        <div>
                          <BtnAddToCart detailStock={detail.stock} />
                        </div>
                      </div>
                    </div>
                    <div className="robot-footer">
                      <div>
                        <span>
                          {detail.type === 'business' && <ImgBusiness />}
                        </span>
                      </div>
                      <div>
                        <img src={detail.type} alt=""></img>

                        <ul className="priceAndFreeReturnText">
                          <li>Product Ref: {detail.id}</li>
                          <li>
                            <span>
                              <FaCheck className="checkMark" />
                            </span>
                            <span className="freeReturnsText">
                              Same Day Delivery
                            </span>
                          </li>
                          <li>
                            <span>
                              <FaCheck className="checkMark" />
                            </span>
                            <span className="freeReturnsText">
                              Free returns
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

export default CardComponent;
