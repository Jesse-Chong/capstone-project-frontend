import { useState } from "react";
import { useTranslation } from "react-i18next";

function HelperFile({ selectedPlaceDetails }) {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  return (
    <div>
      {!selectedPlaceDetails ? (
        <button className="mt-3 mb-3">
          {t("all.click_on_the_marker_to_view_place_details")}
        </button>
      ) : (
        <div>
          <button
            className="mt-3 mb-3"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? t("map.show_details") : t("map.hide_details")}
          </button>
          {showDetails && (
            <div className="card h-100 p-2">
              <div className="card-body" style={{ color: "#38B6FF" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={{ color: "#38B6FF" }}>
                    <span className="fw-bold">{t("infoWindow.name")}:</span>{" "}
                    {selectedPlaceDetails.name}
                  </li>
                  <li className="list-group-item" style={{ color: "#38B6FF" }}>
                    <span className="fw-bold">{t("infoWindow.address")}:</span>{" "}
                    {selectedPlaceDetails.formatted_address}
                  </li>
                  {selectedPlaceDetails.formatted_phone_number && (
                    <li
                      className="list-group-item"
                      style={{ color: "#38B6FF" }}
                    >
                      <span className="fw-bold">{t("infoWindow.phone")}: </span>
                      {selectedPlaceDetails.formatted_phone_number}
                    </li>
                  )}
                  <li className="list-group-item" style={{ color: "#38B6FF" }}>
                    <span className="fw-bold">{t("infoWindow.rating")}: </span>
                    {selectedPlaceDetails.rating}
                  </li>
                  {selectedPlaceDetails.website && (
                    <li
                      className="list-group-item"
                      style={{ color: "#38B6FF" }}
                    >
                      <span className="fw-bold">{t("infoWindow.website")}: </span>
                      {selectedPlaceDetails.website}
                    </li>
                  )}
                  {selectedPlaceDetails.opening_hours && (
                    <>
                      <li
                        className="list-group-item"
                        style={{ color: "#38B6FF" }}
                      >
                        <span className="fw-bold">{t("infoWindow.openingHours")}:</span>
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
                  {/* {selectedPlaceDetails.photos &&
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
                    )} */}
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
