import React from 'react'

const BookList = ({bookList=[]}) => {
  return (
    <>
    { bookList.map((book,index) => {
        if (book) {
            return(
            <div style={{ 'marginTop': '10px' }}>  
  
            <img src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.volumeInfo.title} />  
            <div>  
                <h5 className="card-title">{book.volumeInfo.title}</h5>  
                <p>{book.volumeInfo.description}</p>  
            </div>  
        </div>  
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default BookList