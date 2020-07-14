import { createSelector } from 'reselect';

const selectStats = (state) => state.stats;

export const selectAreStatsLoaded = createSelector(
  [selectStats],
  (stats) => !!stats.generalStats && !!stats.provincesArray
);

//General Stats
export const selectGeneralStats = createSelector(
  [selectStats],
  (stats) => stats.generalStats
);

//Province Stats
export const selectConfirmedByProvince = createSelector(
  [selectStats],
  (stats) =>
    stats.provincesArray
      ? stats.provincesArray.map(({ provinceState, confirmed, uid }) => ({
          provinceState,
          value: confirmed,
          uid,
        }))
      : null
);
export const selectDeathsByProvince = createSelector([selectStats], (stats) =>
  stats.provincesArray
    ? stats.provincesArray.map(({ provinceState, deaths, uid }) => ({
        provinceState,
        value: deaths,
        uid,
      }))
    : null
);
export const selectRecoveredByProvince = createSelector(
  [selectStats],
  (stats) =>
    stats.provincesArray
      ? stats.provincesArray.map(({ provinceState, recovered, uid }) => ({
          provinceState,
          value: recovered,
          uid,
        }))
      : null
);
