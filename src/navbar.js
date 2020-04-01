import React, { Component } from 'react';
import './style.css'; 
import Title from './title.js'
import Nav_right_bar from './nav_right_bar.js';
import Menubar from './menubar.js';
import Hole from './hole.js';
export default class Navbar extends Component {
  render() {
    return (
      <div className = "navbar">
        <div className = "header">
          <Title/>
          <Hole/>
          <Nav_right_bar/>
        </div>
          <Menubar/>                  
      </div>
    );
  }
}
