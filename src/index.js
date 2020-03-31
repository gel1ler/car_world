import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './/navbar_folder';
import './/assets/css/style.css';

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
