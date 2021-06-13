import React from "react";
import '../components/Modal.css'

function Modal (props) {

  return(
<>
  <div className = "modal">
      <div className = "overlay"></div>
         <div className = "modal-content">
         <h2>Hello</h2>
         <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis harum dolor quod molestiae cumque voluptatum optio, a exercitationem ipsa sapiente!
         </p>
         </div>  
  </div>
</>
  )

}

export default {Modal}

