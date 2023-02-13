import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';

const ItemDetailContainer = ({ item }) => {
  console.log(item.id);
  const [itemm, setItemm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          resolve(item);
        }, 5000),
      console.log(item),
    ).then((data) => {
      const item = data.find((item) => item.id === id);
      setItemm(item);
    });
  }, []);

  if (!itemm) {
    return <p>Loading ItemDetailContainer...</p>;
  }

  return (
    <div>
      <ItemDetail item={itemm} />
    </div>
  );
};

export default ItemDetailContainer;
