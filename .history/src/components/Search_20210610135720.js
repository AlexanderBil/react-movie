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
            value
            
            />
          </div>
        </div>
      </div>
    )
}
}

export {Search}