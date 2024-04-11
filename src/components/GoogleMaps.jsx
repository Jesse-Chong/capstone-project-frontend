import HelperFile from "./HelperFile";
import { useTranslation } from "react-i18next";
import { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
  DirectionsService,
  DirectionsRenderer
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px"
};

const libraries = ["places", "routes"];

const GoogleMapsComponent = ({
  places,
  apiKey,
  markerIcon,
  selectedPlace,
  setSelectedPlace,
  selectedPlaceDetails,
  setSelectedPlaceDetails,
  handlePlaceClick,
  coordinates,
  origin,
  showDirectionsButton,
  handleDirectionsClick,
  isLoadingDirections
}) => {
  const { t } = useTranslation();
  const [directionsInfo, setDirectionsInfo] = useState([]);
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [transitMode, setTransitMode] = useState("BUS");

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: libraries
  });

  const center = {
    lat: coordinates.lat,
    lng: coordinates.lng
  };

  const [response, setResponse] = useState(null);
  const count = useRef(0);

  // The guard clause is to stop the api from being called in a endless loop.
  const directionsCallback = useCallback((res) => {
    console.log(count.current);
    console.log("Directions callback response:", res);
    if (res !== null) {
      if (res.status === "OK" && count.current < 2) {
        count.current += 1;
        setResponse(res);
        // Extract the directions information
        const directionsSteps = res.routes[0].legs[0].steps;
        const formattedDirections = directionsSteps.map((step, index) => ({
          key: index,
          // Regex is used to remove the <b> that google uses to bold text and <div> google uses to change font
          instruction: step.instructions.replace(
            /<\/?(?:b|div[^>]*?|wbr\/?)>/g,
            ""
          ),
          distance: step.distance.text,
          duration: step.duration.text
        }));
        console.log(directionsSteps);
        setDirectionsInfo(formattedDirections);
      } else {
        count.current = 0;
        console.log("res: ", res);
      }
    }
  }, []);

  const handleMarkerClick = async (place) => {
    setSelectedPlace(place);
    handlePlaceClick(place);
    console.log("Marker clicked. Place:", place);

    try {
      const response = await fetch(
        `http://localhost:3001/placeDetails?key=${apiKey}&place_id=${place.place_id}`
      );
      console.log("Raw response:", response);
      const data = await response.json();
      console.log("Parsed data:", data);

      // Check if the response is an array and extract the first object
      if (Array.isArray(data) && data.length > 0) {
        setSelectedPlaceDetails(data[0].result);
      } else {
        setSelectedPlaceDetails(null);
      }
    } catch (err) {
      // Handle non-JSON response
      console.log("Error parsing response:", err);
      setSelectedPlaceDetails(null);
    }
  };

  const handleTravelModeChange = (mode) => {
    setTravelMode(mode);
  };

  const handleTransitModeChange = (mode) => {
    setTransitMode(mode);
  };

  const handleCloseInfoWindow = () => {
    setSelectedPlace(null);
  };

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  return isLoaded ? (
    <>
      <div>
        <label htmlFor="travelMode">{t("map.travel_mode")}:</label>
        <select
          id="travelMode"
          value={travelMode}
          onChange={(e) => handleTravelModeChange(e.target.value)}
        >
          <option value="DRIVING">{t("map.driving")}</option>
          <option value="TRANSIT">{t("map.transit")}</option>
          <option value="BICYCLING">{t("map.bicycling")}</option>
          <option value="WALKING">{t("map.walking")}</option>
        </select>
      </div>
      {travelMode === "TRANSIT" && (
        <div>
          <label htmlFor="transitMode">{t("map.transit_mode")}:</label>
          <select
            id="transitMode"
            value={transitMode}
            onChange={(e) => handleTransitModeChange(e.target.value)}
          >
            <option value="BUS">{t("map.bus")}</option>
            <option value="SUBWAY">{t("map.subway")}</option>
            <option value="TRAIN">{t("map.train")}</option>
            <option value="TRAM">{t("map.tram")}</option>
            <option value="RAIL">{t("map.rail")}</option>
          </select>
        </div>
      )}

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {places.map((place) => (
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng
            }}
            title={place.name}
            onClick={() => handleMarkerClick(place)}
            options={{ icon: markerIcon }}
          />
        ))}
        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.location.lat,
              lng: selectedPlace.geometry.location.lng
            }}
            onCloseClick={handleCloseInfoWindow}
          >
            <div>
              {selectedPlaceDetails ? (
                <>
                  <p>
                    <span className="fw-bold border fs-6">
                      {" "}
                      {t("infoWindow.name")}:
                    </span>{" "}
                    {selectedPlaceDetails.name}
                  </p>
                  <p>
                    <span className="fw-bold border fs-6">
                      {" "}
                      {t("infoWindow.address")}:
                    </span>
                    {selectedPlaceDetails.formatted_address}
                  </p>
                  {selectedPlaceDetails.formatted_phone_number && (
                    <p>
                      <span className="fw-bold fs-6">
                        {" "}
                        {t("infoWindow.phone")}:
                      </span>
                      {selectedPlaceDetails.formatted_phone_number}
                    </p>
                  )}
                  <p>
                    <span className="fw-bold fs-6">
                      {t("infoWindow.rating")}:
                    </span>
                    {selectedPlaceDetails.rating}
                  </p>
                  {selectedPlaceDetails.website && (
                    <p>
                      <span className="fw-bold fs-6">
                        {t("infoWindow.website")}:{" "}
                      </span>{" "}
                      {selectedPlaceDetails.website}
                    </p>
                  )}

                  {selectedPlaceDetails.opening_hours && (
                    <>
                      <p>
                        <span className="fw-bold fs-6">
                          {t("infoWindow.openingHours")}:
                        </span>
                      </p>
                      <ul>
                        {selectedPlaceDetails.opening_hours.weekday_text.map(
                          (hours, index) => (
                            <li key={index}>{hours}</li>
                          )
                        )}
                      </ul>
                    </>
                  )}

                  {selectedPlaceDetails.photos &&
                    selectedPlaceDetails.photos.length > 0 && (
                      <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${selectedPlaceDetails.photos[0].photo_reference}&key=${apiKey}`}
                        alt="Place Photo"
                      />
                    )}
                </>
              ) : (
                <p>{t("infoWindow.noDetails")}</p>
              )}
              {showDirectionsButton && (
                <button
                  onClick={handleDirectionsClick}
                  disabled={isLoadingDirections}
                >
                  {isLoadingDirections
                    ? "Loading Directions..."
                    : "Get Directions"}
                </button>
              )}
            </div>
          </InfoWindow>
        )}
        {origin && selectedPlace && (
          <DirectionsService
            options={{
              origin: `${coordinates.lat},${coordinates.lng}`,
              destination: `${selectedPlace.geometry.location.lat},${selectedPlace.geometry.location.lng}`,
              travelMode: travelMode,
              provideRouteAlternatives: true
            }}
            callback={directionsCallback}
          />
        )}
        {response && <DirectionsRenderer options={{ directions: response }} />}
      </GoogleMap>
      {directionsInfo.length > 0 && (
        <div>
          <h3>Directions:</h3>
          <ol>
            {directionsInfo.map((direction) => (
              <li key={direction.key}>
                <div>{direction.instruction}</div>
                <div>Distance: {direction.distance}</div>
                <div>Duration: {direction.duration}</div>
              </li>
            ))}
          </ol>
        </div>
      )}
      <HelperFile
        selectedPlace={selectedPlace}
        selectedPlaceDetails={selectedPlaceDetails}
      />
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default GoogleMapsComponent;
