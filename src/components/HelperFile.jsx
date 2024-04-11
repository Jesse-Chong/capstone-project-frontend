import { useState } from "react";

function HelperFile({ selectedPlaceDetails }) {
  const [showDetails, setShowDetails] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  return (
    <div>
      {!selectedPlaceDetails ? (
        <button className="mt-3 mb-3">
          Click on the marker to view place details
        </button>
      ) : (
        <div>
          <button
            className="mt-3 mb-3"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          {showDetails && (
            <div className="card h-100 p-2">
              <div className="card-body" style={{ color: "#38B6FF" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ color: "#38B6FF" }}>
                    <span className="fw-bold">Name:</span>{" "}
                    {selectedPlaceDetails.name}
                  </li>
                  <li className="list-group-item" style={{ color: "#38B6FF" }}>
                    <span className="fw-bold">Address:</span>{" "}
                    {selectedPlaceDetails.formatted_address}
                  </li>
                  {selectedPlaceDetails.formatted_phone_number && (
                    <li
                      className="list-group-item"
                      style={{ color: "#38B6FF" }}
                    >
                      <span className="fw-bold">Phone: </span>
                      {selectedPlaceDetails.formatted_phone_number}
                    </li>
                  )}
                  <li className="list-group-item" style={{ color: "#38B6FF" }}>
                    <span className="fw-bold">Rating: </span>
                    {selectedPlaceDetails.rating}
                  </li>
                  {selectedPlaceDetails.website && (
                    <li
                      className="list-group-item"
                      style={{ color: "#38B6FF" }}
                    >
                      <span className="fw-bold">Website: </span>
                      {selectedPlaceDetails.website}
                    </li>
                  )}
                  {selectedPlaceDetails.opening_hours && (
                    <>
                      <li
                        className="list-group-item"
                        style={{ color: "#38B6FF" }}
                      >
                        <span className="fw-bold">Opening Hours:</span>
                      </li>

                      {selectedPlaceDetails.opening_hours.weekday_text.map(
                        (hours, index) => (
                          <li
                            className="list-group-item"
                            key={index}
                            style={{ color: "#38B6FF" }}
                          >
                            {hours}
                          </li>
                        )
                      )}
                    </>
                  )}
                  {selectedPlaceDetails.photos &&
                    selectedPlaceDetails.photos.length > 0 && (
                      <li
                        className="list-group-item"
                        style={{ color: "#38B6FF" }}
                      >
                        <img
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${selectedPlaceDetails.photos[0].photo_reference}&key=${API_KEY}`}
                          alt="Place Photo"
                        />
                      </li>
                    )}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HelperFile;
