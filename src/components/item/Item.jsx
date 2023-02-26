import React from 'react';

const Item = ({ product }) => {
  return (
    <main className="item">
      <ul>
        <li>{product.image}</li>
        <li>{product.name}</li>
        <li>{product.category}</li>
        <li>{product.description}</li>
      </ul>
      <hr />
    </main>
  );
};

export default Item;
