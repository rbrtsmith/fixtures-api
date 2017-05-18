import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AreasListContainer from './modules/areas/ListContainer';
import CompetitionListContainer from './modules/competitions/ListContainer';
import MatchListContainer from './MatchListContainer';

export default () => (
  <Router>
    <div>
      <h1><Link to="/">Fixtures around the world</Link></h1>
      <Route exact path="/" component={AreasListContainer} />
      <Route path="/areas/:id/competitions" component={CompetitionListContainer} />
      <Route path="/competitions/:id/matches" component={MatchListContainer} />
    </div>
  </Router>
);
