import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import List from './List';
import { fetchCompetitions } from '../../store/actions/competitions';
import { competitionsSelector } from '../../store/reducers/competitions';
import { areasDataSelector } from '../../store/reducers/areas';

class CompetitionsListContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCompetitions(id);
  }
  render() {
    const { areasData, competitions, match: { params } } = this.props;
    return <List areaId={params.id} areas={areasData} competitions={competitions} />;
  }
}

CompetitionsListContainer.propTypes = {
  fetchCompetitions: T.func.isRequired,
  competitions: T.shape({}).isRequired,
  areasData: T.arrayOf(T.shape({})).isRequired,
  match: T.shape({
    params: T.shape({ id: T.string })
  })
};

const mapStateToProps = state => ({
  competitions: competitionsSelector(state),
  areasData: areasDataSelector(state)
});

export default connect(mapStateToProps, { fetchCompetitions })(CompetitionsListContainer);
