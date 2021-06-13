import React from 'react'

class Search extends React.Component{

state = {
    search: '',

}


render(){
    return(
        <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input 
            className="validate"
            placeholder = "search" 
            type="search" 
            value = {this.state.search}
            onChange = {(e) => this.setState({search: e.target.value})}
            
            />
          </div>
        </div>
      </div>
    )
}
}

export {Search}