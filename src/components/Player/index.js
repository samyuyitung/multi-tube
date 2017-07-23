import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Player extends Component {
 render() {
   
   return (
      <YouTube
        videoId={this.props.id}
        opts={this.props.opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
  }

}

export default Player