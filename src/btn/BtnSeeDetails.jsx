import React from 'react';

const BtnSeeDetails = () => {
  function seeDetail() {
    alert('Clicou no see detail');
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
