import { createSelector } from 'reselect';

const selectStats = (state) => state.stats;

//General Stats
export const selectGeneralStats = createSelector(
  [selectStats],
  (stats) => stats.generalStats
);
export const selectAreGeneralStatsLoaded = createSelector(
  [selectStats],
  (stats) => !!stats.generalStats
);

//Province Stats
export const selectProvinceStats = createSelector(
  [selectStats],
  (stats) => stats.provincesArray
);
export const selectAreProvinceStatsLoaded = createSelector(
  [selectStats],
  (stats) => !!stats.provincesArray
);
