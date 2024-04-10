import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdHealthAndSafety } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { TbBuildingChurch } from "react-icons/tb";

function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid" style={{ backgroundColor: "#38B6FF" }}>
        <Link className="navbar-brand fw-bold fs-1 py-3" to="/">
          <img
            src="Logo.png"
            alt="FreshStart Logo"
            style={{ width: "75px", height: "75px" }}
          />
        </Link>
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
              <li className="nav-item">
                <Link
                  className="nav-link m-3"
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {t("navbar.login")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link m-3"
                  to="/signup"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {t("navbar.signup")}
                </Link>
              </li>
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
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                  style={{ position: "absolute" }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/healthcare"
                      style={{ color: "black" }}
                    >
                      <MdHealthAndSafety style={{ marginRight: ".5rem" }} />
                      {t("footer.healthcare")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/food"
                      style={{ color: "black" }}
                    >
                      <MdFastfood style={{ marginRight: ".5rem" }} />
                      {t("footer.food_banks")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/government"
                      style={{ color: "black" }}
                    >
                      <RiGovernmentLine style={{ marginRight: ".5rem" }} />
                      {t("footer.government_services")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/banking"
                      style={{ color: "black" }}
                    >
                      <GiBanknote style={{ marginRight: ".5rem" }} />
                      {t("footer.banking_services")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/education"
                      style={{ color: "black" }}
                    >
                      <IoSchool style={{ marginRight: ".5rem" }} />
                      {t("footer.education")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/housing"
                      style={{ color: "black" }}
                    >
                      <FaHouseChimney style={{ marginRight: ".5rem" }} />
                      {t("footer.housing")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/jobs"
                      style={{ color: "black" }}
                    >
                      <MdOutlineWork style={{ marginRight: ".5rem" }} />
                      {t("footer.jobs")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/dmv"
                      style={{ color: "black" }}
                    >
                      <FaCar style={{ marginRight: ".5rem" }} />
                      {t("footer.dmv_services")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/faith"
                      style={{ color: "black" }}
                    >
                      <TbBuildingChurch style={{ marginRight: ".5rem" }} />
                      {t("footer.faith_based_services")}
                    </Link>
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
