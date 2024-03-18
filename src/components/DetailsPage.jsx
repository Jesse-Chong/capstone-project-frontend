import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import axios from "axios";
import food from "../assets/burger.png";
import jobs from "../assets/university.png";
import shelter from "../assets/apartment-3.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { t } = useTranslation();
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState([]);
  const [markerIcon, setMarkerIcon] = useState("");

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
      {t("googlemap.header")}
      <div>
        <button
          onClick={() => {
            handleSearch("food+bank");
            setMarkerIcon(food);
          }}
        >
          {t("food_bank")}
        </button>
        <button
          onClick={() => {
            handleSearch("job+agency");
            setMarkerIcon(jobs);
          }}
        >
          {t("job_agency")}
        </button>
        <button
          onClick={() => {
            handleSearch("homeless+shelter");
            setMarkerIcon(shelter);
          }}
        >
          {t("homeless_shelter")}
        </button>
      </div>
      <GoogleMaps places={places} apiKey={API_KEY} markerIcon={markerIcon} />
      <br />
      <button>
        <Link to={"/home"}> {t("button.back")}</Link>
      </button>
      <br />
    </div>
  );
}

export default DetailsPage;
