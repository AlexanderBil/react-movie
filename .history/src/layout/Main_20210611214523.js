import React from 'react';

import {Movies} from '../components/Movies';
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';
import {Modal} from '../components/Modal';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{
    state = {
      movies: [],
      moviespop: {},
      loading: true,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then (data => data.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err)
            this.setState({loading: false})
        })
    }


    searchMovies = (str, type = 'all') =>{
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then (data => data.json()
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err)
            this.setState({loading: false})
        })
        )
    } 

    searchMoviesPop = (id) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
        .then(data => data.json())
        .then(data => console.log(data))
    }

 render(){

    const {movies, loading} = this.state;
     return(
        <main className = "container content">
            <Search searchMovies = {this.searchMovies}/>
             {
                 loading ? (
                    <Preloader/>
                 ) : <Movies movies = {movies}/>
             }
             <Modal searchMoviesPop = {}/>
         </main>
     )
 }
  }
  
  export {Main}