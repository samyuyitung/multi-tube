import React, { Component } from 'react';
import './Home.css';

import Player from '../Player';

class Home extends Component {
  constructor(props) {
        super(props);
        this.startButtonPressed = this.startButtonPressed.bind(this);
    }

  render() {
    return (
      <div className="Home">
        <h1>MultiTube </h1>

        <button onClick={this.startButtonPressed}> Click me!</button>
      </div>
    );
  }

  startButtonPressed() {
    this.props.history.push('about')
  }
}

export default Home;
