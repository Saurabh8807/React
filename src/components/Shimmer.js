import React from "react";
import "./Shimmer.css"; // Add this file for CSS

export default function Shimmer() {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img" />
            <div className="shimmer-line shimmer-title" />
            <div className="shimmer-line shimmer-subtitle" />
          </div>
        ))}
    </div>
  );
}
