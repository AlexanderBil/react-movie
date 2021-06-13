import {Movie} from '../components/Movie';

function Movies (props) {
    const {movies} = props;
    return(
       <div className = "movies">
            {movies.map(item => {
                <Movie key = {item.im}/>
            })}
       </div>
    )
  }
  
  export {Movies}