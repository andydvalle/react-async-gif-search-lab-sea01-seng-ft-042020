import React, { Component } from 'react'

class GifSearch extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onHandleSubmit(e.target.title.value)
    }
    
    render(){
        return(<form onSubmit={this.handleSubmit}>
                <input type="text" name="title"/>
                <input type="submit" value="Find Gifs" />
            </form>)
    }
}

export default GifSearch