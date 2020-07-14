import React from 'react';
import './TotalBlock.css';

const TotalBlock = ({ color, label }) => {
  return (
    <div className='total-block'>
      <h3>{`Total ${label}:`}</h3>
      <h1 style={{ color: color }}>100000</h1>
    </div>
  );
};

export default TotalBlock;
