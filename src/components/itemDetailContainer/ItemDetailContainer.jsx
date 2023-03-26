import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { Item as Items } from '../../mocks/item/Item.mock';
import { useParams } from 'react-router-dom';
import Loading from '../../views/loading/Loading';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', '2x3YZq7ynCtwVH8haf8U');
    getDoc(itemRef).then((resolve) => {
      if (resolve.exists()) {
        setItem({
          id: resolve.id,
          ...resolve.data(),
        });
      }
    });
    // new Promise((resolve) =>
    //   // Simulation of a call to an api
    //   setTimeout(() => {
    //     const itemFiltered = Items.find((item) => {
    //       return item.id == id;
    //     });
    //     resolve(itemFiltered);
    //   }, 1000),
    // ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <Loading />;
  }
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
