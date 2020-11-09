import React from "react";

import "../admin.css";

export default function Notification({ error, setError }) {
  setTimeout(() => {
    setError("");
  }, 3200);

  return (
    <div className="notification">
      <h2>{error}</h2>
    </div>
  );
}
