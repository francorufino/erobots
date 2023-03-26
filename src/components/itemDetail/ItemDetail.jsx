import React, { useState, useEffect } from 'react';
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
      <section className="outter container">
        <div className="outterContainerItemDetail">
          <div className="containerItemDetail">
            <div className="content">
              <div className="slides">
                <div className="containerMainPic">
                  <img src={images[0]} />
                </div>
                <div className="containerSmallPics">
                  <div className="containerPhotoSmall">
                    <img src={images[1]} />
                  </div>
                  <div className="containerPhotoSmall">
                    <img src={images[2]} />
                  </div>
                </div>
                <div className="containerMainPic">
                  <iframe
                    width="500"
                    height="500"
                    src="https://player.vimeo.com/video/651929733"
                  ></iframe>
                </div>

                {/* <video controls width="250">
    <source src="/media/cc0-videos/flower.webm" type="video/webm">

    <source src="/media/cc0-videos/flower.mp4" type="video/mp4">

    Download the
    <a href="/media/cc0-videos/flower.webm">WEBM</a>
    or
    <a href="/media/cc0-videos/flower.mp4">MP4</a>
    video.
</video> */}

                <video src="https://www.youtube.com/watch?v=CWlbX42uYj8"></video>
              </div>
              <div className="descContainer">
                <div>
                  <hr id="hrTop" />
                  <h2 className="title">{item.name}</h2>
                  <hr />
                  <hr />
                </div>
                <div className="productDescriptionDetail">
                  {item.description}
                </div>
                <div id="outterContainer" className="outterContainer">
                  <div className="containerPriceEList">
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
                          <span>Product Ref: {item.id} </span>{' '}
                        </div>
                      </div>
                      <div>
                        <div>
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
