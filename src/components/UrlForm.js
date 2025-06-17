import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UrlForm({ onShorten }) {
  const [longUrl, setLongUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [expiration, setExpiration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onShorten({ longUrl, customSlug, expiration }); // Stub for future API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Paste your long URL..." value={longUrl} onChange={e => setLongUrl(e.target.value)} />
      <Input placeholder="Custom slug (optional)" value={customSlug} onChange={e => setCustomSlug(e.target.value)} />
      <Input placeholder="Expiration (e.g. 1d, 1w)" value={expiration} onChange={e => setExpiration(e.target.value)} />
      <Button type="submit" className="w-full">Shorten</Button>
    </form>
  );
}
