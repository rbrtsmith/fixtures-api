import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AreasListContainer from './modules/areas/ListContainer';
import CompetitionListContainer from './modules/competitions/ListContainer';
import MatchListContainer from './modules/matches/ListContainer';
import Header from './Header';

export default () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={AreasListContainer} />
      <Route path="/areas/:id/competitions" component={CompetitionListContainer} />
      <Route path="/competitions/:id/matches" component={MatchListContainer} />
    </div>
  </Router>
);
