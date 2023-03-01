import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { Item as Items } from '../../mocks/item/Item.mock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  // console.log(id);
  // console.log(item);
  useEffect(() => {
    new Promise((resolve) =>
      // Simulation of a call to an api
      setTimeout(() => {
        const itemFiltered = Items.find((item) => {
          console.log(item.id, id);
          return item.id == id;
        });

        console.log({ itemFiltered, Items });
        resolve(itemFiltered);
      }, 1000),
    ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <p>Loading ItemDetailContainer...</p>;
  }

  console.log(item);
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
