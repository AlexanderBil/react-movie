import {} from '../components/'

function Movies (props) {
    const {movies} = props;
    return(
       <div className = "movies">
            {movies.map()}
       </div>
    )
  }
  
  export {Movies}