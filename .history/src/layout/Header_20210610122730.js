function Header(){
  return(
    <nav className>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React films</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </nav>
  )
}

export {Header}