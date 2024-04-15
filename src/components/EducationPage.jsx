import { useState, useEffect } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import education from "../assets/education.png";
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
        type: "school",
        keyword: "school",
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

function EducationPage({ coordinates }) {
  const [isLoadingDirections, setIsLoadingDirections] = useState(false);
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);
  const [markerIcon, setMarkerIcon] = useState("");
  const [visible, setVisible] = useState(3);
  const [origin, setOrigin] = useState(null);
  const [showDirectionsButton, setShowDirectionsButton] = useState(false);
  const [directions, setDirections] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (coordinates) {
      fetchData(setPlaces, coordinates);
      console.log(coordinates);
    }
  }, [coordinates]);

  if (coordinates === null) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  function Loadmore() {
    setVisible(visible + 3);
  }

  const handlePlaceClick = async (place) => {
    setSelectedPlace(place);
    setShowDirectionsButton(true);
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

  const handleDirectionsClick = () => {
    if (selectedPlace && !isLoadingDirections) {
      setIsLoadingDirections(true);
      fetchDirections(selectedPlace.geometry.location);
    }
  };

  const fetchDirections = async (destination) => {
    try {
      const response = await axios.get(`${url}/api/directions`, {
        params: {
          origin: `${coordinates.lat},${coordinates.lng}`,
          destination: `${destination.lat},${destination.lng}`,
        },
      });
      console.log("Directions response:", response.data);
      setDirections(response.data.routes[0].legs[0].steps);
      console.log("Directions state:", response.data.routes[0].legs[0].steps);
      setOrigin(coordinates);
    } catch (error) {
      console.error("Error fetching directions:", error);
    } finally {
      setIsLoadingDirections(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container text-center mt-3">
        <button
          onClick={() => {
            setSearch("education");
            setMarkerIcon(education);
          }}
        >
          {t("education.education_services")}
        </button>
        <div className="row">
          <div className="col-md-6 mt-3">
            <GoogleMaps
              key={`${coordinates.lat},${coordinates.lng}`}
              places={places}
              apiKey={API_KEY}
              markerIcon={markerIcon}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              selectedPlaceDetails={selectedPlaceDetails}
              setSelectedPlaceDetails={setSelectedPlaceDetails}
              handlePlaceClick={handlePlaceClick}
              coordinates={coordinates}
              showDirectionsButton={showDirectionsButton}
              handleDirectionsClick={handleDirectionsClick}
              origin={origin}
              isLoadingDirections={isLoadingDirections}
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
                      <span className="fw-bold ">{t("infoWindow.name")} </span>
                      <p className="card-title">{item.name}</p>
                      <span className="fw-bold">
                        {t("infowindow.currently")}{" "}
                      </span>
                      {item.opening_hours?.open_now ? "Open Now" : "Closed"}
                    </div>
                  </div>
                </div>
              );
            })}
            {visible < places.length && (
              <button type="button" className="m-5" onClick={Loadmore}>
                {t("all.load_more")}
              </button>
            )}
          </div>
        </div>
      </div>
      <button className="m-5">
        <Link
          to={"/resources"}
          style={{ textDecoration: "none", color: "black" }}
        >
          {t("all.back")}
        </Link>
      </button>
      <Scroll />
      <Footer />
      <button
        className="button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        Education Services
      </button>

      <div
        className="offcanvas offcanvas-bottom"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fs-1"
            style={{ color: "#38B6FF" }}
            id="offcanvasBottomLabel"
          >
            Education
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small fs-3" style={{ color: "#38B6FF" }}>
          The schools located close to the user will be listed including that
          location's information. The user will also be able to choose the type
          of transportation to the listed location and also be able to view the
          directions to that location.
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
