import React, { Component } from 'react';
import T from 'prop-types';

import Area from './Area';

class AreaContainer extends Component {
  state = { competitions: [] };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:9000/areas/${id}/competitions`)
      .then(res => res.json())
      .then(competitions => this.setState({ competitions }));
  }

  render() {
    const { competitions } = this.state;
    return <Area competitions={competitions} />;
  }
}

AreaContainer.propTypes = {
  match: T.shape({
    params: T.shape({ id: T.string })
  })
};

export default AreaContainer;
