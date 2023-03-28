import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import '../../components/itemList/ItemList.css';
import Loading from '../../views/loading/Loading';
import {
  getFirestore,
  query,
  where,
  getDocs,
  collection,
} from 'firebase/firestore';

const ItemListContainer = () => {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  ç;
  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, 'items');

    if (category) {
      const queryResult = query(
        collectionRef,
        where('category', '==', category),
      );
      getDocs(queryResult).then((snapshot) => {
        const docs = snapshot.docs;
        setAllProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      getDocs(collectionRef).then((snapshot) => {
        const docs = snapshot.docs;
        setAllProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, [category]);

  if (allProducts.length === 0) {
    return <Loading />;
  }

  return (
    <div className="outterContainerProducts ">
      {allProducts.map((product) => {
        return <ItemList key={product.id} item={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
