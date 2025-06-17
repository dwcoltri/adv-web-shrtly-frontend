import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Home from "./components/Home";

// Simulate a backend slug-to-URL mapping for demo purposes
const slugMap = {};

function Redirector() {
  const { slug } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Simulate fetching the long URL from a backend
    const longUrl = slugMap[slug];
    if (longUrl) {
      window.location.replace(longUrl);
    } else {
      // If not found, redirect to home or show an error
      navigate("/", { replace: true });
    }
  }, [slug, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="text-gray-600">Redirecting...</span>
    </div>
  );
}

function App() {
  const [shortUrl, setShortUrl] = useState("");
  const [clicks, setClicks] = useState(null);

  const handleShorten = ({ longUrl, customSlug, expiration }) => {
    const slug = customSlug || Math.random().toString(36).substr(2, 6);
    slugMap[slug] = longUrl; // Store mapping in-memory for demo
    setShortUrl(`https://shrtly.app/${slug}`);
    setClicks(Math.floor(Math.random() * 100));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onShorten={handleShorten} shortUrl={shortUrl} clicks={clicks} />} />
        <Route path="/:slug" element={<Redirector />} />
      </Routes>
    </Router>
  );
}

export default App;