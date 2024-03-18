import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import axios from "axios";
import house from "../assets/house.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import Footer from "../pages/Footer";

function HousingPage() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState([]);
  const [markerIcon, setMarkerIcon] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        const detailsResponse = await axios.get(
          "http://localhost:3001/placeDetails",
          {
            params: {
              key: API_KEY,
              placeIds: placeIds.join(","),
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

  return (
    <div>
      <NavBar />
      <div className="col text-center mt-5">
        <button
          onClick={() => {
            handleSearch("homeless+shelters");
            setMarkerIcon(house);
          }}
        >
          Homeless Shelters
        </button>
        <div className="m-5">
          <GoogleMaps
            places={places}
            apiKey={API_KEY}
            markerIcon={markerIcon}
          />
        </div>
        {places.map((item) => {
          console.log(places);
          return (
            <div key={item.place_id}>
              <br />
              <p>{item.name}</p>
              <br />
            </div>
          );
        })}
      </div>
      <button className="m-5">
        <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </button>
      <Footer />
    </div>
  );
}

export default HousingPage;
