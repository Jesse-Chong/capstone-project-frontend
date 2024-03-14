import React from "react";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="clearfix">
        <img
          src="Logo.png"
          className="col-md-3 float-md-start ms-md-3"
          alt="FreshStrat Logo"
        />
        <p className="fs-2 mt-5 px-5 d-flex justify-content-center">
          <br />
          <br />
          {t("mission_statement")}
          {/* To create a seamless transition for immigrants so they can access the
          information they need. When immigrants arrive they are not aware of
          the resources they may need. To provide legal and accurate information
          for immigrants who are immigrating to the U.S. The information is
          accessible in one app and also enables users to choose their language. */}
        </p>
      </div>
      <div className="container mt-1">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle fs-1"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  padding: "15px",
                  width: "100%",
                  color: "black",
                  backgroundColor: "lightgray",
                  borderRadius: "2em",
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
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("es")}
                  >
                    Spanish
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("zh_CN")}
                  >
                    Chinese
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("hi")}
                  >
                    Hindi
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("ar")}
                  >
                    Arabic
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("fr")}
                  >
                    French
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("ru")}
                  >
                    Russian
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item fs-3 text-center"
                    href="#"
                    onClick={() => changeLanguage("ko")}
                  >
                    Korean
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle fs-1"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  padding: "15px",
                  width: "100%",
                  color: "black",
                  backgroundColor: "lightgray",
                  borderRadius: "2em",
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
                  <a className="dropdown-item fs-3 text-center" href="#">
                    {t("borough.manhattan")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-3 text-center" href="#">
                    {t("borough.queens")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-3 text-center" href="#">
                    {t("borough.brooklyn")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-3 text-center" href="#">
                    {t("borough.bronx")}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-3 text-center" href="#">
                    {t("borough.staten_island")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="text-center text-black">
        <div className="container p-4">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    // src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    src="https://www.youtube.com/embed/RGJr6NCLMbc?si=Wrh2DF-1_0EY8Sat"
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "#38B6FF" }}>
          © 2024 {t("copyright")}:
          <a className="text-black" href="https://FreshStart.com/">
            FreshStart.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
