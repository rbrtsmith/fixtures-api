import React, { PropTypes as T } from 'react';

const FixturesList = ({ areas = [] }) => (
  <div>
    <h1>Fixtures</h1>
    <ul>
      {areas.map(area => (
        <li key={area.id}>{area.name}</li>
      ))}
    </ul>
  </div>
);

FixturesList.propTypes = {
  areas: T.arrayOf(T.shape({}))
};

export default FixturesList;
