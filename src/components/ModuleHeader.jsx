// src/components/ModuleHeader.jsx
import React from "react";

export default function ModuleHeader({ title, subtitle, code, cover }) {
  return (
    <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden shadow border border-slate-200 bg-slate-900 text-white">

      {/* Background image */}
      <img
        src={cover}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
      />

      {/* Overlay dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      {/* Content */}
      <div className="absolute bottom-5 left-6">
        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded backdrop-blur">
          {code}
        </span>

        <h1 className="text-3xl md:text-4xl font-black mt-2 drop-shadow-lg">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm md:text-base opacity-90 max-w-lg mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
