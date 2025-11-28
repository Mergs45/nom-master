// src/components/SectionTitle.jsx
import React from "react";

export default function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-2 mb-6 text-slate-800 border-b border-slate-100 pb-2">
      <div className="p-2 bg-slate-100 text-slate-700 rounded-lg">{icon}</div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
