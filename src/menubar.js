import React, { Component } from 'react';
import './style.css'; 
export default class Menubar extends Component {
  render() {
    return (
      <div className = "menubar">
          <div><h2>Главная</h2></div>    
          <div><h2>Новости</h2></div>  
          <div><h2>Тест-драйв</h2></div>  
          <div><h2>Темы</h2></div>  
          <div><h2>Фото</h2></div>  
          <div><h2>Видео</h2></div>        
      </div>
    );
  }
}
