import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <nav
      className="navbar sticky-bottom navbar navbar-dark"
      style={{ backgroundColor: "#38B6FF" }}
    >
      <div className="container-fluid ">
        <a
          className="navbar-brand"
          href="/education"
          style={{ color: "black" }}
        >
          {t("footer.education")}
        </a>
        <a className="navbar-brand" href="jobs" style={{ color: "black" }}>
          {t("footer.jobs")}
        </a>
        <a className="navbar-brand" href="housing" style={{ color: "black" }}>
          {t("footer.housing")}
        </a>

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
