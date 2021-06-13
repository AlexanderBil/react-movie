function Movie (props) {

    // деструктуризация
    const {Title, Year, imdbId, Type, Poster} = props
  return(
    <div className="card movie">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p></p>
    </div>
  </div>
  )
}

export {Movie}