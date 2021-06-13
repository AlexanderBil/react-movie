import React, {useState, useEffect} from "react";
import M from "../materialize"


function Modal (props) {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems);
          });
    })
    // деструктуризация
    // const {Title, Year, imdbId, Type, Poster} = props
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
<>
<a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

<div id="modal1" className="modal">
  <div className="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div className="modal-footer">
    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
</>
  )
}

export {Modal}

