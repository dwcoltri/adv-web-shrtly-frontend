import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import StatsPage from "./components/StatsPage";
import AllUrlsPage from "./components/AllUrlsPage";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:3001/api";

function Redirector() {
  const { slug } = useParams();

  React.useEffect(() => {
    window.location.replace(`${API_BASE}/${slug}`);
  }, [slug]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="text-gray-600">Redirecting...</span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Redirector />} />
        <Route path="/:slug/stats" element={<StatsPage />} />
        <Route path="/all" element={<AllUrlsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
