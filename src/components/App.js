import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/App.css';
import Search from './search.jsx'
import Header from './headerBar.jsx'

const APIKey = 'PLI6wBNWZRmshnSPsxt4Cij1edhhp1k9PztjsnlyFoBtDwnOr6'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { searchResults: {}, loading: false }
  }

  search(searchValue) {
    let config = {
      headers: { 'X-Mashape-Key': APIKey, 'Accept': 'application/json' }
    }
    let url = 'https://community-netflix-roulette.p.mashape.com/api.php?actor=' + searchValue;
    axios.get(url, config)
      .then(function(response) {
        this.setState({
          searchResults : response.data
        })
      });
  }

  render() {
    return (
      <div>
        <Header/>
        <Search search={this.search.bind(this)}/>
      </div>
    );
  }
}

export default App;
