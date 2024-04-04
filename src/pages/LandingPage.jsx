import React from "react";
import { useTranslation } from "react-i18next";
import Scroll from "../components/Scroll";
import { useNavigate } from "react-router-dom";

const boroughCoordinates = {
  manhattan: { lat: 40.7831, lng: -73.9712 },
  queens: { lat: 40.7282, lng: -73.7949 },
  brooklyn: { lat: 40.6782, lng: -73.9442 },
  bronx: { lat: 40.8448, lng: -73.8648 },
  statenIsland: { lat: 40.5795, lng: -74.1502 },
};

function LandingPage({ languageSelected, setLanguageSelected, showGeolocationPopup, setShowGeolocationPopup, userCoordinates, setUserCoordinates }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageSelected(true);
    navigate("/geolocation");
  }
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-0">
              <div className="card-body">
                <img
                  src="Logo.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4 mt-5">
              <div className="card-body">
                <div className="dropdown">
                  <button
                    className="button dropdown-toggle fs-3"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "100%",
                      height: "100px",
                      marginTop: "50px",
                    }}
                  >
                    {t("landing.language")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                    style={{ width: "100%" }}
                  >
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("en")}
                      >
                        English
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("es")}
                      >
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("zh_CN")}
                      >
                        Chinese
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("hi")}
                      >
                        Hindi
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("ar")}
                      >
                        Arabic
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("fr")}
                      >
                        French
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("ru")}
                      >
                        Russian
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("ko")}
                      >
                        Korean
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4 mt-5">
              <div className="card-body">
                <div className="dropdown">
                  <button
                    className="button dropdown-toggle fs-3"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "100%",
                      height: "100px",
                      marginTop: "50px",
                    }}
                  >
                    {t("landing.city")}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                    style={{ width: "100%" }}
                  >
                    <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => {
                      const coordinates = userCoordinates || boroughCoordinates.manhattan;
                      console.log("Selected coordinates:", coordinates);
                      navigate("/resources", { state: { coordinates } });
                    }}
                  >
                    {t("borough.manhattan")}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => {
                      const coordinates = userCoordinates || boroughCoordinates.queens;
                      console.log("Selected coordinates:", coordinates);
                      navigate("/resources", { state: { coordinates } });
                    }}
                  >
                    {t("borough.queens")}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => {
                      const coordinates = userCoordinates || boroughCoordinates.brooklyn;
                      console.log("Selected coordinates:", coordinates);
                      navigate("/resources", { state: { coordinates } });
                    }}
                  >
                    {t("borough.brooklyn")}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => {
                      const coordinates = userCoordinates || boroughCoordinates.bronx
                      console.log("Selected coordinates:", coordinates);
                      navigate("/resources", { state: { coordinates } });
                    }}
                  >
                    {t("borough.bronx")}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => {
                      const coordinates = userCoordinates || boroughCoordinates.statenIsland;
                      console.log("Selected coordinates:", coordinates);
                      navigate("/resources", { state: { coordinates } });
                    }}
                  >
                    {t("borough.staten_island")}
                  </a>
                </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-4">
              <div className="card-body">
                <h3 className="card-text mt-0">{t("mission_statement")}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="mb-4">
              <div className="card-body">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/RGJr6NCLMbc?si=Wrh2DF-1_0EY8Sat"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scroll />
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "#38B6FF" }}>
        © 2024 {t("copyright")}:
        <a className="text-black" href="https://FreshStart.com/">
          FreshStart.com
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
