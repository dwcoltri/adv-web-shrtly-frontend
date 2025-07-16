import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import UrlForm from "./UrlForm";
import ShrtlyLogo from "../shrtly_logo.svg";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:3001/api";

export default function Home() {
  const navigate = useNavigate();

  const handleShorten = async ({ longUrl, customSlug, expiration }) => {
    try {
      const res = await fetch(`${API_BASE}/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: longUrl,
          customSlug: customSlug || undefined,
          expiration: expiration || undefined,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        navigate(`/${data.slug}/stats`);
      } else {
        alert(data.error || "Failed to shorten URL");
      }
    } catch (err) {
      alert("Network error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex justify-center">
          <img
            src={ShrtlyLogo}
            alt="shrtly logo"
            className="h-16 cursor-pointer"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="flex justify-center mb-4">
          <a
            href="/all"
            className="text-blue-600 underline text-lg hover:text-blue-800 transition"
          >
            View All Shortened URLs
          </a>
        </div>
        <Card>
          <CardContent>
            <UrlForm onShorten={handleShorten} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
