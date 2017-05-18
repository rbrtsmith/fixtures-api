import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';

import { getItem } from '../../utils';

const renderList = list => (
  <ul>
    {list.data.map(({ id, name }) => (
      <li key={id}>
        <Link to={`/competitions/${id}/matches`}>{name}</Link>
      </li>
    ))}
  </ul>
);

const CompetitionsList = ({ areas, areaId, competitions }) => (
  <div>
    <h2>Competition listing for {getItem(areas, areaId).name}</h2>
    {competitions.loading && <div>Loading competitions...</div>}
    {competitions.error && <div>Error Loading competitions...</div>}
    {!competitions.loading && !competitions.error && renderList(competitions)}
  </div>
);

CompetitionsList.propTypes = {
  areas: T.arrayOf(T.shape({})).isRequired,
  areaId: T.string.isRequired,
  competitions: T.shape({}).isRequired
};

export default CompetitionsList;
