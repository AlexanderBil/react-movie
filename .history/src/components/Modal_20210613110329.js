import React from "react";
import './Modal.css'

function Modal (props) {
 
  return(
<>
{props.modal && (
  <div className = "myModal">
      <div className = "overlay"></div>
         <div className = "modal-content">
         <h3>{props.moviespop.Title}</h3>
         <div>
           
         </div>

         </div>  
  </div>
  )}
</>
  )

}

export {Modal}

