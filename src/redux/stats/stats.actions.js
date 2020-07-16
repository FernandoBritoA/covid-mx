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
    /*const response2 = await axios.get(
      'https://covid19.mathdro.id/api/daily/5-30-2020'
    );
    console.log(
      response2.data.filter((t) => t.provinceState === 'Quintana Roo')
    );*/
    dispatch(getStatsSuccess({ generalStats: response.data }));
  } catch (error) {
    dispatch(getStatsFailure(error.message));
  }
};

export const getProvinceStats = () => async (dispatch) => {
  try {
    const confirmed = await axios.get(
      'https://covid19.mathdro.id/api/countries/Mexico/confirmed'
    );
    dispatch(getStatsSuccess({ confirmed: confirmed.data }));

    const recovered = await axios.get(
      'https://covid19.mathdro.id/api/countries/Mexico/recovered'
    );
    dispatch(getStatsSuccess({ recovered: recovered.data }));

    const deaths = await axios.get(
      'https://covid19.mathdro.id/api/countries/Mexico/deaths'
    );
    dispatch(getStatsSuccess({ deaths: deaths.data }));
  } catch (error) {
    dispatch(getStatsFailure(error.message));
  }
};

export const setLocation = (location) => ({
  type: statsAT.SET_LOCATION,
  payload: location,
});
