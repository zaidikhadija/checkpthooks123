
import './App.css';
import { Movies } from "./movies.js"
import MoviesListss from './MoviesList';
import AddModal from  './AddModal';
import Rate from  "./Rating";
import Search from "./Search";
import React, { useState} from 'react';

function App (){

  const [MoviesList , setMoviesList] = useState(Movies);
  const[searchTitle ,setSearchTitle]= useState("");
  const [rateSearch, setRateSearch]=useState(1);


  const addNewMovie = (e,newMovie) => {
    e.preventDefault()
    setMoviesList([...MoviesList, newMovie]);
  };

    return (
    

    <div className= 'App'>
      <h1> Movie App </h1>
      <Search searchTitle={searchTitle} setSearchTitle={setSearchTitle} setRateSearch={setRateSearch} rateSearch={rateSearch}/>
      
      <MoviesListss MoviesList={MoviesList} searchTitle={searchTitle} rateSearch={rateSearch}  />
    
      <div style={{ display: 'flex', justifyContent: 'center' }}></div>
    
     <AddModal addNewMovie={addNewMovie} MoviesList ={MoviesList}/>
    
 

  </div>
  
    );
    }
  

export default App;
