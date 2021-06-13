import React, {useState, useEffect} from "react";
import M from 'materialize-css';

function Modal (props) {
useEffect(
  () =>{
      var elems = document.querySelectorAll('.modal');
      M.Modal.init(elems);
    });
  
    // деструктуризация
    const {Title, Year, imdbId, Type, Poster} = props
  return(
//     <div id = {imdbId} classNameName="card movie">
//     <div classNameName="card-image waves-effect waves-block waves-light">
//         {
//             Poster === 'N/A' ?
//             <img classNameName="activator" src={`https://via.placeholder.com/300x450?text=${Title}`}/>
//              :
//             <img classNameName="activator" src={Poster}/>
//         }

//     </div>
//     <div classNameName="card-content">
//       <span classNameName="card-title activator grey-text text-darken-4">{Title}</span>
//       <p>{Year} <span classNameName = "right" >{Type}</span> </p>
//     </div>
//   </div>

<div id="modal1" className="modal">
  <div className="modal-content">
    <h4>Modal Header</h4>
    <span className="card-title activator grey-text text-darken-4">{Title}</span>
  </div>
</div>
  )
}

export {Modal}

