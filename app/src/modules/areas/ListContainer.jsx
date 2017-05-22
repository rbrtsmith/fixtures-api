import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import List from './List';
import { fetchAreas } from '../../store/actions/areas';
import { areasSelector } from '../../store/reducers/areas';

class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchAreas();
  }
  render() {
    return <List areas={this.props.areas} />;
  }
}

export { ListContainer };

ListContainer.propTypes = {
  fetchAreas: T.func.isRequired,
  areas: T.shape({}).isRequired
};

const mapStateToProps = state => ({ areas: areasSelector(state) });

export default connect(mapStateToProps, { fetchAreas })(ListContainer);
