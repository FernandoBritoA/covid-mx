import React, { useEffect } from 'react';
import SVGMap from '../../components/SVGMap/SVGMap';

import { connect } from 'react-redux';
import { getProvinceStats } from '../../redux/stats/stats.actions';

const StatsPage = ({ getProvinceStats }) => {
  useEffect(() => {
    getProvinceStats();
  }, [getProvinceStats]);

  return (
    <div className='stats-page'>
      <SVGMap />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getProvinceStats: () => dispatch(getProvinceStats()),
});

export default connect(null, mapDispatchToProps)(StatsPage);
