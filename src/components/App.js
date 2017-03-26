import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/App.css';
import Search from './search.jsx'
import Header from './headerBar.jsx'
import SearchResults from './SearchResults.jsx'
import Loader from './loader.jsx'


const APIKey = 'PLI6wBNWZRmshnSPsxt4Cij1edhhp1k9PztjsnlyFoBtDwnOr6'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { searchResults: null, loading: false, value: "" }
    this.search = this.search.bind(this)
  }

  search(searchValue) {
    this.setState({
      loading: true
    })

    let config = {
      headers: { 'X-Mashape-Key': APIKey, 'Accept': 'application/json' }
    }
    let url = 'https://community-netflix-roulette.p.mashape.com/api.php?actor=' + searchValue;

    setTimeout ( () => {
    axios.get(url, config)
      .then((response) => {
        this.setState({
          searchResults : response.data,
          value: searchValue,
          loading: false
        });
      });
    }, 1000)
  }

  render() {
    return (
      <div>
        <Header/>
        <Search search={this.search}/>
        { this.state.loading ? <Loader /> :
        <SearchResults searchTerm={this.state.value} results={this.state.searchResults} /> }
      </div>
    );
  }
}

export default App;
