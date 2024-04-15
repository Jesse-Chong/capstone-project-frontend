import HelperFile from "./HelperFile";
import { useTranslation } from "react-i18next";
import { useState, useRef, useCallback } from "react";

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
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
  directions,
  setDirections,
  isLoadingDirections,
}) => {
  // console.log("Directions prop in GoogleMapsComponent:", directions);
  const { t } = useTranslation();
  const [directionsInfo, setDirectionsInfo] = useState([]);
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [transitMode, setTransitMode] = useState("BUS");

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  const center = {
    lat: coordinates.lat,
    lng: coordinates.lng,
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
        const formattedDirections = directionsSteps.map((step, index) => {
          let instruction = step.instructions.replace(
            /<\/?(?:b|div[^>]*?|wbr\/?)>/g,
            ""
          );

          // Replace direction phrases with translation keys
          instruction = instruction
            .replace(/Continue onto/g, t("directions.continue_onto"))
            .replace(
              /Destination will be on the left/g,
              t("directions.destination_will_be_on_the_left")
            )
            .replace(
              /Destination will be on the right/g,
              t("directions.destination_will_be_on_the_right")
            )
            .replace(/Head east/g, t("directions.head_east"))
            .replace(/Head east on/g, t("directions.head_east_on"))
            .replace(/Head north/g, t("directions.head_north"))
            .replace(/Head north on/g, t("directions.head_north_on"))
            .replace(/Head south/g, t("directions.head_south"))
            .replace(/Head south on/g, t("directions.head_south_on"))
            .replace(/Head west/g, t("directions.head_west"))
            .replace(/Head west on/g, t("directions.head_west_on"))
            .replace(/Keep left/g, t("directions.keep_left"))
            .replace(/Keep right/g, t("directions.keep_right"))
            .replace(/Merge onto/g, t("directions.merge_onto"))
            .replace(/To stay on/g, t("directions.to_stay_on"))
            .replace(/towards/g, t("directions.towards"))
            .replace(/Turn left at the/g, t("directions.turn_left_at_the"))
            .replace(/Turn left onto/g, t("directions.turn_left_onto"))
            .replace(/Turn left to merge/g, t("directions.turn_left_to_merge"))
            .replace(
              /Turn left to merge onto/g,
              "directions.turn_left_to_merge_onto"
            )
            .replace(/Turn left towards/g, t("directions.turn_left_towards"))
            .replace(/Turn right at the/g, t("directions.turn_right_at_the"))
            .replace(/Turn right onto/g, t("directions.turn_right_onto"))
            .replace(
              /Turn right to merge/g,
              t("directions.turn_right_to_merge")
            )
            .replace(
              /Turn right to merge onto/g,
              t("directions.turn_right_to_merge_onto")
            )
            .replace(/Turn right towards/g, t("directions.turn_right_towards"))
            .replace(/toward/g, t("directions.toward"))
            .replace(/Head north toward/g, t("directions.head_north_toward"))
            .replace(/Turn right toward/g, t("directions.turn_right_toward"))
            .replace(
              /Turn right to merge/g,
              t("directions.turn_right_to_merge")
            )
            .replace(/Keep right to stay/g, t("directions.keep_right_to_stay"))
            .replace(/Keep left to stay/g, t("directions.keep_left_to_stay"))
            .replace(
              /Keep left to continue on/g,
              t("directions.keep_left_to_continue_on")
            )
            .replace(
              /Keep right to continue on/g,
              t("directions.keep_right_to_continue_on")
            )
            .replace(/follow signs/g, t("directions.follow_signs"))
            .replace(/exit/g, t("directions.exit"))
            .replace(
              /Use any lane to take/g,
              t("directions.use_any_lane_to_take")
            )
            .replace(/continue on/g, t("directions.continue_on"))
            .replace(/Drive to/g, t("directions.drive_to"))
            .replace(/Slight left onto/g, t("directions.slight_left_onto"))
            .replace(/Slight right onto/g, t("directions.slight_right_onto"))
            .replace(/continue straight/g, t("directions.continue_straight"))
            .replace(
              /continue straight onto/g,
              t("directions.continue_straight_onto")
            )
            .replace(/Take the ramp to/g, t("directions.Take_the_ramp_to"))
            .replace(/Use the right/g, t("directions.use_the_right"))
            .replace(
              /lanes to merge onto/g,
              t("directions.lanes_to_merge_onto")
            )
            .replace(/follow/g, t("directions.follow"))
            .replace(
              /turns slightly right and becomes/g,
              t("directions.turns_slightly_right_and_becomes")
            )
            .replace(
              /turns slightly left and becomes/g,
              t("directions.turns_slightly_left_and_becomes")
            )
            .replace(/Take exit/g, t("directions.take_exit"));
          return {
            key: index,
            instruction,
            distance: step.distance.text,
            duration: step.duration.text,
          };
        });
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
      {/* <div>
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
      )} */}

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="btn-group">
            <button
              type="button"
              className="button dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("map.travel_mode")}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item text-center"
                  onClick={() => handleTravelModeChange("DRIVING")}
                >
                  {t("map.driving")}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item text-center"
                  onClick={() => handleTravelModeChange("TRANSIT")}
                >
                  {t("map.transit")}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item text-center"
                  onClick={() => handleTravelModeChange("BICYCLING")}
                >
                  {t("map.bicycling")}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item text-center"
                  onClick={() => handleTravelModeChange("WALKING")}
                >
                  {t("map.walking")}
                </button>
              </li>
            </ul>
          </div>
        </div>
        {travelMode === "TRANSIT" && (
          <div className="col-md-6 mb-3">
            <div className="btn-group">
              <button
                type="button"
                className="button dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("map.transit_mode")}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item text-center"
                    onClick={() => handleTransitModeChange("BUS")}
                  >
                    {t("map.bus")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-center"
                    onClick={() => handleTransitModeChange("SUBWAY")}
                  >
                    {t("map.subway")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-center"
                    onClick={() => handleTransitModeChange("TRAIN")}
                  >
                    {t("map.train")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-center"
                    onClick={() => handleTransitModeChange("TRAM")}
                  >
                    {t("map.tram")}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-center"
                    onClick={() => handleTransitModeChange("RAIL")}
                  >
                    {t("map.rail")}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {places.map((place) => (
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
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
              lng: selectedPlace.geometry.location.lng,
            }}
            onCloseClick={handleCloseInfoWindow}
          >
            <div>
              {selectedPlaceDetails ? (
                <>
                  <p>
                    <span className="fw-bold fs-6">
                      {" "}
                      {t("infoWindow.name")}:
                    </span>{" "}
                    {selectedPlaceDetails.name}
                  </p>
                  <p>
                    <span className="fw-bold fs-6">
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

                  {/* {selectedPlaceDetails.photos &&
                    selectedPlaceDetails.photos.length > 0 && (
                      <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${selectedPlaceDetails.photos[0].photo_reference}&key=${apiKey}`}
                        alt="Place Photo"
                      />
                    )} */}
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
              origin: `${origin.lat},${origin.lng}`,
              destination: `${selectedPlace.geometry.location.lat},${selectedPlace.geometry.location.lng}`,
              travelMode: travelMode,
              provideRouteAlternatives: true,
            }}
            callback={directionsCallback}
          />
        )}
        {response && <DirectionsRenderer options={{ directions: response }} />}
      </GoogleMap>
      {directionsInfo.length > 0 && (
        <div>
          <h3 className="mt-3" style={{ color: "#38B6FF" }}>
            Directions:
          </h3>
          {/* <ol> */}
          {directionsInfo.map((direction, index) => (
            // <li key={direction.key}>
            <div className="card h-100 p-2">
              <div className="card-body" style={{ color: "#38B6FF" }}>
                <p>
                  <span className="fw-bold">Step{index + 1}</span> -{" "}
                  {direction.instruction}
                </p>
                <p>
                  <span className="fw-bold">Distance:</span>{" "}
                  {direction.distance}
                </p>
                <p>
                  <span className="fw-bold">Duration:</span>{" "}
                  {direction.duration}
                </p>
              </div>
            </div>
            // </li>
          ))}
          {/* </ol> */}
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
