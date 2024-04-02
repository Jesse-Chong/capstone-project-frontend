import { useState, useEffect } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import car from "../assets/car.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import Footer from "../pages/Footer";
import Scroll from "../components/Scroll";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_BASE_URL;

const fetchData = async (setPlaces, coordinates) => {
  try {
    const response = await axios.get(`${url}/places`, {
      params: {
        key: API_KEY,
        location: `${coordinates.lat},${coordinates.lng}`,
        radius: "5000",
        type: "department_of_motor_vehicles",
        keyword: "DMV",
      },
    });

    const placeIds = response.data.results.map((place) => place.place_id);

    try {
      const detailsResponse = await axios.get(`${url}/placeDetails`, {
        params: {
          key: API_KEY,
          place_id: placeIds.join(","),
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

function DMVPage() {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);
  const [markerIcon, setMarkerIcon] = useState("");
  const [visible, setVisible] = useState(3);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const coordinates = location.state?.coordinates || {
    lat: 40.7128,
    lng: -74.006,
  };

  function Loadmore() {
    setVisible(visible + 3);
  }

  const handlePlaceClick = async (place) => {
    setSelectedPlace(place);
    console.log("Place clicked. Place:", place);

    try {
      const response = await fetch(
        `${url}/placeDetails?key=${API_KEY}&place_id=${place.place_id}`
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
    fetchData(setPlaces, coordinates);
  }, [coordinates]);
  return (
    <div>
      <NavBar />
      <div className="container text-center mt-3">
        <button
          onClick={() => {
            setSearch("DMV");
            setMarkerIcon(car);
          }}
        >
          DMV
        </button>
        <div className="row">
          <div className="col-md-6 mt-3">
            <GoogleMaps
              places={places}
              apiKey={API_KEY}
              markerIcon={markerIcon}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              selectedPlaceDetails={selectedPlaceDetails}
              setSelectedPlaceDetails={setSelectedPlaceDetails}
              handlePlaceClick={handlePlaceClick}
              coordinates={coordinates}
            />
          </div>
          <div className="col-md-6">
            {places.slice(0, visible).map((item) => {
              // console.log(places);
              return (
                <div
                  className="col"
                  key={item.place_id}
                  onClick={() => handlePlaceClick(item)}
                >
                  <br />
                  <div className="card h-100 p-2">
                    <div className="card-body" style={{ color: "#38B6FF" }}>
                      <span className="fw-bold ">Name: </span>
                      <p className="card-title">{item.name}</p>
                      <span className="fw-bold">Currently: </span>
                      {item.opening_hours?.open_now ? "Open Now" : "Closed"}
                    </div>
                  </div>
                </div>
              );
            })}
            {visible < places.length && (
              <button type="button" className="m-5" onClick={Loadmore}>
                LOAD MORE
              </button>
            )}
          </div>
        </div>
      </div>
      <button className="m-5">
        <Link to={"/resources"} style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </button>
      <Scroll />
      <Footer />
    </div>
  );
}

export default DMVPage;
