import React from 'react';
import './SpecificStatBlock.css';

const SpecificStatBlock = ({ label, color, value }) => {
  return (
    <div
      className='specific-stat-block'
      style={{ borderLeft: `5px solid ${color}`, color: color }}
    >
      <label className='specific-stat-label'>{label} </label>
      <span className='specific-stat-number'>{value.toLocaleString()}</span>
    </div>
  );
};

export default SpecificStatBlock;
