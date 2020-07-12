import React, { useEffect } from 'react';
import './HomePage.css';
import GeneralStatsDisplay from '../../components/GeneralStatsDisplay/GeneralStatsDisplay';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';

import { connect } from 'react-redux';
import { getGeneralStats } from '../../redux/stats/stats.actions';

const HomePage = ({ getGeneralStats }) => {
  useEffect(() => {
    getGeneralStats();
  }, [getGeneralStats]);

  return (
    <div className='home-page'>
      <GeneralStatsDisplay />
      <BackgroundVideo />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getGeneralStats: () => dispatch(getGeneralStats()),
});

export default connect(null, mapDispatchToProps)(HomePage);
