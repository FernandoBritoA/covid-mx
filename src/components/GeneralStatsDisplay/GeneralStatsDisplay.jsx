import React, { useState } from 'react';
import './GeneralStatsDisplay.css';
import Odometer from 'react-odometerjs';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGeneralStats } from '../../redux/stats/stats.selectors';

const GeneralStatsDisplay = ({ generalStats }) => {
  //const { confirmed, deaths, recovered } = generalStats;
  const [value, setValue] = useState(0);
  console.log(generalStats);

  if (generalStats) {
    if (value === 0) {
      setValue(generalStats.confirmed.value);
    }
  }
  return (
    <div>
      <span className='general-stats-display-lbl'>Casos confirmados: </span>
      <Odometer value={value} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  generalStats: selectGeneralStats,
});

export default connect(mapStateToProps)(GeneralStatsDisplay);
