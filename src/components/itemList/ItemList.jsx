import React, { useEffect, useState } from 'react';
import './ItemList.css';
import BtnAddToCart from '../../components/btn/BtnAddToCart';
import '../btn/BtnAddToCart';
import BtnSeeDetails from '../../components/btn/BtnSeeDetails';
import '../btn/BtnSeeDetails';
import {
  FaCheck,
  FaClipboard,
  FaHome,
  FaDog,
  FaCashRegister,
} from 'react-icons/fa';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const ItemList = ({ item }) => {
  const [image, setImage] = useState('');

  const storage = getStorage();
  const imageRef = ref(storage, item.URL3);

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setImage(url);
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <article className="outterContainerItemList">
      <div className="containerInner">
        <div className="containerCard">
          <header>
            <img className="img" src={image} alt={item.name} />
            <BtnSeeDetails item={item} className="robot-tag" />
          </header>
          <main className="mainCard">
            <p className="productTitle">{item.name}</p>
            <p className="productDescription">{item.description}</p>
            <div className="containerPriceEAddToCartBtn">
              <div id="itemPrice" className="itemPrice">
                U$ {Number(item.price).toLocaleString('en')}
              </div>
              <div>
                <BtnAddToCart item={item} />
              </div>
            </div>
            <hr />
          </main>
          <footer className="footerContainer">
            <div className="icon">
              <span className="categoryImage">
                {item.category === 'business' && (
                  <FaCashRegister className="icon" />
                )}
              </span>{' '}
              <span>
                {item.category === 'house' && <FaHome className="icon" />}{' '}
              </span>{' '}
              <span>
                {item.category === 'companion' && <FaDog className="icon" />}{' '}
              </span>
            </div>
            <div>
              <ul>
                {' '}
                <li className="footerTexts">
                  {' '}
                  <span>
                    <FaCheck className="checkMark" />{' '}
                  </span>
                  <span className="freeReturnsText">Same Day Delivery</span>{' '}
                </li>{' '}
                <li className="footerTexts">
                  {' '}
                  <span>
                    <FaCheck className="checkMark" />{' '}
                  </span>
                  <span className="freeReturnsText">Free returns</span>{' '}
                </li>{' '}
                <li className="footerTexts">
                  {' '}
                  <span>
                    <FaClipboard className="clipboard" />{' '}
                  </span>{' '}
                  <span className="freeReturnsText">
                    Product Ref: {item.id}{' '}
                  </span>{' '}
                </li>{' '}
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default ItemList;
