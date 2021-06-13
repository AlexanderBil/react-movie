import {Movie} from '../components/Movie';


function Movies (props) {
    const {movies = [], imdbID} = props;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const searchMoviesPop = () =>{
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.imdbID}&plot=full`)
      .then(data => data.json())
      .then(data => this.setState({moviespop: data}));
  
      this.setState({modal: !this.state.modal})
  
    }

    return(
       <div className = "movies">

            {movies.length ? movies.map(item => (
                <Movie key = {item.imdbID} imdbID = {imdbID} {...item }/>
    )) : <h4>Nothing found</h4>
    }

       </div>
    )
  }
  
  export {Movies}

  // {...item} spred замена Title = {item.Title} Year = {item.Year} ...