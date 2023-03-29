import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from '../../views/loading/Loading';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);
    getDoc(itemRef).then((resolve) => {
      if (resolve.exists()) {
        setItem({
          id: resolve.id,
          ...resolve.data(),
        });
      }
    });
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
