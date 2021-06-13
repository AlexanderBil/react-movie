function Movie (props) {

    // деструктуризация
    const {Title, Year, imdbId, Type, Poster} = props
  return(
    
    <div  id = {imdbId} className="card movie">
      <button data-target="modal1" class="btn modal-trigger">Modal</button>
    <div data-target="modal1"  className="card-image waves-effect waves-block waves-light">
        {
            Poster === 'N/A' ?
            <img className="activator" src={`https://via.placeholder.com/300x450?text=${Title}`}/>
             :
            <img className="activator" src={Poster}/>
        }

    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}</span>
      <p>{Year} <span className = "right" >{Type}</span> </p>
    </div>
  </div>
  )
}

export {Movie}

