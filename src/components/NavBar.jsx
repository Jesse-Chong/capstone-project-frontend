import { Link } from "react-router-dom";

function NavBar() {
    return (
    

<nav className="navbar sticky-top navbar navbar-dark"
    style={{backgroundColor: "#38B6FF"}}>
  <div className="container-fluid">
  <img src="Logo.png" alt="FreshStart Logo" width="75" height="75"/>
  <button className="m-5">
     <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
         Login
        </Link>
      </button>
      <button className="m-5">
     <Link to={"/signup"} style={{ textDecoration: "none", color: "black" }}>
         Sign Up
        </Link>
      </button>
  </div>
</nav>
        
    )
};

export default NavBar;