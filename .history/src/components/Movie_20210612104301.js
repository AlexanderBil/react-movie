import React from 'react';

import {Modal} from '../components/Modal';

const { Title, Year, imdbID, Type, Poster } = props;
const API_KEY = process.env.REACT_APP_API_KEY;

class Movie extends React.Component{
  sate = {
    moviespop: {},
  }

  render(){
    return(
      <div onClick = {searchMoviesPop} id={imdbID} className="card movie">
      <a className="modal-trigger" href="#modal1">
        <div className="card-image waves-effect waves-block waves-light">
          {Poster === "N/A" ? (
            <img
              className="activator"
              src={`https://via.placeholder.com/300x450?text=${Title}`}
            />
          ) : (
            <img className="activator" src={Poster} />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {Title}
          </span>
          <p>
            {Year} <span className="right">{Type}</span>{" "}
          </p>
        </div>
      </a>
      <Modal />
    </div>
    )
  }
}


export { Movie };








function Movie(props) {



     let searchMoviesPop = function () {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`)
        .then(data => data.json())
        .then(data => console.log(data))
    }

  return (

  );
}

export { Movie };
