import statsAT from './stats.actionTypes';
import axios from 'axios';

const getStatsSuccess = (stats) => ({
  type: statsAT.GET_STATS_SUCCESS,
  payload: stats,
});
const getStatsFailure = (errMsg) => ({
  type: statsAT.GET_STATS_FAILURE,
  payload: errMsg,
});

export const getGeneralStats = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://covid19.mathdro.id/api/countries/Mexico'
    );
    dispatch(getStatsSuccess({ generalStats: response.data }));
  } catch (error) {
    dispatch(getStatsFailure(error.message));
  }
};

export const getProvinceStats = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://covid19.mathdro.id/api/countries/Mexico/confirmed'
    );
    dispatch(getStatsSuccess({ provincesArray: response.data }));
  } catch (error) {
    dispatch(getStatsFailure(error.message));
  }
};
