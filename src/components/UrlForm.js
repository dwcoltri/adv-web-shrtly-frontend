import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UrlForm({ onShorten }) {
  const [longUrl, setLongUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [expiration, setExpiration] = useState("never");

  const handleSubmit = (e) => {
    e.preventDefault();
    onShorten({ longUrl, customSlug, expiration });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Paste your long URL..."
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <Input
        placeholder="Custom slug (optional)"
        value={customSlug}
        onChange={(e) => setCustomSlug(e.target.value)}
      />
      <div>
        <label htmlFor="expiration" className="block mb-1 font-medium">
          Expiration
        </label>
        <select
          id="expiration"
          className="w-full border rounded px-3 py-2"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
        >
          <option value="never">Never</option>
          <option value="1d">1 day</option>
          <option value="1w">1 week</option>
          <option value="1m">1 month</option>
          <option value="1y">1 year</option>
        </select>
      </div>
      <Button type="submit" className="w-full">
        Shorten
      </Button>
    </form>
  );
}
