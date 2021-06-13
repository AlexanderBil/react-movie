import React from 'react'

class Search extends React.Component{

state = {
    search: '',
    type: 'all'

}

handlekey = (event) => {
  if(event.key === 'Enter'){
    this.props.searchMovies(this.state.search)
  }
}

handleFilter = (event) => {
 this.setState(() => ({type: event.target.dataset.type}),)
 this.props.searchMovies(this.state.search)
}

render(){
    return(
        <div className="row">
        <div className="col s12">

          <div className="input-field">
            <input 
            className="validate"
            placeholder = "search" 
            type="search" 
            value = {this.state.search}
            onChange = {(e) => this.setState({search: e.target.value})}
            onKeyDown = {this.handlekey}
            />

            <button className = "btn search-btn" onClick = { () => this.props.searchMovies(this.state.search)}>Search</button>
          </div>
          <div>
          <label>
             <input className="with-gap" name="type" type="radio" data-type = "all" onChange = {this.handleFilter} checked = {this.state.type === 'all'}/>
               <span>All</span>
          </label>
          <label>
             <input className="with-gap" name="type" type="radio" data-type = "movie" onChange = {this.handleFilter} checked = {this.state.type === 'movie'}/>
               <span>Movies only</span>
          </label>
          <label>
             <input className="with-gap" name="type" type="radio" data-type = "series" onChange = {this.handleFilter} checked = {this.state.type === 'series'} />
               <span>Series only</span>
          </label>
          </div>
        </div>
      </div>
    )
}
}

export {Search}