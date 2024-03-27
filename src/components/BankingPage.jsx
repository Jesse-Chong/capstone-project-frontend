import { useState, useEffect } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import axios from "axios";
import bank from "../assets/bank.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import Footer from "../pages/Footer";
import Scroll from "../components/Scroll";

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchData = async (setPlaces) => {
  try {
    const response = await axios.get("http://localhost:3001/places", {
      params: {
        key: API_KEY,
        location: "40.712776,-74.005974",
        radius: "5000",
        type: "banks",
        keyword: "banks"
      },
    });

    const placeIds = response.data.results.map((place) => place.place_id);

    try {
      const detailsResponse = await axios.get(
        "http://localhost:3001/placeDetails",
        {
          params: {
            key: API_KEY,
            place_id: placeIds.join(",")
          },
        }
      );

      console.log(
        "Place details inserted successfully:",
        detailsResponse.data
      );
    } catch (detailsError) {
      console.error("Error inserting place details:", detailsError);
    }

    setPlaces(response.data.results);
  } catch (error) {
    console.error("Error fetching nearby places:", error);
    console.error("Error response data:", error.response.data);
  }
};

function BankingPage() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);
  const [markerIcon, setMarkerIcon] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handlePlaceClick = async (place) => {
    setSelectedPlace(place);
    console.log("Place clicked. Place:", place);
  
    try {
      const response = await fetch(
        `http://localhost:3001/placeDetails?key=${API_KEY}&place_id=${place.place_id}`
      );
      const data = await response.json();
  
      if (Array.isArray(data) && data.length > 0) {
        setSelectedPlaceDetails(data[0].result);
      } else {
        setSelectedPlaceDetails(null);
      }
    } catch (err) {
      console.log("Error fetching place details:", err);
      setSelectedPlaceDetails(null);
    }
  };


  useEffect(() => {
    fetchData(setPlaces);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <button
          onClick={() => {
            setSearch("banks");
            setMarkerIcon(bank);
          }}
        >
         Banking Services
        </button>
        <div className="row">
          <div className="col-md-6">
            <GoogleMaps
      places={places}
      apiKey={API_KEY}
      markerIcon={markerIcon}
      selectedPlace={selectedPlace}
      setSelectedPlace={setSelectedPlace}
      selectedPlaceDetails={selectedPlaceDetails}
      setSelectedPlaceDetails={setSelectedPlaceDetails}
      handlePlaceClick={handlePlaceClick}
            />
          </div>
          <div className="col-md-6">
            {places.map((item) => {
              // console.log(places);
              return (
                <div key={item.place_id} onClick={() => handlePlaceClick(item)}>
                  <br />
                  <p>{item.name}</p>
                  {item.opening_hours?.open_now ? "Open Now" : "Closed"}
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className="m-5">
        <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </button>
      <Scroll />
      <Footer />
    </div>
  );
}

export default BankingPage;
