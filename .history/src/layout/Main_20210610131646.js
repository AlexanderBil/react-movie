import React from 'react';

import {Movies} from '../components/Movies';

class Main extends React.Component{

    state = {
      movies: [],
    }



 render(){

    const
     return(
         <main className = "container content">
            <Movies movies = {this.state.movies}/>
         </main>
     )
 }
  }
  
  export {Main}