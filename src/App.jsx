import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import AppDescription from "./components/AppDescription";
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

function App() {
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
        <Route path="/dmv" element={<DMVPage/>} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/faith" element={<FaithPage/>} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/housing" element={<HousingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
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
