import React, { Component } from 'react';
import './Home.css';

import VideoList from '../VideoList';
let util = require('../../Util/YoutubeUtil')


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
  }

  startButtonPressed() {
    if (this.state.videolist.length > 0) {
      var ids = []
      var query = "?videos="
      var resolveCount = this.state.videolist.length
      this.state.videolist.map((item)=> {
        util.getVideoIds(item).then(
          (items) => {
            ids = ids.concat(items)
            query += ids.join(',')
            this.resolveWrapper(--resolveCount, query)
          }, err => {})
      })
    }
  }
  resolveWrapper(count, query) {
    if (count === 0) {
          this.props.history.push(`watch${query}`)
    }
  }
}

export default Home;
