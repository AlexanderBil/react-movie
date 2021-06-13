import React from 'react';
import { Modal, Button } from 'react-materialize';
import {Modal} from '../components/Modal';

const API_KEY = process.env.REACT_APP_API_KEY;

class Movie extends React.Component{

  constructor(props){
        super(props)
        this.state = {
            moviespop: {},
            view: {showModal: false}
        }
        this.handleHideModal=this.handleHideModal.bind(this);
        this.handleShowModal=this.handleShowModal.bind(this);
  }

  handleHideModal(){
    this.setState({view: {showModal: false}})
}
handleShowModal(){
    this.setState({view: {showModal: true}})
}

  searchMoviesPop = (event) =>{
    event.stopPropagation();
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.imdbID}&plot=full`)
    .then(data => data.json())
    .then(data => this.setState({moviespop: data}));

  }


  render(){
    const { Title, Year, imdbID, Type, Poster } = this.props;
    return(
      <div id={imdbID} className="card movie ">
             <a onClick = {this.searchMoviesPop}  className = "open-modal  modal-trigger"  href="#modal1">           
        <div   className="card-image waves-effect waves-block waves-light">
          {Poster === "N/A" ? (
            <img
              className="activator"
              src={`https://via.placeholder.com/300x450?text=${Title}`}
            />
          ) : (
            <img  className="activator" src={Poster} />
          )}
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {Title}
          </span>
          <p>
            {Year} <span className="right">{Type}</span>{" "}
          </p>
        </div>
        </a>   
        <Modal moviespop = {this.state.moviespop} handleHideModal={this.handleHideModal} show={this.state.view.showModal}/>
       
    </div>
    )
  }
}

export { Movie };






