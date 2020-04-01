import React, { Component } from 'react';
import './style.css'; 
export default class Title extends Component {
  render() {
    return (
      <div className = "title_box">
        <div className ="logo">
          <a href = "/"><h1>Car world</h1></a>  
        </div>
        <div className = "logo_text"><h2>Все для автовладельцев</h2></div>
      </div>
    );
  }
}
