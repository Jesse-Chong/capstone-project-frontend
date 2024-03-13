import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ShowDetailsPage from "./pages/ShowDetailsPage";
import AppDescription from "./components/AppDescription";
import FoodPage from "./components/FoodPage";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<AppDescription />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<ShowDetailsPage />} />
        <Route path="/food" element={<FoodPage />} />
        {/* <Route path="/foods" element={<IndexPage />} />
          <Route path="/foods/new" element={<NewPage />} />
          <Route path="/foods/:index" element={<ShowPage />} />
          <Route path="/foods/:index/edit" element={<EditPage />} />
          <Route path="*" element={<PageNotFound />} /> */}
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
