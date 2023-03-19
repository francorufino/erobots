import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { Item } from '../../mocks/item/Item.mock';
import { useParams } from 'react-router-dom';
import '../../components/itemList/ItemList.css';
import Loading from '../../views/loading/Loading';
// import {
//   getFirestore,
//   query,
//   where,
//   collection,
//   getDocs,
//   doc,
//   getDoc,
// } from 'firebase/firestore';
// import db from '../../index';

const ItemListContainer = () => {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Item);
      }, 1000);
    }).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category,
        );
        setAllProducts(categories);
      } else {
        setAllProducts(data);
      }
    });
  }, [category]);

  // //getting a single product from firebase:
  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemRef = doc(db, 'items', '2x3YZq7ynCtwVH8haf8U');
  //   getDoc(itemRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setAllProducts([{ id: '2x3YZq7ynCtwVH8haf8U', ...snapshot.data() }]);
  //       console.log(allProducts);
  //     } else {
  //       console.log(
  //         'this product does not exist click here to continue shopping1:973579672953:web:b5947f3c36616c069aa3a8',
  //       );
  //     }
  //   });
  // }, []);

  if (allProducts.length === 0) {
    return <Loading />;
  }

  return (
    <div className="outterContainerProducts ">
      {allProducts.map((product) => {
        console.log(product);
        return <ItemList key={product.id} item={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
