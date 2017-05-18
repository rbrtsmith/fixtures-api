import React, { Component } from 'react';
import AreasList from './AreasList';

class FixtureListContainer extends Component {
  state = { areas: [] };

  componentDidMount() {
    fetch('http://localhost:9000/areas')
      .then(res => res.json())
      .then(areas => this.setState({ areas }));
  }
  render() {
    const { areas } = this.state;
    return <AreasList areas={areas} />;
  }
}

export default FixtureListContainer;
