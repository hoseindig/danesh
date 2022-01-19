import React, { Component } from 'react';
class Text extends Component {
    state = { show:this.props.show } 
    render() { 
        return (
            <div>show {this.props.show.toString()}</div>
        );
    }
}
 
export default Text;