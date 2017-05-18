import { FETCH_AREAS_SUCCESS, FETCH_AREAS_REQUEST, FETCH_AREAS_ERROR } from '../actions/areas';

const initialState = {
  loading: false,
  success: false,
  data: []
};

const areas = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AREAS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false
      };
    case FETCH_AREAS_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        data: action.payload
      };
    case FETCH_AREAS_ERROR:
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

export const areasSelector = state => state.areas;
export const areasDataSelector = state => state.areas.data;

export default areas;
