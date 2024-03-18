import "./App.css";
import { useState } from "react";
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
import Users from "./pages/Users";

function App() {
   const [user, setUser] = useState(null)
   const [token, setToken] = useState(null)


  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<ShowDetailsPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/banking" element={<BankingPage />} />
        <Route path="/dmv" element={<DMVPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/faith" element={<FaithPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/housing" element={<HousingPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} setToken={setToken} />} />
        <Route path="/signup" element={<SignUpPage setUser={setUser} setToken={setToken}/>} />
        <Route path="/users" element={<Users />} />
        {/* <Route 
         path="/users"
         element={
         <ProtectedRoute
         element={user}
         isAuthenticated={!!user && !!token}
         user={user}
         token={token}
          />
         }
         /> */}
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
