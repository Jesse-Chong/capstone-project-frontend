import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import FoodPage from "./components/FoodPage";
import JobsPage from "./components/JobsPage";
import BankingPage from "./components/BankingPage";
import DMVPage from "./components/DMVPage";
import EducationPage from "./components/EducationPage";
import FaithPage from "./components/FaithPage";
import GovernmentPage from "./components/GovernmentPage";
import HealthcarePage from "./components/HealthcarePage";
import HousingPage from "./components/HousingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import ProtectedRoute from "./pages/ProtectedRoute";
// import Favorite from "./pages/IndexFav";
import HelperFile from "./components/HelperFile";
import FavNavBar from "./pages/FavNavBar";
import Geolocation from "./pages/Geolocation";
import Favorite from "./components/Favorite";
import MyDocs from "./components/MyDocs";
// import IndexFav from "./pages/IndexFav";
// import ShowFav from "./pages/ShowFav";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [languageSelected, setLanguageSelected] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

    // Load coordinates from local storage on initial render
    useEffect(() => {
      const storedCoordinates = JSON.parse(localStorage.getItem('coordinates'));
      if (storedCoordinates) {
        setCoordinates(storedCoordinates);
      }
    }, []);
  
    // Update coordinates in local storage whenever it changes
    useEffect(() => {
      if (coordinates) {
        localStorage.setItem('coordinates', JSON.stringify(coordinates));
      }
    }, [coordinates]);

  return (
    <Router>
      <FavNavBar user={user} setUser={setUser} setToken={setToken} />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route
          path="/geolocation"
          element={
            <Geolocation
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            />
          }
        />
        <Route
          path="/"
          element={
            <LandingPage
              setLanguageSelected={setLanguageSelected}
              setCoordinates={setCoordinates}
            />
          }
        />
        <Route path="/resources" element={<HomePage coordinates={coordinates}/>} />
        <Route path="/details" element={<ShowDetailsPage />} />
        <Route path="/food" element={<FoodPage coordinates={coordinates}/>} />
        <Route path="/jobs" element={<JobsPage coordinates={coordinates}/>} />
        <Route path="/banking" element={<BankingPage coordinates={coordinates}/>} />
        <Route path="/dmv" element={<DMVPage coordinates={coordinates}/>} />
        <Route path="/education" element={<EducationPage coordinates={coordinates}/>} />
        <Route path="/faith" element={<FaithPage coordinates={coordinates}/>} />
        <Route path="/government" element={<GovernmentPage coordinates={coordinates}/>} />
        <Route path="/healthcare" element={<HealthcarePage coordinates={coordinates}/>} />
        <Route path="/housing" element={<HousingPage coordinates={coordinates} />} />
        <Route path="/helperfile" element={<HelperFile />} />
        {/* <Route path="/favoritepractice" element={<FavoritePractice />} /> */}
        {/* <Route path="/favorite/:id" element={<ShowFav />} /> */}

        <Route
          path="/login"
          element={<LoginPage setUser={setUser} setToken={setToken} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage setUser={setUser} setToken={setToken} />}
        />
        {/* <Route path="/users" element={<Users />} /> */}
        <Route
          path="/favorite"
          element={
            <ProtectedRoute
              element={Favorite}
              isAuthenticated={!!user && !!token}
              user={user}
              token={token}
            />
          }
        />
                       <Route
          path="/favorite/mydocs"
          element={
            <ProtectedRoute
              element={MyDocs}
              isAuthenticated={!!user && !!token}
              user={user}
              token={token}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
