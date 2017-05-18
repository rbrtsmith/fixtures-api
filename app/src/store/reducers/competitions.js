import {
  FETCH_COMPETITIONS_SUCCESS,
  FETCH_COMPETITIONS_REQUEST,
  FETCH_COMPETITIONS_ERROR
} from '../actions/competitions';

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: []
};

const competitions = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPETITIONS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false
      };
    case FETCH_COMPETITIONS_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        data: action.payload
      };
    case FETCH_COMPETITIONS_ERROR:
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

export const competitionsSelector = state => state.competitions;

export default competitions;
