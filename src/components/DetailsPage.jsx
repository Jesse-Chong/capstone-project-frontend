import React, { useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import axios from "axios";
import food from "../assets/burger.png";
import jobs from "../assets/university.png";
import shelter from "../assets/apartment-3.png";

function DetailsPage() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState([]);
  const [markerIcon, setMarkerIcon] = useState("");

  // Make call to proxy server
  const endpoint = "http://localhost:3001/places";

  // solely used to grab place_id from nearby search and then get place details
  // for all nearby place
  const handleSearch = (type) => {
    setSearch(type);

    axios
      .get(endpoint, {
        params: {
          key: API_KEY,
          location: "40.712776,-74.005974",
          radius: "5000",
          type: type,
          keyword: search,
        },
      })
      .then((response) => {
        const placeIds = response.data.results.map((place) => place.place_id);

        // Send placeIds to the /placeDetails endpoint
        axios
          .get("http://localhost:3001/placeDetails", {
            params: {
              key: API_KEY,
              placeIds: placeIds.join(","), // Convert array to comma-separated string
            },
          })
          .then((detailsResponse) => {
            console.log(
              "Place details inserted successfully:",
              detailsResponse.data
            );
          })
          .catch((detailsError) => {
            console.error("Error inserting place details:", detailsError);
          });

        // Handle successful response
        setPlaces(response.data.results);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching nearby places:", error);
        console.error("Error response data:", error.response.data);
      });
  };

  return (
    <div>
      <h1>Nearby Places</h1>
      <div>
        <button
          onClick={() => {
            handleSearch("food+bank");
            setMarkerIcon(food);
          }}
        >
          Food Banks
        </button>
        <button
          onClick={() => {
            handleSearch("job+agency");
            setMarkerIcon(jobs);
          }}
        >
          Job Agencies
        </button>
        <button
          onClick={() => {
            handleSearch("homeless+shelter");
            setMarkerIcon(shelter);
          }}
        >
          Homeless Shelters
        </button>
      </div>
      <GoogleMaps places={places} apiKey={API_KEY} markerIcon={markerIcon} />
      <br/>
      <button>
        <Link to={'/home'}>Back</Link>
        </button> 
        <br/>
    </div>
    
  );
}

export default DetailsPage;

// Get nearby search for food bank, job agency, or homeless shelter
// const handleSearch = (type) => {
//   setSearch(type)

//   axios.get(endpoint, {
//     params: {
//       key: API_KEY,
//       location: '40.712776,-74.005974', // Example: '40.712776,-74.005974'
//       radius: '5000', // Example: Search within a 5km radius
//       type: type, // Example: Search for restaurants
//       keyword: search
//     }
//   })
//   .then(response => {
//     // Handle successful response
//     // console.log(response.data);
//     setPlaces(response.data.results);
//   })
//   .catch(error => {
//     // Handle error
//     console.error('Error fetching nearby places:', error);
//     console.error('Error response data:', error.response.data);
//   });
// }

// import React from 'react';

// const DetailsPage = () => {
//     return (

//            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
//               {food
//                 .sort((a, b) => (a.name > b.name ? 1 : -1))
//                 .map((item) => {
//                 return (
//                 <div className="col " key={item.id}>
//                 <div className="card h-100 p-2">
//                 <Link
//                 to={`/foods/${item.id}`}
//                 style={{ textDecoration: "none" }}
//                  >
//                 <img
//                     src={item.image}
//                     className="card-img-top"
//                     alt={item.name}
//                     style={{
//                     objectFit: "cover",
//                     height: "250px",
//                     }}
//                     />
//                 <div className="card-body" style={{ color: "green" }}>
//                 <h5 className="card-title">{item.name}</h5>
//                 <div className="card-footer bg-transparent border-success px-1">
//                 ${item.price}
//                 </div>
//                 </div>
//                 </Link>
//                 </div>
//                 </div>
//                 );
//                 })}
//            </div>
//     );
// };

// export default DetailsPage;
