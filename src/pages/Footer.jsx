import { useTranslation } from "react-i18next";
import { FaBookReader } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  return (
    <nav
      className="navbar sticky-bottom navbar navbar-dark"
      style={{ backgroundColor: "#38B6FF" }}
    >
      <div className="container-fluid">
        <div className="col text-icon">
          <div>
            <a
              className="navbar-brand text"
              href="/education"
              style={{ color: "black" }}
            >
              {t("footer.education")}
            </a>
            <Link to={"/education"} style={{ color: "black" }}>
              <FaBookReader className="icon" />
            </Link>
          </div>
        </div>
        <div className="col text-icon">
          <div>
            <a
              className="navbar-brand text"
              href="/jobs"
              style={{ color: "black" }}
            >
              {t("footer.jobs")}
            </a>
            <Link to={"/jobs"} style={{ color: "black" }}>
              <MdWork className="icon" />
            </Link>
          </div>
        </div>
        <div className="col text-icon">
          <div>
            <a
              className="navbar-brand text"
              href="/housing"
              style={{ color: "black" }}
            >
              {t("footer.housing")}
            </a>
            <Link to={"/housing"} style={{ color: "black" }}>
              <FaHouseChimneyUser className="icon" />
            </Link>
          </div>
        </div>

        <div className="btn-group dropup px-5">
          <button
            type="button"
            className="button dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <CgDetailsMore className="icon" />
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
      </div>
    </nav>
  );
}

export default Footer;
