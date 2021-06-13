import {Movie} from '../components/Movie';
import {Modal} from '../components/Modal';

function Movies (props) {
    const {movies = [], imdbId} = props;
    return(
       <div className = "movies">
            {movies.length ? movies.map(item => (
                <Movie key = {item.imdbID} {...item}/>
    )) : <h4>Nothing found</h4>
    }
      <Modal imdbID/>
       </div>
    )
  }
  
  export {Movies}

  // {...item} spred замена Title = {item.Title} Year = {item.Year} ...