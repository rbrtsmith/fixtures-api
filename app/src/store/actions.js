const ADD_AREAS = 'ADD_AREAS';
const addAreas = payload => ({
  type: ADD_AREAS,
  payload
});

const fetchAreas = () => (dispatch) => {
  fetch('http://localhost:9000/areas')
    .then(res => res.json())
    .then(areas => dispatch(addAreas(areas)));
};

export {
  ADD_AREAS,
  addAreas,
  fetchAreas
};
