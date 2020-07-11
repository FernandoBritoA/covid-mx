import React, { useEffect } from 'react';
import './HomePage.css';
import GeneralStatsDisplay from '../../components/GeneralStatsDisplay/GeneralStatsDisplay';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';

import { connect } from 'react-redux';
import { getGeneralStats } from '../../redux/stats/stats.actions';
import { createStructuredSelector } from 'reselect';
import { selectAreGeneralStatsLoaded } from '../../redux/stats/stats.selectors';

const HomePage = ({ getGeneralStats, areGeneralStatsLoaded }) => {
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

const mapStateToProps = createStructuredSelector({
  areGeneralStatsLoaded: selectAreGeneralStatsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
