function Modal (props) {

    // деструктуризация
    // const {Title, Year, imdbId, Type, Poster} = props
  return(
//     <div id = {imdbId} className="card movie">
//     <div className="card-image waves-effect waves-block waves-light">
//         {
//             Poster === 'N/A' ?
//             <img className="activator" src={`https://via.placeholder.com/300x450?text=${Title}`}/>
//              :
//             <img className="activator" src={Poster}/>
//         }

//     </div>
//     <div className="card-content">
//       <span className="card-title activator grey-text text-darken-4">{Title}</span>
//       <p>{Year} <span className = "right" >{Type}</span> </p>
//     </div>
//   </div>
<>
<div id="modal1" className="modal modal-fixed-footer">
<div className="modal-content">
  <h4>Modal Header</h4>
  <p>A bunch of text</p>
</div>
<div className="modal-footer">
  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
</div>
</div>
<>
  )
}

export {Modal}
