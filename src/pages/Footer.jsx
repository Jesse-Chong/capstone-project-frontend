function Footer() {
    return (
    <nav className="navbar sticky-bottom navbar navbar-dark bg-primary ">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Education</a>
        <a className="navbar-brand" href="#">Jobs</a>
        <a className="navbar-brand" href="#">Housing</a>
           
    <div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    More Categories...
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Healthcare</a></li>
    <li><a class="dropdown-item" href="#">Food Banks</a></li>
    <li><a class="dropdown-item" href="#">Government Services</a></li>
    <li><a class="dropdown-item" href="#">Banking Services</a></li>
    <li><a class="dropdown-item" href="#">DMV Services</a></li>
    <li><a class="dropdown-item" href="#">Faith Based Services</a></li>
  </ul>
</div>
    </div>
    </nav>
    )
};

export default Footer;