import React from 'react';

const SearchBar = ({book, handleChange, handleSubmit}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <form
    onSubmit={handleSubmit}>
      <div class="search-group">
    <input 
     style={BarStyling}
     key="random1"
     value={book}
     name="book"
     placeholder={"search books"}
     onChange={handleChange}
    />
     <div className="ml-auto">
       <input type="submit" value="Search" className="btn btn-primary search-btn" />
        </div>
        </div>           
         </form>                
  );
}

export default SearchBar
