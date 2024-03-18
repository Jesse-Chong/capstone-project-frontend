function Footer() {
  return (
    <nav
      className="navbar sticky-bottom navbar navbar-dark"
      style={{ backgroundColor: "#38B6FF" }}
    >
      <div className="container-fluid ">
        <a
          className="navbar-brand"
          href="/education"
          style={{ color: "black" }}
        >
          Education
        </a>
        <a className="navbar-brand" href="jobs" style={{ color: "black" }}>
          Jobs
        </a>
        <a className="navbar-brand" href="housing" style={{ color: "black" }}>
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
              <a
                className="dropdown-item"
                href="/healthcare"
                style={{ color: "black" }}
              >
                Healthcare
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="food"
                style={{ color: "black" }}
              >
                Food Banks
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/government"
                style={{ color: "black" }}
              >
                Government Services
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/banking"
                style={{ color: "black" }}
              >
                Banking Services
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/dmv"
                style={{ color: "black" }}
              >
                DMV Services
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/faith"
                style={{ color: "black" }}
              >
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
