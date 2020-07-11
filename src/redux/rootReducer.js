import { combineReducers } from 'redux';
import stats from './stats/stats.reducer';

const rootReducer = combineReducers({ stats });

export default rootReducer;
