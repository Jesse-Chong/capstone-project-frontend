import { useTranslation } from "react-i18next";
import { FaBookReader } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaHouseChimneyUser } from "react-icons/fa6";

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
            <FaBookReader className="icon" />
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
            <MdWork className="icon" />
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

            <FaHouseChimneyUser className="icon" />
          </div>
        </div>

        <div className="btn-group dropup px-5">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              borderRadius: "2em",
              backgroundColor: "lightgray",
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
