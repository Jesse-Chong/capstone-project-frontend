function Footer() {
  return (
    <nav
      className="navbar sticky-bottom navbar navbar-dark"
      style={{ backgroundColor: "#38B6FF" }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          Education
        </a>
        <a className="navbar-brand" href="#">
          Jobs
        </a>
        <a className="navbar-brand" href="#">
          Housing
        </a>

        <div className="btn-group dropup">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More Categories...
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Healthcare
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Food Banks
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Government Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Banking Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                DMV Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Faith Based Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
