import {Movie} from '../components/Movie';

function Movies (props) {
    const {movies} = props;
    return(
       <div className = "movies">
            {movies.lengthmovies.map(item => (
                <Movie key = {item.imdbID} {...item}/>
    ))}
       </div>
    )
  }
  
  export {Movies}

  // {...item} spred замена Title = {item.Title} Year = {item.Year} ...