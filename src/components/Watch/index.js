import React, { Component } from 'react';

import Player from '../Player';
let util = require('../../Util/FrameUtil')
class Watch extends Component {
  render() {
      let queryRegex = new RegExp('^\\?videos=([\\w|,|-]+)&?')
      let cap = queryRegex.exec(this.props.location.search)
      let videoIds = cap[1].split(',')
      console.log(videoIds)
    let frameSize = util.getOptimalPlayerSize(videoIds.length)

    let opts = {
        height: frameSize.height,
        width: frameSize.width,
        playerVars: { // https://developers.google.com/youtube/player_parameters 
            autoplay: 1
        }
    }

    const players = videoIds.map((videoId) =>
        <Player id={videoId} opts={opts}/>
    );

    return (
      <div className="Watch">
        {players}
      </div>
    );
  }
}

export default Watch;
