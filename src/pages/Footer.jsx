function Footer() {
  return (
    <nav
      className="navbar sticky-bottom navbar navbar-dark"
      style={{ backgroundColor: "#38B6FF" }}
    >
      <div className="container-fluid ">
        <a className="navbar-brand" href="#" style={{ color: "black" }}>
          Education
        </a>
        <a className="navbar-brand" href="#" style={{ color: "black" }}>
          Jobs
        </a>
        <a className="navbar-brand" href="#" style={{ color: "black" }}>
          Housing
        </a>

        <div className="btn-group dropup">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              borderRadius: "2em",
              backgroundColor: "lightgray",
              color: "black",
            }}
          >
            More Categories...
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
                Healthcare
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
                Food Banks
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
                Government Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
                Banking Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
                DMV Services
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" style={{ color: "black" }}>
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
