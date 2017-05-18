import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

const renderList = list => (
  <ul>
    {list.data.map(({ id, name }) => (
      <li key={id}>
        <Link to={`/areas/${id}/competitions`}>{name}</Link>
      </li>
    ))}
  </ul>
);

const AreasList = ({ areas }) => (
  <div>
    <h2>Areas</h2>
    {areas.loading && <div>Loading areas...</div>}
    {areas.error && <div>Error Loading areas...</div>}
    {!areas.loading && !areas.error && renderList(areas)}
  </div>
);

AreasList.propTypes = {
  areas: T.shape({}).isRequired
};

export default AreasList;
