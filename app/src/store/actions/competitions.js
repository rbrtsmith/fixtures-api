const FETCH_COMPETITIONS_REQUEST = 'FETCH_COMPETITIONS_REQUEST';
const FETCH_COMPETITIONS_SUCCESS = 'FETCH_COMPETITIONS_SUCCESS';
const FETCH_COMPETITIONS_ERROR = 'FETCH_COMPETITIONS_ERROR';


const fetchCompetitionsSuccess = payload => ({
  type: FETCH_COMPETITIONS_SUCCESS,
  payload
});

const fetchCompetitionsRequest = () => ({
  type: FETCH_COMPETITIONS_REQUEST
});

const fetchCompetitionsError = () => ({
  type: FETCH_COMPETITIONS_ERROR
});

const fetchCompetitions = id => (dispatch) => {
  dispatch(fetchCompetitionsRequest());
  fetch(`http://localhost:9000/areas/${id}/competitions`)
  .then(res => res.json())
  .then(areas => dispatch(fetchCompetitionsSuccess(areas)))
  .catch(err => dispatch(fetchCompetitionsError(err)));
};

export {
  FETCH_COMPETITIONS_REQUEST,
  FETCH_COMPETITIONS_SUCCESS,
  FETCH_COMPETITIONS_ERROR,
  fetchCompetitionsSuccess,
  fetchCompetitions
};
