import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { Card, CardContent } from "./ui/card";
import ShrtlyLogo from "../shrtly_logo.svg";

export default function StatsPage() {
  const { slug } = useParams();
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE =
    process.env.REACT_APP_API_BASE || "http://localhost:3001/api";

  const APP_URL = process.env.REACT_APP_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${API_BASE}/stats/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setStats(data);
      })
      .catch(() => setError("Failed to fetch stats"));
  }, [slug]);

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
        <Card>
          <CardContent>
            {error && <div className="p-6 text-red-600">{error}</div>}
            {!error && !stats && <div className="p-6">Loading...</div>}
            {!error && stats && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Stats for <span className="text-blue-600">{slug}</span>
                </h2>
                <p>
                  <strong>Original URL: </strong>{" "}
                  <a
                    href={stats.originalUrl}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {stats.originalUrl}
                  </a>
                </p>
                <p>
                  <strong>Short URL: </strong>
                  <a
                    href={`${APP_URL}/${stats.slug}`}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`${APP_URL}/${stats.slug}`}
                  </a>
                </p>
                <p>
                  <strong>Clicks:</strong> {stats.clicks}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(stats.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Expires At:</strong>{" "}
                  {stats.expiresAt
                    ? new Date(stats.expiresAt).toLocaleString()
                    : "Never"}
                </p>
                <p>
                  <strong>Expired:</strong> {stats.expired ? "Yes" : "No"}
                </p>
                <div className="flex flex-col items-center">
                  <strong>QR Code:</strong>
                  <QRCodeCanvas value={`${APP_URL}/${stats.slug}`} size={128} />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
