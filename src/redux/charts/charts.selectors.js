import { createSelector } from 'reselect';

const selectCharts = (state) => state.charts;

export const selectAreChartsLoading = createSelector(
  [selectCharts],
  (charts) => charts.loading
);

export const selectChartsData = createSelector([selectCharts], (charts) =>
  charts.arr ? charts.arr : null
);
