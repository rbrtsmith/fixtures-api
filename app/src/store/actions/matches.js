const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
const FETCH_MATCHES_ERROR = 'FETCH_MATCHES_ERROR';


const fetchMatchesSuccess = payload => ({
  type: FETCH_MATCHES_SUCCESS,
  payload
});

const fetchMatchesRequest = () => ({
  type: FETCH_MATCHES_REQUEST
});

const fetchMatchesError = () => ({
  type: FETCH_MATCHES_ERROR
});

const fetchMatches = id => (dispatch) => {
  dispatch(fetchMatchesRequest());
  fetch(`http://localhost:9000/competitions/${id}/matches`)
  .then(res => res.json())
  .then(Matches => dispatch(fetchMatchesSuccess(Matches)))
  .catch(err => dispatch(fetchMatchesError(err)));
};

export {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_ERROR,
  fetchMatchesSuccess,
  fetchMatches
};
