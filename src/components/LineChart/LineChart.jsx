import React, { useMemo, useEffect, useCallback, Fragment } from 'react';
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
  selectChartToDisplay,
} from '../../redux/charts/charts.selectors';
import { selectSpecificLocation } from '../../redux/stats/stats.selectors';

const LineChart = ({
  areChartsLoading,
  chartsData,
  getCharts,
  specificLocation,
  chartToDisplay,
}) => {
  useEffect(() => {
    getCharts(specificLocation);
  }, [getCharts, specificLocation]);

  const arrangeData = useCallback(() => {
    const data = [];
    const { label, color } = chartToDisplay;

    if (chartsData) {
      chartsData.forEach((element) => {
        const date = new Date(element.lastUpdate);

        const getDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() - 1
        );

        switch (label) {
          case 'CONFIRMADOS':
            data.push([getDate, element.confirmed]);
            break;

          case 'FALLECIDOS':
            data.push([getDate, element.deaths]);
            break;

          case 'RECUPERADOS':
            data.push([getDate, element.recovered]);
            break;

          case 'ACTIVOS':
            data.push([getDate, element.active]);
            break;

          default:
            break;
        }
      });
    }
    return { label, color, data };
  }, [chartsData, chartToDisplay]);

  const data = useMemo(() => [arrangeData()], [arrangeData]);

  const axes = useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  return (
    <div className='chart-box'>
      {areChartsLoading ? (
        <SpinnerBackground bgColor='var(--light-grey)' />
      ) : (
        <Fragment>
          <h4 className='chart-title'>
            {specificLocation}
            {' - '}
            <span
              style={{ color: chartToDisplay.color }}
              className='chart-label'
            >
              {chartToDisplay.label}
            </span>
          </h4>
          <div className='chart-container'>
            <Chart data={data} axes={axes} dark tooltip />
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  areChartsLoading: selectAreChartsLoading,
  chartsData: selectChartsData,
  specificLocation: selectSpecificLocation,
  chartToDisplay: selectChartToDisplay,
});

const mapDispatchToProps = (dispatch) => ({
  getCharts: (location) => dispatch(getCharts(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
