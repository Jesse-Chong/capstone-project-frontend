import NavBar from "../components/NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import education from "/education.png";
// import jobs from "/jobs.png";
// import healthcare from "/Healthcare.png";
// import housing from "/Housing.png";
// import food from "/FoodBank.png";
// import government from "/Government1.png";
// import bank from "/Bank.png"
// import dmv from "./car.png";
// import religious from "/public/Religious.png"

function Home() {
  return (
    <div>
      {/* <nav className="navbar sticky-top navbar navbar-dark bg-primary"> */}
      <NavBar />
      {/* </nav> <br/> */}
      <h1>Choose a Category</h1>
      <br />
      <br />
      <div className="container">
        <div className="row row-cols-3">
          <div className="col text-center">
            <h2>Education</h2>
            <img
              src="education.png"
              alt="Picture for Education Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>

          <div className="col text-center">
            <h2>Jobs</h2>
            <img
              src="jobs.png"
              alt="Picture for Jobs Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />
            <br />
          </div>

          <div className="col text-center">
            <h2>Healthcare</h2>
            <img
              src="Healthcare.png"
              alt="Picture for Healthcare Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>

          <div className="col text-center">
            <h2>Housing</h2>
            <img
              src="Housing.png"
              alt="Picture for Housing Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>

          <div className="col text-center">
            <h2>Food Banks</h2>
            <img
              src="FoodBank.png"
              alt="Picture for Food Banks Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>

          <div className="col text-center">
            <h2>Government Services</h2>
            <img
              src="Government1.png"
              alt="Picture for Government Services Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>

          <div className="col text-center">
            <h2>Banking Services</h2>
            <img
              src="Bank.png"
              alt="Picture for Banking Services Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>

          <div className="col text-center">
            <h2>DMV Services</h2>
            <img
              src="car.png"
              alt="Picture for DMV Services Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>

          <div className="col text-center">
            <h2>Faith Based Services</h2>
            <img
              src="Religious.png"
              alt="Picture for Faith Based Services Card"
              style={{ width: "250px", height: "250px", objectFit: "contain" }}
            />{" "}
            <br />
          </div>
        </div>
      </div>
      <button className="m-5">
        <Link to={"/"}>Back</Link>
      </button>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
