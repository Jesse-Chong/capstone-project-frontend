import React from "react";
import { useTranslation } from 'react-i18next';

export default function AppDescription() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="dropdown d-flex justify-content-center">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ padding: "15px", width: "65%", fontSize: "50px" }}
        >
         {t('landing.language')}
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={{ width: "65%" }}
        >
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

      <div className="dropdown d-flex justify-content-center">
        <button
          className="btn btn-secondary dropdown-toggle fs-1"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ padding: "15px", width: "45%" }}
        >
          {t('landing.city')}
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={{ width: "45%" }}
        >
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
      <br />
      <br />
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
        © 2024 Copyright:
        <a className="text-white" href="https://FreshStart.com/">
          FreshStart.com
        </a>
      </div>
    </div>
  );
}
