import React from 'react';

import {Movies} from '../components/Movies';

class Main extends React.Component{

    state = {
      movies: [],
    }

 render(){
     return(
         <main className = "container content">
            <Movies/>
         </main>
     )
 }
  }
  
  export {Main}