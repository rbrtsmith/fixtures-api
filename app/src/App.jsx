import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AreasListContainer from './AreasListContainer';
import AreaContainer from './AreaContainer';
import MatchListContainer from './MatchListContainer';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={AreasListContainer} />
      <Route path="/areas/:id/competitions" component={AreaContainer} />
      <Route path="/competitions/:id/matches" component={MatchListContainer} />
    </div>
  </Router>
);

export default App;
