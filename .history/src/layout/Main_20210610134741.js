import React from 'react';

import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';

class Main extends React.Component{
    state = {
      movies: [],
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=f7e01939&s=matrix`)
        .then (data => data.json()
        .then(data => this.setState({movies: data.Search})))
    }


 render(){

    const {movies} = this.state;
     return(
         <main className = "container content">
             {
                 movies.length ? (
                    <Movies movies = {movies}/>
                 ) : <
             }
         </main>
     )
 }
  }
  
  export {Main}