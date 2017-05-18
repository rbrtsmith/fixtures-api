import { combineReducers } from 'redux';

import { ADD_AREAS } from './actions';

const areas = (state = [], action) => {
  switch (action.type) {
    case ADD_AREAS:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ areas });

export default rootReducer;
