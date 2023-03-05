import React, { Fragment, useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { Item } from '../../mocks/item/Item.mock';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';

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

  if (allProducts.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {allProducts.map((product) => {
        return <ItemList key={product.id} item={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
