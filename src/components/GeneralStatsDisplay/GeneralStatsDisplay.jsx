import React, { useState, useEffect } from 'react';
import './GeneralStatsDisplay.css';
import Odometer from 'react-odometerjs';
import Moment from 'react-moment';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGeneralStats } from '../../redux/stats/stats.selectors';

const GeneralStatsDisplay = ({ generalStats }) => {
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);

  useEffect(() => {
    if (generalStats) {
      const { confirmed, deaths, recovered } = generalStats;
      setConfirmed(confirmed.value);
      setDeaths(deaths.value);
      setRecovered(recovered.value);
    }
  }, [generalStats]);
  //150
  return (
    <div className='general-stats'>
      <h1>Información General</h1>
      <div className='general-stats-display'>
        Confirmados: <Odometer value={confirmed} />
      </div>
      <div className='general-stats-display'>
        Fallecidos: <Odometer value={deaths} />
      </div>
      <div className='general-stats-display'>
        Recuperados: <Odometer value={recovered} />
      </div>
      <p className='last-update'>
        Ultima actualización:{' '}
        {generalStats ? (
          <Moment format='DD-MM-YYYY, LT'>{generalStats.lastUpdate}</Moment>
        ) : (
          'Cargando...'
        )}
      </p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  generalStats: selectGeneralStats,
});

export default connect(mapStateToProps)(GeneralStatsDisplay);
