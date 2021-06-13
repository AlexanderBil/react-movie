// import React, {useState, useEffect} from "react";
// import M from 'materialize-css';

function Modal (props) {

const {moviespop} = props;

// useEffect(
//   () =>{
//       var elems = document.querySelectorAll('.modal');
//       M.Modal.init(elems);
//     });
  

  return(


<div id="modal1" className="modal">
  <div className="modal-content">
    <h4>Modal Header</h4>
    <span className="card-title activator grey-text text-darken-4">{}</span>
  </div>
</div>
  )

}

export {Modal}

