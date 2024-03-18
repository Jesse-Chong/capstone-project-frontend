function HelperFile({ selectedPlaceDetails }) {
  const API_KEY = import.meta.env.VITE_API_KEY;

  return (
    <div>
      <div>
        {selectedPlaceDetails ? (
          <>
            <p>Name: {selectedPlaceDetails.name}</p>
            <p>Address: {selectedPlaceDetails.formatted_address}</p>
            {selectedPlaceDetails.formatted_phone_number && (
              <p>Phone: {selectedPlaceDetails.formatted_phone_number}</p>
            )}
            <p>Rating: {selectedPlaceDetails.rating}</p>
            {selectedPlaceDetails.website && (
              <p>Website: {selectedPlaceDetails.website}</p>
            )}
            {selectedPlaceDetails.opening_hours && (
              <>
                <p>Opening Hours:</p>
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
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${selectedPlaceDetails.photos[0].photo_reference}&key=${API_KEY}`}
                  alt="Place Photo"
                />
              )}{" "}
            <br />
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default HelperFile;
