import React from 'react';

import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

class Main extends React.Component{
    state = {
      movies: [],
      loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=f7e01939&s=avengers`)
        .then (data => data.json()
        .then(data => this.setState({movies: data.Search, loading: false})))
    }


    searchMovies = (str, type = 'all') =>{
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=f7e01939&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then (data => data.json()
        .then(data => this.setState({movies: data.Search, loading: false})))
    } 

 render(){

    const {movies, loading} = this.state;
     return(
        <main className = "container content">
            <Search searchMovies = {this.searchMovies}/>
             {
                 loading ? (
                    <Movies movies = {movies}/>
                 ) : 
             }
         </main>
     )
 }
  }
  
  export {Main}