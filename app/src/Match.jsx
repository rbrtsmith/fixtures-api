import React from 'react';
import T from 'prop-types';
import moment from 'moment';

const Match = ({ match: { team_a_name, team_b_name, timestamp } }) => (
  <div>
    <h3>{team_a_name} Vs {team_b_name}</h3>
    <p>{moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>
  </div>
);

Match.propTypes = {
  match: T.shape({})
};

export default Match;
