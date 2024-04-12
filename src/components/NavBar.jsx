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
        {/* <div className="d-flex justify-content-end"> */}
        <div
          className="collapse navbar-collapse justify-content-center justify-content-lg-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <div className="d-flex flex-column flex-lg-row align-items-center">
              <li className="nav-item mb-2 mb-lg-0">
                <button className="">
                  <Link
                    to={"/login"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {t("navbar.login")}
                  </Link>
                </button>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <button className="m-3">
                  <Link
                    to={"/signup"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {t("navbar.signup")}
                  </Link>
                </button>
              </li>
              <li className="nav-item dropdown mb-2 mb-lg-0">
                <button
                  type="button"
                  className="button dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  // style={{
                  //   borderRadius: "2em",
                  //   backgroundColor: "white",
                  //   color: "black",
                  //   padding: "0.3em",
                  // }}
                >
                  {t("footer.more_categories")}
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-start"
                  aria-labelledby="navbarDropdown"
                  style={{ position: "absolute" }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="/healthcare"
                      style={{ color: "black" }}
                    >
                      <MdHealthAndSafety style={{ marginRight: ".5rem" }} />
                      {t("footer.healthcare")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="food"
                      style={{ color: "black" }}
                    >
                      <MdFastfood style={{ marginRight: ".5rem" }} />
                      {t("footer.food_banks")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/government"
                      style={{ color: "black" }}
                    >
                      <RiGovernmentLine style={{ marginRight: ".5rem" }} />
                      {t("footer.government_services")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/banking"
                      style={{ color: "black" }}
                    >
                      <GiBanknote style={{ marginRight: ".5rem" }} />
                      {t("footer.banking_services")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/education"
                      style={{ color: "black" }}
                    >
                      <IoSchool style={{ marginRight: ".5rem" }} />
                      {t("footer.education")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/housing"
                      style={{ color: "black" }}
                    >
                      <FaHouseChimney style={{ marginRight: ".5rem" }} />
                      {t("footer.housing")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/jobs"
                      style={{ color: "black" }}
                    >
                      <MdOutlineWork style={{ marginRight: ".5rem" }} />
                      {t("footer.jobs")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/dmv"
                      style={{ color: "black" }}
                    >
                      <FaCar style={{ marginRight: ".5rem" }} />
                      {t("footer.dmv_services")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/faith"
                      style={{ color: "black" }}
                    >
                      <TbBuildingChurch style={{ marginRight: ".5rem" }} />
                      {t("footer.faith_based_services")}
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
