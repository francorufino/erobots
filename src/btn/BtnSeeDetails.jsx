import React, { useState } from 'react';

const BtnSeeDetails = (detailDetails) => {
  const [description, setDescription] = useState(detailDetails);
  function seeDetail() {
    alert(description);
  }
  return (
    <div>
      <button onClick={seeDetail} className="detail">
        Detail
      </button>
    </div>
  );
};

export default BtnSeeDetails;
