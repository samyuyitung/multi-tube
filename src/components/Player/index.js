import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Player extends Component {
 render() {
   let opts = {}
   if (!this.props.opts) {
    opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
   } else {
     opts = this.props.opts
   }
 
   return (
      <YouTube
        videoId={this.props.id}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
  }

}

export default Player