import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

const FixturesList = ({ areas = [] }) => (
  <div>
    <h1>Fixtures</h1>
    <ul>
      {areas.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/areas/${id}/competitions`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

FixturesList.propTypes = {
  areas: T.arrayOf(T.shape({}))
};

export default FixturesList;
