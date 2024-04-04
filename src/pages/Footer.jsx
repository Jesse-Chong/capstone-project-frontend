import { useTranslation } from "react-i18next";
import { FaBookReader } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdHealthAndSafety } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { GiBanknote } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { TbBuildingChurch } from "react-icons/tb";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="sticky-bottom">
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

          <div className="btn-group dropup">
            <button
              type="button"
              className="button dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <CgDetailsMore className="icon" />
            </button>
            <ul className="dropdown-menu" id="footerIcon">
              <li>
                <a
                  className="dropdown-item"
                  href="/healthcare"
                  style={{ color: "black" }}
                >
                  <MdHealthAndSafety style={{ fontSize: "40px" }} />
                  {/* {t("footer.healthcare")} */}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/food"
                  style={{ color: "black" }}
                >
                  <MdFastfood style={{ fontSize: "40px" }} />
                  {/* {t("footer.food_banks")} */}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/government"
                  style={{ color: "black" }}
                >
                  <RiGovernmentLine style={{ fontSize: "40px" }} />
                  {/* {t("footer.government_services")} */}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/banking"
                  style={{ color: "black" }}
                >
                  <GiBanknote style={{ fontSize: "40px" }} />
                  {/* {t("footer.banking_services")} */}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/dmv"
                  style={{ color: "black" }}
                >
                  <FaCar style={{ fontSize: "40px" }} />
                  {/* {t("footer.dmv_services")} */}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/faith"
                  style={{ color: "black" }}
                >
                  <TbBuildingChurch style={{ fontSize: "40px" }} />
                  {/* {t("footer.faith_based_service")} */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
