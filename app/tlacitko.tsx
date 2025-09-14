"use client";

import { useState } from "react";

export default function GetButton() {
  const [html, setHtml] = useState("");

  async function handleClick() {
    try {
      const res = await fetch("/api/data");
      const text = await res.text();
      setHtml(text);
    } catch (err) {
      console.error("Chyba při načítání:", err);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Get Seznam
      </button>

      {/* výpis staženého HTML */}
      {html && (
        <div className="mt-4 border p-2">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      )}
    </div>
  );
}
