// src/components/Confetti.jsx
import React from "react";
import "./confetti.css"; // crear abajo

export default function Confetti({ show = false }) {
  if (!show) return null;
  return (
    <div className="confetti-root" aria-hidden>
      {[...Array(30)].map((_, i) => <i key={i} className={`confetti confetti-${i % 6}`} />)}
    </div>
  );
}
