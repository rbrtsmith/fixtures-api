import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

const Area = ({ competitions = [] }) => (
  <div>
    <h1>Area</h1>
    <ul>
      {competitions.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/competitions/${id}/matches`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Area.propTypes = {
  competitions: T.arrayOf(T.shape({}))
};

export default Area;
