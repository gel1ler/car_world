import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './navbar.js';
import './style.css';
class App extends Component {

  render() {
    return (
      <div>
       <Navbar/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
