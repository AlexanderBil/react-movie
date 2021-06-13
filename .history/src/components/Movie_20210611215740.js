import {Modal} from '../components/Modal';

function Movie(props) {
  // деструктуризация
  const { Title, Year, imdbId, Type, Poster } = props;

     let popap =  searchMoviesPop = (id) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
        .then(data => data.json())
        .then(data => console.log(data))
    }


  return (
    <div id={imdbId} className="card movie">
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

      <Modal searchMoviesPop />
    </div>
  );
}

export { Movie };
