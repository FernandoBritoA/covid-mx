import React from 'react';
import './ResultBlock.css';

const ResultBlock = ({ color, ...props }) => {
  const { value, provinceState } = props;
  return (
    <div className='result-block'>
      <span style={{ color: color }} className='result-num'>
        {value.toLocaleString()}
      </span>
      {provinceState}
    </div>
  );
};

export default ResultBlock;
