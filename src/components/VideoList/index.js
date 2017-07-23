import React, { Component } from 'react';

import List from './component.js';
import util from '../../Util/YoutubeUtil';


class VideoList extends Component {  
    render() {
        return <List
            items={this.props.items}
            onAdd={(text) => {
                console.log("added " + text);
                this.props.items.push(text)
                this.props.listHandler(this.props.items)
            }}
            onUpdate= {(idx, text) =>{
                console.log(`updated index ${idx} to ${text}`);
                this.props.items[idx] = text
                this.props.listHandler(this.props.items)
            }}
            onRemove={(idx) => {
                console.log("removed index " + idx);
                this.props.items.remove(idx)
                this.props.listHandler(this.props.items)
            }} />
    }
}

export default VideoList