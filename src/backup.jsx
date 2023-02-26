<div className="containerCards">
  <section className="card">
    <div className="single-robot">
      <div>
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
              {/* <CartContext> */}
              <BtnAddToCart
              // value={{ UpdateStock }}
              // detailStock={item.stock}
              />
              {/* </CartContext> */}
            </div>
          </div>
        </div>

        <div className="robot-footer">
          <div className="footerImg">
            <span>{item.category === 'business' && <ImgBusiness />}</span>
            <span>
              {item.category === 'house' && <FaHome className="icon" />}
            </span>
            <span>
              {item.category === 'companion' && <FaDog className="icon" />}
            </span>
          </div>
          <div className="footerRight">
            <ul>
              <li className="footerTexts">
                <span>
                  <FaCheck className="checkMark" />
                </span>
                <span className="freeReturnsText">Same Day Delivery</span>
              </li>
              <li className="footerTexts">
                <span>
                  <FaCheck className="checkMark" />
                </span>
                <span className="freeReturnsText">Free returns</span>
              </li>
              <li className="footerTexts">
                <span>
                  <FaClipboard className="clipboard" />
                </span>
                <span className="freeReturnsText">Product Ref: {item.id}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>;
