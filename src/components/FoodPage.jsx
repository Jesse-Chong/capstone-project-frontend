import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import axios from "axios";
import food from "../assets/burger.png";
import jobs from "../assets/university.png";
import shelter from "../assets/apartment-3.png";
import { useNavigate } from "react-router-dom";

function FoodPage() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [places, setPlaces] = useState([]);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState([]);
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
        <div className="col text-center">
        <button
          onClick={() => {
            handleSearch("food+bank");
            setMarkerIcon(food);
            navigate("/food")
          }}
        >
          Food Banks
        </button>
        <GoogleMaps places={places} apiKey={API_KEY} markerIcon={markerIcon} />
          {places.map((item)=>{
            console.log(places)
                return (
                <div key={item.place_id}>
                    <p>Name: {item.name}</p>
                          <p>Address: {item.formatted_address}</p>
                          {item.formatted_phone_number && (
                            <p>Phone: {item.formatted_phone_number}</p>
                          )}
                          <p>Rating: {item.rating}</p>
                          {/* {item.website && ( */}
                            <p>Website: {item.website}</p>
                          {/* )} */}
        
          </div>)
          }) } 
          </div>
        
    </div>
  )
}

export default FoodPage;