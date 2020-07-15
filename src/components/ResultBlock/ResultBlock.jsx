import React from 'react';
import './ResultBlock.css';

import { connect } from 'react-redux';
import { setLocation } from '../../redux/stats/stats.actions';

const ResultBlock = ({ setLocation, color, ...props }) => {
  const { value, provinceState } = props;
  return (
    <div className='result-block' onClick={() => setLocation(provinceState)}>
      <span style={{ color: color }} className='result-num'>
        {value.toLocaleString()}
      </span>
      {provinceState}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => dispatch(setLocation(location)),
});

export default connect(null, mapDispatchToProps)(ResultBlock);
