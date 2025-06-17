import React from "react";
import { Card, CardContent } from "./ui/card";
import ResultCard from "./ResultCard";
import UrlForm from "./UrlForm";
import ShrtlyLogo from "../shrtly_logo.svg"; // Import the SVG

export default function Home({ onShorten, shortUrl, clicks }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex justify-center">
          <img src={ShrtlyLogo} alt="shrtly logo" className="h-16" />
        </div>
        <Card><CardContent><UrlForm onShorten={onShorten} /></CardContent></Card>
        {shortUrl && <ResultCard shortUrl={shortUrl} clicks={clicks} />}
      </div>
    </div>
  );
}