import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "../components/NavBar";

function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <NavBar />
      <h2 className="m-5">{t('home.category')}</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/education`} style={{ textDecoration: "none" }}>
              <img
                src="education.png"
                className="card-img-top"
                alt="Picture for Education Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.education')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/jobs`} style={{ textDecoration: "none" }}>
              <img
                src="jobs.png"
                className="card-img-top"
                alt="Picture for Jobs Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.jobs')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/healthcare`} style={{ textDecoration: "none" }}>
              <img
                src="Healthcare.png"
                className="card-img-top"
                alt="Picture for Food Banks Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.healthcare')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/banking`} style={{ textDecoration: "none" }}>
              <img
                src="Bank.png"
                className="card-img-top"
                alt="Picture for Food Banks Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.banking')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/food`} style={{ textDecoration: "none" }}>
              <img
                src="FoodBank.png"
                className="card-img-top"
                alt="Picture for Food Banks Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.food_banks')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/housing`} style={{ textDecoration: "none" }}>
              <img
                src="Housing.png"
                className="card-img-top"
                alt="Picture for Housing Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.housing')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/government`} style={{ textDecoration: "none" }}>
              <img
                src="Government1.png"
                className="card-img-top"
                alt="Picture for Government Services Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.government_services')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/dmv`} style={{ textDecoration: "none" }}>
              <img
                src="car.png"
                className="card-img-top"
                alt="Picture for DMV Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.dmv')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/faith`} style={{ textDecoration: "none" }}>
              <img
                src="Religious.png"
                className="card-img-top"
                alt="Picture for Faith Based Services Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t('home.faith')}</h4>
                {/* <div className="card-footer bg-transparent border-success px-1">
                food
              </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <button className="m-5">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        {t('button.back')}
        </Link>
      </button>
      <Footer />
    </div>
  );
}

export default HomePage;
