import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css'
import library from '../Assets/library.jpeg'
const Footer =()=> {
  
    return (
          
    <div className="footer">
      <img src={library} alt="img" id="img"/>
    </div>
    )

  
}
export default Footer