import statsAT from './stats.actionTypes';

const INITIAL_STATE = {
  location: 'Ciudad de Mexico',
  generalStats: null,
  provincesArray: null,
  errors: undefined,
};

const statsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case statsAT.GET_STATS_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case statsAT.GET_STATS_FAILURE:
      return {
        ...state,
        errors: payload,
      };

    case statsAT.SET_LOCATION:
      return {
        ...state,
        location: payload,
      };

    default:
      return state;
  }
};

export default statsReducer;
