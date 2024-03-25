function HelperFile({ selectedPlaceDetails }) {
  const API_KEY = import.meta.env.VITE_API_KEY;

  return (
    <div>
      <div className="card">
        {selectedPlaceDetails ? (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="fw-bold">Name:</span> {selectedPlaceDetails.name}
            </li>
            <li className="list-group-item">
              <span className="fw-bold">Address:</span>{" "}
              {selectedPlaceDetails.formatted_address}
            </li>
            {selectedPlaceDetails.formatted_phone_number && (
              <li className="list-group-item">
                {" "}
                <span className="fw-bold">Phone: </span>
                {selectedPlaceDetails.formatted_phone_number}
              </li>
            )}
            <li className="list-group-item">
              {" "}
              <span className="fw-bold">Rating: </span>
              {selectedPlaceDetails.rating}
            </li>
            {selectedPlaceDetails.website && (
              <li className="list-group-item">
                <span className="fw-bold">Website: </span>
                {selectedPlaceDetails.website}
              </li>
            )}
            {selectedPlaceDetails.opening_hours && (
              <>
                <li className="list-group-item">
                  <span className="fw-bold">Opening Hours:</span>
                </li>

                {selectedPlaceDetails.opening_hours.weekday_text.map(
                  (hours, index) => (
                    <li className="list-group-item" key={index}>
                      {hours}
                    </li>
                  )
                )}
              </>
            )}
            {selectedPlaceDetails.photos &&
              selectedPlaceDetails.photos.length > 0 && (
                <li className="list-group-item">
                  <img
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${selectedPlaceDetails.photos[0].photo_reference}&key=${API_KEY}`}
                    alt="Place Photo"
                  />
                </li>
              )}{" "}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default HelperFile;
