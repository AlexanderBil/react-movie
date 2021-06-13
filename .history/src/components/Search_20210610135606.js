import React from 'react'

class Search extends React.Component{
render(){
    return(
        <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input 
            placeholder = "search" 
            type="search" 
            
            />
          </div>
        </div>
      </div>
    )
}
}

export {Search}