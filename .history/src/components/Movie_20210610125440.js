function Movie (props) {

    // деструктуризация
    const {Title, Year, imdbId, Type, Poster} = props
  return(
    <div className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={Poster}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{}</span>
      <p></p>
    </div>
  </div>
  )
}

export {Movie}