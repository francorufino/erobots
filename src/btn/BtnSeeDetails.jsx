import React, { useState } from 'react';
import './BtnSeeDetails.css';
import '../itemList/ItemList.css';

const BtnSeeDetails = (detailDetails) => {
  const [description, setDescription] = useState(detailDetails);
  function seeDetail() {
    alert(description);
  }
  return (
    <div className="robot-tag">
      <button className=" detail" onClick={seeDetail}>
        See more
      </button>
    </div>
  );
};

export default BtnSeeDetails;
