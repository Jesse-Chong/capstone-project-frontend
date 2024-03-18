import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function LoginNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid" style={{ backgroundColor: "#38B6FF" }}>
        <a className="navbar-brand fw-bold fs-1 py-3" href="/">
          <img
            src="Logo.png"
            alt="FreshStart Logo"
            style={{ width: "75px", height: "75px" }}
          />
        </a>

        <div className="d-flex justify-content-center" id="navbarNavAltMarkup">
          <button className="m-3">
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </Link>
          </button>
          <button className="m-3">
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Signup
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default LoginNavBar;
