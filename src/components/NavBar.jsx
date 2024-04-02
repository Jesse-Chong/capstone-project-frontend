import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-end">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
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
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="button dropdown-toggle m-3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    borderRadius: "2em",
                    backgroundColor: "white",
                    color: "black",
                    padding: "0.3em",
                  }}
                >
                  {t("footer.more_categories")}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="/healthcare"
                      style={{ color: "black" }}
                    >
                      {t("footer.healthcare")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="food"
                      style={{ color: "black" }}
                    >
                      {t("footer.food_banks")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/government"
                      style={{ color: "black" }}
                    >
                      {t("footer.government_services")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/banking"
                      style={{ color: "black" }}
                    >
                      {t("footer.banking_services")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/education"
                      style={{ color: "black" }}
                    >
                      {t("footer.education")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/housing"
                      style={{ color: "black" }}
                    >
                      {t("footer.housing")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/jobs"
                      style={{ color: "black" }}
                    >
                      {t("footer.jobs")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/dmv"
                      style={{ color: "black" }}
                    >
                      {t("footer.dmv_services")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/faith"
                      style={{ color: "black" }}
                    >
                      {t("footer.faith_based_services")}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
