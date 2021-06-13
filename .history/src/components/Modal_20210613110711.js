import React from "react";
import './Modal.css'

function Modal (props) {
const {moviespop} = props
  return(
<>
{props.modal && (
  <div className = "myModal">
      <div className = "overlay"></div>
         <div className = "modal-content">
         <h3>{moviespop.Title}</h3>
         <div>
         <img  className="activator" src={moviespop.Poster} />
         </div>
         <div>
           
         </div>

         </div>  
  </div>
  )}
</>
  )

}

export {Modal}

