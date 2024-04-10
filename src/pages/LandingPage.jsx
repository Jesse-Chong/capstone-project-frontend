import { useTranslation } from "react-i18next";
import Scroll from "../components/Scroll";
import { useNavigate } from "react-router-dom";

const boroughCoordinates = {
  manhattan: { lat: 40.7831, lng: -73.9712 },
  queens: { lat: 40.7282, lng: -73.7949 },
  brooklyn: { lat: 40.6782, lng: -73.9442 },
  bronx: { lat: 40.8448, lng: -73.8648 },
  statenIsland: { lat: 40.5795, lng: -74.1502 }
};

function LandingPage({ setLanguageSelected, setCoordinates }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageSelected(true);
    navigate("/geolocation");
  }
  const handleBoroughClick = (borough) => {
    const geolocationAllowed = localStorage.getItem('geolocationAllowed') === 'true'
    if (geolocationAllowed) {
        // Use user's coordinates
        navigate("/resources");
    } else {
        // Use coordinates of the selected borough
        const selectedCoordinates = boroughCoordinates[borough];
        setCoordinates(selectedCoordinates);
        navigate("/resources");
    }
};

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
                        {t("language.english")} / English
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("es")}
                      >
                        {t("language.spanish")} / Spanish
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("zh_CN")}
                      >
                        {t("language.chinese")} / Chinese
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("hi")}
                      >
                        {t("language.hindi")} / Hindi
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("ar")}
                      >
                        {t("language.arabic")} / Arabic
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("fr")}
                      >
                        {t("language.french")} / French
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("ru")}
                      >
                        {t("language.russian")} / Russian
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-5 text-center"
                        href="#"
                        onClick={() => changeLanguage("ko")}
                      >
                        {t("language.korean")} / Korean
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
                        onClick={() => handleBoroughClick("manhattan")}
                      >
                        {t("borough.manhattan")} / Manhattan
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-3 text-center"
                        href="#"
                        onClick={() => handleBoroughClick("queens")}
                      >
                        {t("borough.queens")} / Queens
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-3 text-center"
                        href="#"
                        onClick={() => handleBoroughClick("brooklyn")}
                      >
                        {t("borough.brooklyn")} / Brooklyn
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-3 text-center"
                        href="#"
                        onClick={() => handleBoroughClick("bronx")}
                      >
                        {t("borough.bronx")} / Bronx
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item fs-3 text-center"
                        href="#"
                        onClick={() => handleBoroughClick("statenIsland")}
                      >
                        {t("borough.staten_island")} / Staten Island
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
