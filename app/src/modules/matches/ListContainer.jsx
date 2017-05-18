import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import List from './List';
import { fetchMatches } from '../../store/actions/matches';
import { competitionsSelector } from '../../store/reducers/competitions';
import { matchesSelector } from '../../store/reducers/matches';
import { areasDataSelector } from '../../store/reducers/areas';

class MatchesListContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMatches(id);
  }
  render() {
    const { areasData, competitions, matches, match: { params } } = this.props;
    return (
      <List
        matchId={params.id}
        areas={areasData}
        competitions={competitions}
        matches={matches}
      />
    );
  }
}

MatchesListContainer.propTypes = {
  fetchMatches: T.func.isRequired,
  matches: T.shape({}).isRequired,
  competitions: T.shape({}).isRequired,
  areasData: T.arrayOf(T.shape({})).isRequired,
  match: T.shape({
    params: T.shape({ id: T.string })
  })
};

const mapStateToProps = state => ({
  matches: matchesSelector(state),
  competitions: competitionsSelector(state),
  areasData: areasDataSelector(state)
});

export default connect(mapStateToProps, { fetchMatches })(MatchesListContainer);
