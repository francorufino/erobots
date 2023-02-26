import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { Item } from '../../mocks/item/Item.mock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState();

  const [itemm, setItemm] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(Item);
      }, 1000),
    ).then((data) => {
      const product = data.find((detail) => detail.id === id);
      setItemm(product);
    });
  }, [id]);

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
