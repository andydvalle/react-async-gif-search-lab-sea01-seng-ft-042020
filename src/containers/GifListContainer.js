import React, { Component }from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: [],
        threeGifs: [],
    }

    updateSearch = (searchedItem) => {
        const queryAPI=`https://api.giphy.com/v1/gifs/search?q=${searchedItem}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(queryAPI)
        .then(resp=>resp.json())
        .then(data=>this.setState({
            threeGifs: data.data.slice(0,3)
        }))
    }

    componentDidMount(){
        console.log("Mounted from GifListContainer")

        const API = "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
        fetch(API)
        .then(resp=>resp.json())
        .then(data=>this.setState({
            gifs: data.data,
            threeGifs: data.data.slice(0,3)
        }))
    }
    
    render () {
    return (
        <div>
            < GifSearch onHandleSubmit={this.updateSearch}/>
            {this.state.threeGifs.map(gif=> <li><GifList key={gif.id} url={gif.images.original.url}/></li>)}
        </div>
        )
    }
}

export default GifListContainer