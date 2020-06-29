import React, { Component } from 'react'

class GifList extends Component {
    render(){
        return(<img src={this.props.url}/>)
    }
}

export default GifList