import fetch from 'isomorphic-fetch';

const FETCH_AREAS_REQUEST = 'FETCH_AREAS_REQUEST';
const FETCH_AREAS_SUCCESS = 'FETCH_AREAS_SUCCESS';
const FETCH_AREAS_ERROR = 'FETCH_AREAS_ERROR';


const fetchAreasSuccess = payload => ({
  type: FETCH_AREAS_SUCCESS,
  payload
});

const fetchAreasRequest = () => ({
  type: FETCH_AREAS_REQUEST
});

const fetchAreasError = () => ({
  type: FETCH_AREAS_ERROR
});

const fetchAreas = () => (dispatch) => {
  dispatch(fetchAreasRequest());
  fetch('http://localhost:9000/areas')
  .then(res => res.json())
  .then(areas => dispatch(fetchAreasSuccess(areas)))
  .catch(err => dispatch(fetchAreasError(err)));
};

export {
  FETCH_AREAS_REQUEST,
  FETCH_AREAS_SUCCESS,
  FETCH_AREAS_ERROR,
  fetchAreasRequest,
  fetchAreasSuccess,
  fetchAreas
};
