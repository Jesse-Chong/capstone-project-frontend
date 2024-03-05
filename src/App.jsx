import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import ShowDetailsPage from "./pages/ShowDetailsPage";



function App() {
  return (
<Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details" element={<ShowDetailsPage />} />
          {/* <Route path="/foods" element={<IndexPage />} />
          <Route path="/foods/new" element={<NewPage />} />
          <Route path="/foods/:index" element={<ShowPage />} />
          <Route path="/foods/:index/edit" element={<EditPage />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
