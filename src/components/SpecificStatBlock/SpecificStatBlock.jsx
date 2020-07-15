import React from 'react';
import './SpecificStatBlock.css';
import Odometer from 'react-odometerjs';

const SpecificStatBlock = ({ label, color, value }) => {
  return (
    <div
      className='specific-stat-block'
      style={{ borderLeft: `5px solid ${color}`, color: color }}
    >
      <label className='specific-stat-label'>{label} </label>
      <Odometer value={value} />
    </div>
  );
};

export default SpecificStatBlock;
