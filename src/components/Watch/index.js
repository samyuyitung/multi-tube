import React, { Component } from 'react';

import Player from '../Player';
class Watch extends Component {
  render() {
      let queryRegex = new RegExp('^\\?videos=([\\w|,]+)&?')
      let cap = queryRegex.exec(this.props.location.search)
      let videoIds = cap[1].split(',')
      videoIds.pop()

      const players = videoIds.map((videoId) =>
        <Player id={videoId} />
    );

    var opts = {
        
    }

    return (
      <div className="Watch">
        {players}
      </div>
    );
  }
}

export default Watch;
