import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <section>
      <ul>
        <img src={item.image} />
        <li>{item.name}</li>
        <li>{item.description}</li>
        <li>U$ {item.price}</li>
      </ul>
      {/* <button onClick={<ItemDetailContainer />}>Detail</button> */}
    </section>
  );
};

export default ItemDetail;
