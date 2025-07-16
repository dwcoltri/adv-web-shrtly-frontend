import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import ShrtlyLogo from "../shrtly_logo.svg";
import { useNavigate } from "react-router-dom";

export default function AllUrlsPage() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_BASE || "http://localhost:3001/api"}/all`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setUrls(data);
      })
      .catch(() => setError("Failed to fetch URLs"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
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
            <h2 className="text-2xl font-bold mb-4 text-center">
              All Shortened URLs
            </h2>
            {error && <div className="p-6 text-red-600">{error}</div>}
            {!error && urls.length === 0 && (
              <div className="p-6">No URLs found.</div>
            )}
            {!error && urls.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full border bg-white rounded">
                  <thead>
                    <tr>
                      <th className="border px-2 py-1">Slug</th>
                      <th className="border px-2 py-1">Original URL</th>
                      <th className="border px-2 py-1">Clicks</th>
                      <th className="border px-2 py-1">Created</th>
                      <th className="border px-2 py-1">Expires At</th>{" "}
                      {/* Added */}
                    </tr>
                  </thead>
                  <tbody>
                    {urls.map((url) => (
                      <tr key={url.slug} className="hover:bg-gray-50">
                        <td className="border px-2 py-1 text-blue-600 underline">
                          <a href={`/${url.slug}/stats`}>{url.slug}</a>
                        </td>
                        <td className="border px-2 py-1">
                          <a
                            href={url.originalUrl}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {url.originalUrl}
                          </a>
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {url.clicks}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {new Date(url.createdAt).toLocaleString()}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {url.expiresAt
                            ? new Date(url.expiresAt).toLocaleString()
                            : "Never"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
