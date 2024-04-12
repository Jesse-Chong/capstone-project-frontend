import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../components/Spinner.css";

// const API_KEY = import.meta.env.VITE_API_KEY;

function Geolocation({ setCoordinates }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const permission = await navigator.permissions.query({
          name: "geolocation",
        });

        if (permission.state === "granted") {
          // Geolocation permission granted, proceed with fetching geolocation
          fetchLocation();
        } else if (permission.state === "prompt") {
          // Geolocation permission prompt required, show popup to ask for permission
          const granted = await showPermissionPopup();
          if (granted) {
            // User granted permission, proceed with fetching geolocation
            fetchLocation();
          } else {
            // User denied permission, handle accordingly
            console.log("Geolocation permission denied");
            setIsLoading(false);
            navigate("/");
          }
        } else {
          // Geolocation permission denied, handle accordingly
          console.log("Geolocation permission denied");
          setIsLoading(false);
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
        setIsLoading(false);
        navigate("/");
      }
    };
    const showPermissionPopup = async () => {
      return new Promise((resolve) => {
        const result = window.confirm(
          "This app wants to use your location. Allow?"
        );
        resolve(result);
      });
    };

    const fetchLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setCoordinates({ lat: latitude, lng: longitude });
        setIsLoading(false);
        localStorage.setItem("geolocationAllowed", true);
        navigate("/");
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
        setIsLoading(false);
        localStorage.setItem("geolocationAllowed", false);
        navigate("/");
      }
    };

    getUserLocation();
  }, [setCoordinates]);
  return (
    <div className="spinner">
      {isLoading ? (
        <div className="spinner-inner">
          {/* <img src="/giphy.gif" alt="Loading" height="500" width="500" /> */}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Geolocation;
