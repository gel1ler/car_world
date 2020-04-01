import React, { Component } from 'react';
import './style.css'; 
export default class Nav_right_bar extends Component {
  render() {
    return (
      <div className = "nav_right_bar">
        <div className = "nav_right_bar_box">
          <a href = ""><h2>Вход</h2></a> 
          <a href = ""><h2>Регистрация</h2></a> 
        </div>
      </div>
    );
  }
}
