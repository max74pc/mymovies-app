import React, { Component } from 'react';
import './App.css';
import VideoList from './components/movie_list'
import NavBar from './components/navbar'

const API_KEY = '4cb9def9';
const API_URL = 'http://www.omdbapi.com';

function fetchMovies(search = '') {

    return fetch(API_URL + '?apikey=' + API_KEY +'&s='+ search).then( res => res.json());

}
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies :  [],
            totalCount: 0
        }

    }
    searchMovies = (term = '') => {
        if (term.length < 3){
            return
        }
        fetchMovies(term).then(res => {
            this.setState({
                movies : res.Search,
                totalCount : res.totalResults
            })
        })
    }

    componentDidMount(){
        this.searchMovies('star trek')
    }

    render() {
        return (
            <React.Fragment>
                <NavBar onSearchTerm = {this.searchMovies}/>
                <div className="container">
            <br/>
            <br/>
                    <h1>I Miei film preferiti</h1>
                    <VideoList movies={this.state.movies} />
                </div>
            </React.Fragment>
      )
    }
}

export default App;
