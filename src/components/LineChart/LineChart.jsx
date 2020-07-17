import React, { useMemo, useEffect, useCallback } from 'react';
import './LineChart.css';
// @ts-ignore
import { Chart } from 'react-charts';
import SpinnerBackground from '../SpinnerBackground/SpinnerBackground';

import { connect } from 'react-redux';
import { getCharts } from '../../redux/charts/charts.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectChartsData,
  selectAreChartsLoading,
} from '../../redux/charts/charts.selectors';
import { selectSpecificLocation } from '../../redux/stats/stats.selectors';

const LineChart = ({
  areChartsLoading,
  chartsData,
  getCharts,
  specificLocation,
}) => {
  useEffect(() => {
    getCharts(specificLocation);
  }, [getCharts, specificLocation]);

  const arrangeData = useCallback(() => {
    const data = [];

    //const formatDate = (date) => `${date.getMonth()}-${date.getDate()}`;

    if (chartsData) {
      chartsData.forEach((element) => {
        const date = new Date(element.lastUpdate);

        const getDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() - 1
        );

        //console.log(formatDate(getDate));

        data.push([getDate, element.confirmed]);
      });
    }
    return data;
  }, [chartsData]);

  const data = useMemo(
    () => [
      {
        label: 'Fallecidos',
        color: 'red',
        data: arrangeData(),
      },
    ],
    [arrangeData]
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'utc', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div className='chart-box'>
      {areChartsLoading ? (
        <SpinnerBackground bgColor='var(--light-grey)' />
      ) : (
        <div className='chart-container'>
          <Chart data={data} axes={axes} dark tooltip />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areChartsLoading: selectAreChartsLoading,
  chartsData: selectChartsData,
  specificLocation: selectSpecificLocation,
});

const mapDispatchToProps = (dispatch) => ({
  getCharts: (location) => dispatch(getCharts(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
