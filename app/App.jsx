import React, { Component } from 'react';
import FixturesList from './FixturesList';

class App extends Component {
  state = { areas: [] };

  componentDidMount() {
    fetch('http://localhost:9000/areas')
      .then(res => res.json())
      .then(areas => this.setState({ areas }));
  }
  render() {
    const { areas } = this.state;
    return <FixturesList areas={areas} />;
  }
}

export default App;
