import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "../components/NavBar";
import Scroll from "../components/Scroll";

function HomePage() {
  const { t } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    const storedCoordinates = localStorage.getItem("coordinates");
    if (location.state?.coordinates) {
      localStorage.setItem("coordinates", JSON.stringify(location.state.coordinates));
    } else if (!storedCoordinates) {
      localStorage.setItem("coordinates", JSON.stringify({ lat: 40.7128, lng: -74.006 }));
    }
  }, [location.state]);

  const coordinates = JSON.parse(localStorage.getItem("coordinates")) || { lat: 40.7128, lng: -74.006 };
  console.log("HomePage coordinates:", coordinates);

  return (
    <div>
      <NavBar />
      <h2 className="m-5">Available Resources</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/education`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">
                  {t("home.education")}
                </h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/jobs`} state={{ coordinates }} style={{ textDecoration: "none" }}>
              <img
                src="job.jpeg"
                className="card-img-top"
                alt="Picture for Jobs Card"
                style={{
                  objectFit: "cover",
                  height: "250px",
                }}
              />
              <div className="card-body" style={{ color: "black" }}>
                <h4 className="card-title text-center">{t("home.jobs")}</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/healthcare`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">
                  {t("home.healthcare")}
                </h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/banking`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">{t("home.banking")}</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/food`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">
                  {t("home.food_banks")}
                </h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/housing`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">{t("home.housing")}</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/government`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">
                  {t("home.government_services")}
                </h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/dmv`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">{t("home.dmv")}</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 p-2">
            <Link to={`/faith`} state={{ coordinates }} style={{ textDecoration: "none" }}>
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
                <h4 className="card-title text-center">{t("home.faith")}</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <button className="m-5">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          {t("button.back")}
        </Link>
      </button>
      <Scroll />
      <Footer />
    </div>
  );
}

export default HomePage;
