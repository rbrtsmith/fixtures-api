import React from 'react';

const FixturesList = ({ areas }) =>
  <div>
    <h1>Fixtures</h1>
    <ul>
      {areas.map(area => (
        <li key={area.id}>{area.name}</li>
      ))}
    </ul>
  </div>;

export default FixturesList;
