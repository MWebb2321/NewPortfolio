function Navbar() {
  return (
    <div className="container-xl">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <strong>Matthew Scott Webb</strong>
          </a>
          <ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Home/Bio
                </a>
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
                <a className="nav-link" href="/resume">
                  Resume
                </a>
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
