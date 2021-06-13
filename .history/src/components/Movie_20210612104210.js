import React from 'react';

import {Modal} from '../components/Modal';



class Movie extends React.Component{
  sate = {
    moviespop: {},
  }

  render(){
    return(

    )
  }
}


export { Movie };








function Movie(props) {

  const { Title, Year, imdbID, Type, Poster } = props;
  const API_KEY = process.env.REACT_APP_API_KEY;

     let searchMoviesPop = function () {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`)
        .then(data => data.json())
        .then(data => console.log(data))
    }

  return (

  );
}

export { Movie };
