import { combineReducers } from 'redux';
import areas from './areas';
import competitions from './competitions';
import matches from './matches';

const rootReducer = combineReducers({ areas, competitions, matches });

export default rootReducer;
