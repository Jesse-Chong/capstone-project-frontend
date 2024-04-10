import React from 'react';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
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
import NavBar from '../components/NavBar';

const FavNavBar = ({ user, setUser, setToken }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null)
        setToken(null)
    }

    return (
        <div>
            {!user ?
                null
                :
                <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                    <div className="container-fluid" style={{ backgroundColor: "#38B6FF" }}>
                        <a className="navbar-brand fw-bold fs-1 py-3" href="/">
                            <img
                                src="Logo.png"
                                alt="FreshStart Logo"
                                style={{ width: "75px", height: "75px" }}
                            />
                        </a>
                        <h2>Welcome {user.first_name} {user.last_name}</h2>
                
                {/* <ul className="nav-item dropdown">
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
              </ul> */}

                        <div className="d-flex justify-content-center" id="navbarNavAltMarkup">
                            <button className="m-3">
                                <Link  to="/favorite/mydocs">
                                My Saved Documents
                                </Link>
                            </button>
                            <button className="m-3" onClick={handleLogout}>
                                Log Out
                            </button>
                        </div>
                    </div>
                </nav>
            }
        </div>


    );
};

export default FavNavBar;