import React from 'react';
import BtnSeeDetails from '../btn/BtnSeeDetails';
import './CardComponentHeader.css';

const CardComponentHeader = ({ item }) => {
  return (
    <article className="cardImage">
      <div className="cardImgThumb">
        <img className="img" src={item.image} alt={item.name} />
        <BtnSeeDetails detail={item} className="robot-tag" />
      </div>
    </article>
  );
};

export default CardComponentHeader;
