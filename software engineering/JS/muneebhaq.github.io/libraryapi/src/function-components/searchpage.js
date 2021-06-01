import React, { useState, useEffect } from "react";
import axios from 'axios';
import './styles.css'
import BookList from './bookList'

function GoogleBooksSearch() {
  const [book, setBook] = useState("");

  const [results, setResults] = useState([]);
  const [random, setRandom] = useState({})




  useEffect(async () => {

    await axios.get("https://www.googleapis.com/books/v1/volumes?q=isbn")
      .then(data => {
        console.log(data.data.items);
        setResults(data.data.items);
      })

  }, [])



  function generateRandom(e) {
    e.preventDefault()
    if (results.length) {
      const getRandom = results[Math.floor(Math.random() * results.length)];
      // results[6]
      console.log("random", getRandom)

      setRandom(getRandom)

    }
  }

  return (
    <div className="container">

      <div className="ml-auto">
        <button

  value="Search Random" className="btn btn-primary search-btn" onClick={generateRandom} >Search Random</button>
      </div>


      <div className="row">



        {Object.keys(random).length !== 0 && (
          <div className="col-sm-2">
            <div style={{ 'marginTop': '40px' }}>

              <img src={random.volumeInfo.imageLinks !== undefined ? random.volumeInfo.imageLinks.thumbnail : ''} alt={random.volumeInfo.title} />  

              <div>
                <h5 className="card-title">{random.volumeInfo.title}</h5>
                <p>{random.volumeInfo.description}</p>
              </div>
            </div>
          </div>
        )}


      </div>
    </div>

  )
}

export default GoogleBooksSearch