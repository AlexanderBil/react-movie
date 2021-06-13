import React from "react";
import './M'

function Modal (props) {
 
  return(
<>
{props.modal && (
  <div className = "myModal">
      <div className = "overlay"></div>
         <div className = "modal-content">
         <h2>{props.moviespop.Title}</h2>
         <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis harum dolor quod molestiae cumque voluptatum optio, a exercitationem ipsa sapiente!
         </p>
         </div>  
  </div>
  )}
</>
  )

}

export {Modal}

