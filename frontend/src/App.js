import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      error: null,
    };
  }

  componentDidMount() {
    fetch('/api/day')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => this.setState({ day: String(data.day) }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    const { day, error } = this.state;

    return (
      <div>
        {error ? (
          <h1>Error: {error}</h1>
        ) : (
          <h1>Hey! It's {day}</h1>
        )}
      </div>
    );
  }
}

export default App;
