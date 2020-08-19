import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'la dolce vita'
        }
    }
    searchChange = (evnt) => {
        this.setState({term: evnt.target.value})
        //this.props.onSearchMovies(evnt.target.value);
    }
    searchClicked = (evnt) => {
        evnt.preventDefault();
        this.props.onSearchMovies(this.state.term);
    }

    render(){
    return (
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
        onChange = {this.searchChange}
        type="search" value={this.state.term}
        placeholder="Search" aria-label="Search"/>
            <button onClick = {this.searchClicked} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>)
    }
}