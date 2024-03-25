import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid" style={{ backgroundColor: "#38B6FF" }}>
        <a className="navbar-brand fw-bold fs-1 py-3" href="/home">
          <img
            src="Logo.png"
            alt="FreshStart Logo"
            style={{ width: "75px", height: "75px" }}
          />
        </a>

        <div className="d-flex justify-content-center" id="navbarNavAltMarkup">
          <div className="btn-group dropdown px-5">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle m-3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                borderRadius: "2em",
                background: "white",
                color: "black",
              }}
            >
              {t("footer.more_categories")}
            </button>
            <ul className="dropdown-menu">
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
          </div>
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

export default NavBar;
