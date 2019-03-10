import React, { Component } from 'react';
import './App.scss';
import NavBar from './navigation/navBar';

class App extends Component {
  render() {
    return (
      <div className='all'>
        <NavBar />
      </div>
    );
  }
}

export default App;
