
import React, { Component } from "react";  
import axios from 'axios';  
import './styles.css'
import BookList from '../function-components/bookList'
import SearchBar from "../function-components/form";

class SearchApi extends Component {  
    state={
        book: "",
        result: [],
        apiKey: "AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88"
    }
    
     handleChange=(event)=> {  
        const book = event.target.value;  
        this.setState({book: book})  
    }  

    
              
     handleSubmit=(event)=> {  
        event.preventDefault();  
        console.log('got here')
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.book + "&key=" + this.state.apiKey + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);
                this.setState({result:data.data.items})
                  
            })  
    }  
    render(){

    return (  
        <div className="container">
       <SearchBar book={this.state.book} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <div className="container">  
                <div className="row">  
                
                <BookList bookList={this.state.result}/>
                </div>  
            </div>  
    
        </div>
    )  
}  
}
  
export default SearchApi  