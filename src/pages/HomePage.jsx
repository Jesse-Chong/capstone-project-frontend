import NavBar from "../components/NavBar";
import Footer from "./Footer";
// import education from "/education.png";
// import jobs from "/jobs.png";
// import healthcare from "/Healthcare.png";
// import housing from "/Housing.png";
// import food from "/FoodBank.png";
// import government from "/Government1.png";
// import bank from "/Bank.png"
// import dmv from "./car.png";
import React, { useState } from "react";
import GoogleMaps from "../components/GoogleMaps"
import { Link } from "react-router-dom";
import axios from "axios";
import food from "../assets/burger.png";
import jobs from "../assets/university.png";
import shelter from "../assets/apartment-3.png";
import { useNavigate } from "react-router-dom";


function Home() {


  const API_KEY = import.meta.env.VITE_API_KEY;
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState([]);
  const [markerIcon, setMarkerIcon] = useState("");
  const navigate = useNavigate();

  // Make call to proxy server
  const endpoint = "http://localhost:3001/places";


  // solely used to grab place_id from nearby search and then get place details
  // for all nearby place
  const handleSearch = async (type) => {
    setSearch(type);
  
    try {
      const response = await axios.get(endpoint, {
        params: {
          key: API_KEY,
          location: "40.712776,-74.005974",
          radius: "5000",
          type: type,
          keyword: type,
        },
      });
  
      const placeIds = response.data.results.map((place) => place.place_id);
  
      try {
        const detailsResponse = await axios.get("http://localhost:3001/placeDetails", {
          params: {
            key: API_KEY,
            placeIds: placeIds.join(","),
          },
        });
  
        console.log("Place details inserted successfully:", detailsResponse.data);
      } catch (detailsError) {
        console.error("Error inserting place details:", detailsError);
      }
  
      setPlaces(response.data.results);
    } catch (error) {
      console.error("Error fetching nearby places:", error);
      console.error("Error response data:", error.response.data);
    }
  };
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
          <button
          onClick={() => {
            handleSearch("food+bank");
            setMarkerIcon(food);
            navigate("/food")
          }}
        >
          Food Banks
        </button>
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
      <GoogleMaps places={places} apiKey={API_KEY} markerIcon={markerIcon} />
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
