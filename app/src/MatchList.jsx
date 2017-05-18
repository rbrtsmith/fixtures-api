import React from 'react';
import T from 'prop-types';

import Match from './Match';

const MatchList = ({ matches = [] }) => (
  <div>
    <h1>Matches</h1>
    <ul>
      {matches.map(match => (
        <li key={match.id}>
          <Match match={match} />
        </li>
      ))}
    </ul>
  </div>
);

MatchList.propTypes = {
  matches: T.arrayOf(T.shape({}))
};

export default MatchList;
