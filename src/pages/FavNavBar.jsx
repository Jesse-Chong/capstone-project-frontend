import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import NavBar from "../components/NavBar";

const FavNavBar = ({ user, setUser, setToken }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <div>
      {!user ? null : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#38B6FF" }}
          >
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
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <h2 className="d-flex justify-content-center">
                {t("favorite.welcome")} {user.first_name} {user.last_name}
              </h2>
              <div className="navbar-nav">
                <button className="m-3">
                  <Link
                    to="/favorite/mydocs"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {t("favorite.my_saved_documents")}
                  </Link>
                </button>
                <button className="m-3" onClick={handleLogout}>
                  {t("favorite.log_out")}
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default FavNavBar;
