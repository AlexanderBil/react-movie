function Movie (props) {

    // деструктуризация
    const {Title, Year, imdbId, Type, Poster} = props
  return(
    
    <div id = {imdbId} className="card movie">
 <a class="modal-trigger" href="#modal1">

 </a>

  </div>
  )
}

export {Movie}

