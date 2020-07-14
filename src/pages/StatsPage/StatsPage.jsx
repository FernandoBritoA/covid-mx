import React, { useEffect } from 'react';
import './StatsPage.css';
import SVGMap from '../../components/SVGMap/SVGMap';
import ResultsColumn from '../../components/ResultsColumn/ResultsColumn';
import LastUpdateBlock from '../../components/LastUpdateBlock/LastUpdateBlock';
import Graph from '../../components/Graph/Graph';

import { connect } from 'react-redux';
import {
  getProvinceStats,
  getGeneralStats,
} from '../../redux/stats/stats.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectConfirmedByProvince,
  selectDeathsByProvince,
  selectRecoveredByProvince,
  selectGeneralStats,
  selectAreStatsLoaded,
} from '../../redux/stats/stats.selectors';

const StatsPage = ({
  getProvinceStats,
  getGeneralStats,
  confirmed,
  deaths,
  recovered,
  generalStats,
  areStatsLoaded,
}) => {
  useEffect(() => {
    getProvinceStats();
    getGeneralStats();
  }, [getProvinceStats, getGeneralStats]);

  return areStatsLoaded ? (
    <div className='stats-page'>
      <div className='stats-page-container'>
        <div className='large-column'>
          <ResultsColumn
            large={true}
            array={confirmed}
            total={generalStats.confirmed.value}
            label={'Confirmados'}
            color={'red'}
          />
          <LastUpdateBlock lastUpdate={generalStats.lastUpdate} />
        </div>

        <SVGMap />

        <div className='small-columns-container'>
          <div className='small-columns'>
            <ResultsColumn
              large={false}
              array={deaths}
              total={generalStats.deaths.value}
              label={'Fallecidos'}
              color={'white'}
            />
            <ResultsColumn
              large={false}
              array={recovered}
              total={generalStats.recovered.value}
              label={'Recuperados'}
              color={'green'}
            />
          </div>
          <Graph />
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  confirmed: selectConfirmedByProvince,
  deaths: selectDeathsByProvince,
  recovered: selectRecoveredByProvince,
  generalStats: selectGeneralStats,
  areStatsLoaded: selectAreStatsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getProvinceStats: () => dispatch(getProvinceStats()),
  getGeneralStats: () => dispatch(getGeneralStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsPage);
