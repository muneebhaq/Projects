import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.css'

const Header =()=> {
  
    return (
        
          <nav className="nav">
              <NavLink className="btn" to="/home">
                Home
              </NavLink>
              <NavLink className="btn" to="/searchpage">
                 Search Random
              </NavLink>
              <NavLink
                className="btn"
                to="/api"
              >
                Go to Search
              </NavLink>
            </nav>  
    )
  
}
export default Header