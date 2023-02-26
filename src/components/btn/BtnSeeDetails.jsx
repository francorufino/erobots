import React, { useState } from 'react';
import './BtnSeeDetails.css';
import '../itemList/ItemList.css';
import { Link } from 'react-router-dom';

const BtnSeeDetails = ({ item }) => {
  function seeDetail() {
    console.log(item.id);
  }
  return (
    <div className="robot-tag">
      <Link to={'/item/:id'}>
        <button className="detail" onClick={seeDetail}>
          See more
        </button>
      </Link>
    </div>
  );
};

export default BtnSeeDetails;
