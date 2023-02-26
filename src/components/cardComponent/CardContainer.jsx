import React from 'react';
import CardComponentHeader from './CardComponentHeader';
import CardComponentBody from './CardComponentBody';
import CardComponentFooter from './CardComponentFooter';

const CardContainer = ({ item }) => {
  return (
    <section className="cardContainer">
      <CardComponentHeader item={item} />
      <CardComponentBody item={item} />
      <CardComponentFooter item={item} />
    </section>
  );
};

export default CardContainer;
