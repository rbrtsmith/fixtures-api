import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import moment from 'moment';

import { getItem } from '../../utils';

const renderList = (areas, competitions, { data }) => {
  const { area_id, competition_id } = data[0];
  const area = getItem(areas, area_id);
  const competition = getItem(competitions.data, competition_id);
  return (
    <div>
      <Link to={`/areas/${area_id}/competitions`}>
        Back to competitions in {area && area.name}
      </Link>
      <h4>Competition: {competition && competition.name}</h4>
      <ul>
        {data.map(({ id, team_a_name, team_b_name, timestamp }) => (
          <li key={id}>
            <div>{team_a_name} Vs {team_b_name}</div>
            <div>{moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};


const MatchesList = ({ areas, competitions, matches }) => (
  <div>
    <h2>Match listing</h2>
    {matches.loading && <div>Loading matches...</div>}
    {matches.error && <div>Error Loading matches...</div>}
    {
      matches.success && (matches.data.length
      ? renderList(areas, competitions, matches)
      : <div>No Matches found.</div>)
    }
  </div>
);

MatchesList.propTypes = {
  areas: T.arrayOf(T.shape({})).isRequired,
  competitions: T.shape({}).isRequired,
  matches: T.shape({}).isRequired
};

export default MatchesList;
