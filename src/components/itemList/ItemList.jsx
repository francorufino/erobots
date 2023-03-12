import React from 'react';
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

const ItemList = ({ item }) => {
  return (
    <article className="outterContainerItemList container">
      <div className="containerInner">
        <div className="containerCard">
          <header>
            <img className="img" src={item.image} alt={item.name} />
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

    // <section className="robot">
    //   <div className="row">
    //     <div className="column">
    //       <div className="single-robot">
    //         <div className="robot-thumb">
    //           <img className="img" src={item.image} alt="" />
    //           <BtnSeeDetails item={item} className="robot-tag" />
    //         </div>
    //         <div className="robot-content">
    //           <h3>{item.name}</h3>
    //           <div className="mark">
    //             <span>{item.description}</span>
    //           </div>
    //           <div className="containerBtns">
    //             <div className="containerPrice"> U$ {item.price}</div>
    //             <div>
    //               <BtnAddToCart item={item} />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="robot-footer">
    //           <div className="footerImg">
    //             <span>{item.category === 'business' && <ImgBusiness />}</span>
    //             <span>
    //               {item.category === 'house' && <FaHome className="icon" />}
    //             </span>
    //             <span>
    //               {item.category === 'companion' && <FaDog className="icon" />}
    //             </span>
    //           </div>
    //           <div className="footerRight">
    //             <ul>
    //               <li className="footerTexts">
    //                 <span>
    //                   <FaCheck className="checkMark" />
    //                 </span>
    //                 <span className="freeReturnsText">Same Day Delivery</span>
    //               </li>
    //               <li className="footerTexts">
    //                 <span>
    //                   <FaCheck className="checkMark" />
    //                 </span>
    //                 <span className="freeReturnsText">Free returns</span>
    //               </li>
    //               <li className="footerTexts">
    //                 <span>
    //                   <FaClipboard className="clipboard" />
    //                 </span>
    //                 <span className="freeReturnsText">
    //                   Product Ref: {item.id}
    //                 </span>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ItemList;
