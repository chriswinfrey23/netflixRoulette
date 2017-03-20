import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../assets/css/App.css';
import Search from './search.jsx'
import Header from './headerBar.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Search/>
      </div>
    );
  }
}

export default App;
