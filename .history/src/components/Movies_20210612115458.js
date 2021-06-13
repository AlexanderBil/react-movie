import {Movie} from '../components/Movie';


function Movies (props) {
    const {movies = [], imdbID} = props;
    return(
       <div className = "movies">
          <a  className="modal-trigger" href="#modal1">
            {movies.length ? movies.map(item => (
                <Movie key = {item.imdbID} imdbID = {imdbID} {...item}/>
    )) : <h4>Nothing found</h4>
    }
</a>
       </div>
    )
  }
  
  export {Movies}

  // {...item} spred замена Title = {item.Title} Year = {item.Year} ...