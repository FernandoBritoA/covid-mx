import React from 'react';
import './ResultsColumn.css';
import TotalBlock from '../TotalBlock/TotalBlock';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectGeneralStats,
  selectProvinceStats,
} from '../../redux/stats/stats.selectors';

const ResultsColumn = ({ generalStats, provinceStats }) => {
  return (
    <div className='results-column'>
      <TotalBlock color='red' label='Confirmados' />
      <ResultsContainer />
      <div className='last-update-column'>
        <p>Ultima actualización:</p>
        <p>2o/08/29</p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  generalStats: selectGeneralStats,
  provinceStats: selectProvinceStats,
});

export default connect(mapStateToProps)(ResultsColumn);
