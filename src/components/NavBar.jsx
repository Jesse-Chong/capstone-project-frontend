function NavBar() {
    return (
    

<nav className="navbar sticky-top navbar navbar-dark bg-primary">
  <div className="container-fluid">
  <img src="Logo.png" alt="FreshStart Logo" width="75" height="75"/>
    <form className="d-flex">
    {/* <label htmlFor="search">Search by category or location: </label> */}
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="" type="submit">Search</button>
    </form>
  </div>
</nav>
        
    )
};

export default NavBar;