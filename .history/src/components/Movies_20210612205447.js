import { useState } from 'react';
import {Movie} from '../components/Movie';


function Movies (props) {


    const {movies = [], imdbID} = props;
    const API_KEY = process.env.REACT_APP_API_KEY;
   

    return(
       <div className = "movies">

            {movies.length ? movies.map(item => (
                <Movie key = {item.imdbID} imdbID = {imdbID} {...item} searchMoviesPop = {searchMoviesPop}/>
    )) : <h4>Nothing found</h4>
    }

       </div>
    )
  }
  
  export {Movies}

  // {...item} spred замена Title = {item.Title} Year = {item.Year} ...