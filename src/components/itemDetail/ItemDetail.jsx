import React, { useState, useEffect } from 'react';
import BtnAddToCart from '../btn/BtnAddToCart';
import './ItemDetail.css';
import BtnBlack from '../btn/BtnBlack';
import {
  FaCheck,
  // FaClipboard,
  FaHome,
  FaDog,
  FaCashRegister,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const ItemDetail = ({ item }) => {
  const [images, setImages] = useState([]);

  const storage = getStorage();
  const imageRefs = [
    ref(storage, item.image1URL),
    ref(storage, item.image2URL),
    ref(storage, item.image3URL),
  ];

  useEffect(() => {
    const getImages = async () => {
      await imageRefs.map((ref) =>
        getDownloadURL(ref).then((url) => {
          setImages((prevState) => prevState.concat(url));
        }),
      );
    };
    getImages();
  }, []);

  return (
    <div>
      <section className="container itemDetailContainerHolder">
        <div className="itemDetailLeftColumn">
          <div className="slides">
            <div className="containerMainPic">
              <img src={images[0]} />
            </div>
            <div className="containerSmallPics">
              <div className="containerPhotoSmallLeft">
                <img id="sm-pic-left" src={images[1]} />
              </div>
              <div className="containerPhotoSmallRight">
                <img id="sm-pic-right" src={images[2]} />
              </div>
            </div>
            {/* <div className="videoContainerHolder">
              <iframe width="500" height="500" src={item.video}></iframe>
            </div> */}
          </div>
        </div>
        <div className="itemDetailRightColumn">
          <div className="descContainer">
            <hr id="hrTop" />
            <p className="title">{item.name}</p>
            <hr />
            <div className="productDescriptionDetail">{item.description}</div>
            <div className="descriptionSmallerContainerHolder">
              <div className="containerPriceEListItemDetail">
                <div className="priceContainerItemDetail">
                  <p className="price">
                    U$ {Number(item.price).toLocaleString('en')}
                  </p>
                  <div className="list">
                    {' '}
                    <div>
                      <span className="itemDetailIcon">
                        <FaCheck className="checkMark" />{' '}
                      </span>
                      <span className="itemDetailAdvantages">
                        Same Day Delivery
                      </span>{' '}
                    </div>
                    <div>
                      <span className="itemDetailIcon">
                        <FaCheck className="checkMark" />{' '}
                      </span>
                      <span className="itemDetailAdvantages">Free returns</span>{' '}
                    </div>
                    {/* <div> */}
                    {/* <span className="itemDetailIcon">
                        <FaClipboard className="checkMark" />{' '}
                      </span>{' '} */}
                    {/* <span
                        id="productRefNumber"
                        className="itemDetailAdvantages"
                      >
                        Product Ref: {item.id}{' '}
                      </span>{' '} */}
                    {/* </div> */}
                  </div>
                  <div>
                    <div>
                      <span>
                        {item.category === 'business' && (
                          <FaCashRegister className="itemDetailcategoryIcon" />
                        )}
                      </span>{' '}
                      <span>
                        {item.category === 'house' && (
                          <FaHome className="itemDetailcategoryIcon" />
                        )}{' '}
                      </span>{' '}
                      <span>
                        {item.category === 'companion' && (
                          <FaDog className="itemDetailcategoryIcon" />
                        )}{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="containerBtnsItemDetail">
                <div>
                  <div className="itemDetailBtnQtyContainer">
                    <BtnAddToCart item={item} />
                  </div>
                  <div className="btns">
                    <div>
                      <Link to="/cart">
                        <BtnBlack text={'Go to cart'} />
                      </Link>
                    </div>
                    <div className="continueShoppingLinkBtn">
                      <Link
                        to="/"
                        style={{
                          color: 'rgb(110, 237, 237)',
                          textDecoration: 'underline rgb(44, 157, 157)',
                        }}
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
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
