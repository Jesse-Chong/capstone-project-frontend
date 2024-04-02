import React, { useEffect } from 'react';
import { useState } from 'react';

// const API_KEY = import.meta.env.VITE_API_KEY;

function Geolocation() {

    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');

    useEffect(() => {
        const getUserLocation = async () => {
            try {
                const permission = await navigator.permissions.query({ name: 'geolocation' });

                if (permission.state === 'granted') {
                    // Geolocation permission granted, proceed with fetching geolocation
                    fetchLocation();
                } else if (permission.state === 'prompt') {
                    // Geolocation permission prompt required, show popup to ask for permission
                    const granted = await showPermissionPopup();

                    if (granted) {
                        // User granted permission, proceed with fetching geolocation
                        fetchLocation();
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
        const showPermissionPopup = async () => {
            return new Promise(resolve => {
                const result = window.confirm('This app wants to use your location. Allow?');
                resolve(result);
            });
        };

        const fetchLocation = async () => {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const { latitude, longitude } = position.coords;

                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);
                setLat(latitude)
                setLong(longitude)

            } catch (error) {
                console.error('Error fetching geolocation data:', error);
            }
        };

        getUserLocation();
    }, []);

    return (
        <div>
            <div>
                <h1>Geolocation</h1>
                <p>Lat: {lat}</p>
                <p>Long: {long}</p>
            </div>
        </div>
    );
}

export default Geolocation;
