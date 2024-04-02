import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HomeNavBar() {
  const { t } = useTranslation();
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
              to={"/login"}
              style={{ textDecoration: "none", color: "black" }}
            >
              {t("navbar.login")}
            </Link>
          </button>
          <button className="m-3">
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              {t("navbar.signup")}
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavBar;
