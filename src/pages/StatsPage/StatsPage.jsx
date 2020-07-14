import React, { useEffect } from 'react';
import './StatsPage.css';
import SVGMap from '../../components/SVGMap/SVGMap';
import ResultsColumn from '../../components/ResultsColumn/ResultsColumn';

import { connect } from 'react-redux';
import { getProvinceStats } from '../../redux/stats/stats.actions';

const StatsPage = ({ getProvinceStats }) => {
  useEffect(() => {
    getProvinceStats();
  }, [getProvinceStats]);

  return (
    <div className='stats-page'>
      <div className='stats-page-container'>
        <ResultsColumn />
        <SVGMap />
        <div className='test' />
        <div className='test' />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getProvinceStats: () => dispatch(getProvinceStats()),
});

export default connect(null, mapDispatchToProps)(StatsPage);
