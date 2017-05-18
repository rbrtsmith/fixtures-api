import React, { Component } from 'react';
import T from 'prop-types';

import MatchList from './MatchList';

class MatchListContainer extends Component {
  state = { matches: [] };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:9000/competitions/${id}/matches`)
      .then(res => res.json())
      .then(matches => this.setState({ matches }));
  }

  render() {
    const { matches } = this.state;
    return <MatchList matches={matches} />;
  }
}

MatchListContainer.propTypes = {
  match: T.shape({
    params: T.shape({ id: T.string })
  })
};

export default MatchListContainer;
