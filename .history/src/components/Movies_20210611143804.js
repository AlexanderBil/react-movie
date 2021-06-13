import {Movie} from '../components/Movie';

function Movies (props) {
    const {movies = {}} = props;
    return(
       <div className = "movies">
            {movies.length ? movies.keys(item => (
                <Movie key = {item.imdbID} {...item}/>
    )) : <h4>Nothing found</h4>
    }
       </div>
    )
  }
  
  export {Movies}

  // {...item} spred замена Title = {item.Title} Year = {item.Year} ...