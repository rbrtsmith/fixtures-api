import {
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_ERROR
} from '../actions/matches';

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: []
};

const matches = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MATCHES_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false
      };
    case FETCH_MATCHES_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        data: action.payload
      };
    case FETCH_MATCHES_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true
      };
    default:
      return state;
  }
};

export const matchesSelector = state => state.matches;

export default matches;
