// import React, { useEffect } from 'react';

// const API_KEY = import.meta.env.VITE_API_KEY;

// function GeolocationComponent() {
//   useEffect(() => {
//     const getGeolocation = async () => {
//       try {
//         // Construct the request URL
//         const apiUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`;

//         // Make a POST request to the Google Geolocation API
//         const response = await fetch(apiUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch geolocation data');
//         }

//         const data = await response.json();
//         console.log('Geolocation data:', data);
//         // Handle the geolocation data as needed
//       } catch (error) {
//         console.error('Error fetching geolocation data:', error);
//       }
//     };

//     getGeolocation();
//   }, []);

//   return (
//     <div>
        
//       Geolocation pages
      
//     </div>
//   );
// }

// export default GeolocationComponent;


// Geolocation popup
import React, { useEffect } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

function GeolocationComponent() {
  useEffect(() => {
    const getGeolocation = async () => {
      try {
        // Ask for permission to access geolocation
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        
        if (permission.state === 'granted') {
          // Geolocation permission granted, proceed with fetching geolocation
          const apiUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_KEY}`;
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error('Failed to fetch geolocation data');
          }

          const data = await response.json();
          console.log('Geolocation data:', data);
          // Handle the geolocation data as needed
        } else if (permission.state === 'prompt') {
          // Geolocation permission prompt required, show popup to ask for permission
          const granted = await new Promise((resolve) => {
            const result = window.confirm('This app wants to use your location. Allow?');
            resolve(result);
          });

          if (granted) {
            // User granted permission, proceed with fetching geolocation
            getGeolocation();
          } else {
            // User denied permission, handle accordingly
            console.log('Geolocation permission denied');
          }
        } else {
          // Geolocation permission denied, handle accordingly
          console.log('Geolocation permission denied');
        }
      } catch (error) {
        console.error('Error fetching geolocation data:', error);
      }
    };

    getGeolocation();
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default GeolocationComponent;

