import React, { Component } from 'react'

class App extends Component {
  state = { areas: [] };

  componentDidMount() {
    fetch('http://localhost:9000/areas')
      .then(res => res.json())
      .then(areas => this.setState({ areas }))
  }
  render() {
    return (
      <div>
        <h1>Fixtures</h1>
        <ul>
          {this.state.areas.map(area => (
            <li key={area.id}>{area.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
