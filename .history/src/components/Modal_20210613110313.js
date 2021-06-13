import React from "react";
import './Modal.css'

function Modal (props) {
 
  return(
<>
{props.modal && (
  <div className = "myModal">
      <div className = "overlay"></div>
         <div className = "modal-content">
         <h2>{props.moviespop.Title}</h2>

         </div>  
  </div>
  )}
</>
  )

}

export {Modal}

