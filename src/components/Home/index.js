import React, { Component } from 'react';
import './Home.css';

import VideoList from '../VideoList';

class Home extends Component {
  constructor(props) {
        super(props);
        this.startButtonPressed = this.startButtonPressed.bind(this);
        this.state = {
          videolist: []
        }
        this.onListChange = this.onListChange.bind(this)
    }

  render() {
    return (
      <div className="Home">
        <h1>MultiTube </h1>
        <VideoList items={this.state.videolist} listHandler={this.onListChange}/>
        <button onClick={this.startButtonPressed}> Click me!</button>
      </div>
    );
  }

  onListChange(list) {
    this.setState({
      videolist: list
    })
    console.log(this.state.videolist)
  }

  startButtonPressed() {
    this.props.history.push('about')
  }
}

export default Home;
