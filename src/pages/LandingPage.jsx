import React from "react";
import { useTranslation } from 'react-i18next';

function LandingPage() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="m-3" style={{ height: "100px" }}>
            <img
              src="Logo.png"
              className="rounded"
              alt="..."
              style={{ height: "300px", width: "300px" }}
            />
          </div>
        </div>
        <div className="col">
          <div className="dropdown d-flex justify-content-center">
            <button
              className="btn btn-secondary dropdown-toggle fs-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "15px" }}
            >
                 {t('landing.language')}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('en')}>
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('es')}>
                  Spanish
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('zh_CN')}>
                  Chinese
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('hi')}>
                  Hindi
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('ar')}>
                  Arabic
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('fr')}>
                  French
                </a>
              </li>
              <li>
            <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('ru')}>
              Russian
            </a>
          </li>
          <li>
            <a className="dropdown-item fs-3 text-center" href="#" onClick={() => changeLanguage('ko')}>
              Korean
            </a>
          </li>
            </ul>
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
        <br />
        <br />
        <div className="col">
          <div className="dropdown d-flex justify-content-center">
            <button
              className="btn btn-secondary dropdown-toggle fs-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "15px" }}
            >
              {t('landing.city')}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                {t('borough.manhattan')}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                {t('borough.queens')}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                {t('borough.brooklyn')}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                {t('borough.bronx')}
                </a>
              </li>
              <li>
                <a className="dropdown-item fs-3 text-center" href="#">
                {t('borough.staten_island')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="fs-2 mt-5 px-5 ">
            {t('mission_statement')}
              {/* To create a seamless transition for immigrants so they can access
              the information they need. When immigrants arrive they are not
              aware of the resources they may need. To provide legal and
              accurate information for immigrants who are immigrating to the
              U.S. The information is accessible in one app and also enables
              users to choose their language. */}
            </p>
          </div>
          {/* <div class="col">Column</div>
          <div class="col">Column</div> */}
        </div>
      </div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#45637d" }}
      >
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

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 {t('copyright')}:
          <a className="text-white" href="https://FreshStart.com/">
            FreshStart.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
