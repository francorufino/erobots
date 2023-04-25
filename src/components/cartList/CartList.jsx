import React, { useContext, useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import './CartPage.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const CartList = ({ product }) => {
  const { updateToCart, deleteProductFromCart, addProduct } =
    useContext(CartContext);
  const [image, setImage] = useState('');
  const storage = getStorage();
  const imageRef = ref(storage, product.item.image1URL);
  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setImage(url);
      })
      .catch((error) => console.log({ error }));
  }, []);

  const isAvailableToAdd = product.quantityAdded < product.item.stock;
  const isAvailableToAddRemove = product.quantityAdded > 1;

  return (
    <div>
      {console.log('imageref' + image)}
      <section id="cartContainer">
        <div className="bodyCart">
          <div>
            <img className="imgProductCart" src={image}></img>
          </div>
          <div>
            <div className="descriptionProduct">
              <div>
                <span className="cartListTitle">{product.item.name}</span>
              </div>
              <div className="divLineQtyDetDel">
                <span className="btnQtdeItem">
                  <span>Qty: </span>
                  <span className="btnsQty">
                    <button
                      className="clcMathSign"
                      disabled={!isAvailableToAddRemove}
                      onClick={() => updateToCart(product, false)}
                    >
                      -
                    </button>
                    <span className="qtdeEditItem">
                      {product.quantityAdded}
                    </span>
                    <button
                      className="clcMathSign"
                      disabled={!isAvailableToAdd}
                      onClick={() => updateToCart(product, true)}
                    >
                      +
                    </button>
                  </span>
                </span>
                <span> | </span>
                <Link
                  className="cartListLinkDetailBtn"
                  to={`/item/${product.item.id}`}
                >
                  <span className="cartListDetailBtn">detail</span>
                </Link>
                <span> | </span>
                <span
                  className="cartListDeleteBtn"
                  onClick={() => deleteProductFromCart(product.item.id)}
                >
                  delete
                </span>
              </div>
            </div>
          </div>
          <span className="priceItem">
            U$ {Number(product.item.price).toLocaleString('en')}
          </span>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default CartList;
