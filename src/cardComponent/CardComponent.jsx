import React, { Fragment, useState } from 'react';
import itemDetail from '../itemDetail/itemDetail';
import './CardComponent.css';
import ImgBusiness from '../images/ImgBusiness';
import BtnAddToCart from '../btn/BtnAddToCart';
import '../btn/BtnAddToCart.css';
import BtnSeeDetails from '../btn/BtnSeeDetails';
import '../btn/BtnSeeDetails.css';

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
                      <div className="robot-tag">U$ {detail.price}</div>
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
                          <BtnSeeDetails description={detail.description} />
                        </div>
                        <div>
                          <BtnAddToCart detailStock={detail.stock} />
                        </div>
                      </div>
                    </div>
                    <div className="robot-footer">
                      <ul>
                        <li>
                          <img src={detail.type} alt=""></img>
                          <span>
                            {detail.type === 'business' && <ImgBusiness />}
                          </span>
                        </li>
                        <li>
                          Same day delivery
                          <span>Product Ref: {detail.id}</span>
                        </li>
                        <li>
                          <span>Free returns</span>
                        </li>
                      </ul>
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
