import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function ResultCard({ shortUrl, clicks }) {
  return (
    <Card className="text-center">
      <CardContent className="space-y-4">
        <p className="text-lg font-semibold text-gray-800">{shortUrl}</p>
        <QRCodeCanvas value={shortUrl} size={128} />
        <p className="text-gray-500 text-sm">Clicks: {clicks}</p>
        <Button onClick={() => navigator.clipboard.writeText(shortUrl)} className="w-full">Copy</Button>
      </CardContent>
    </Card>
  );
}
