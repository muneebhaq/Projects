import React, { Component } from "react";  
import axios from 'axios';  
import {Link} from "react-router-dom"
import './styles.css'
// import BookList from './components/bookList'

class HomePage extends Component {  
    
    render(){

    return (  
        <div className="container" style={{ width: "100%"}}>
        <section>
          <div className="text-container" style={{color: "blue"}}>
           
              <h1 className="head-text">Welcome to Google Books Library</h1>
              <p className="lead">A great place to find the books that interests you</p>
              <div className="buttons">
                <Link className="btn " to="/api">Search Books</Link>
                
              </div>
            
          </div>
        </section>
        </div>
    )  
}  
}
  
export default HomePage