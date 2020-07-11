import React, { useEffect } from 'react';
import SVGMap from '../../components/SVGMap/SVGMap';

import { connect } from 'react-redux';
import {
  getGeneralStats,
  getProvinceStats,
} from '../../redux/stats/stats.actions';

const StatsPage = ({ getGeneralStats, getProvinceStats }) => {
  useEffect(() => {
    getGeneralStats();
    getProvinceStats();
  }, [getGeneralStats, getProvinceStats]);

  return (
    <div className='stats-page'>
      <SVGMap />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getGeneralStats: () => dispatch(getGeneralStats()),
  getProvinceStats: () => dispatch(getProvinceStats()),
});

export default connect(null, mapDispatchToProps)(StatsPage);
