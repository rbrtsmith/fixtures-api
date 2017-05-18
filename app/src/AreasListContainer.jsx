import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import AreasList from './AreasList';
import { fetchAreas } from './store/actions';

class AreasListContainer extends Component {
  state = { areas: [] };

  componentDidMount() {
    this.props.fetchAreas();
  }
  render() {
    return <AreasList areas={this.props.areas} />;
  }
}

AreasListContainer.propTypes = {
  fetchAreas: T.func.isRequired,
  areas: T.arrayOf(T.shape({}))
};

const mapStateToProps = state => ({
  areas: state.areas[0]
});

export default connect(mapStateToProps, { fetchAreas })(AreasListContainer);
