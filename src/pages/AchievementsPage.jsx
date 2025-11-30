// src/pages/AchievementsPage.jsx
import React, { useState, useEffect } from "react";
import { ACHIEVEMENTS } from "../utils/achievements";
import AchievementCard from "../components/AchievementCard";
import Confetti from "../components/confetti";
import "./achievements.css";

export default function AchievementsPage({ unlockedIds, xp, onClose }) {
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (unlockedIds?.length) {
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 1800);
      return () => clearTimeout(t);
    }
  }, [unlockedIds]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <Confetti show={showConfetti} />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black">Logros & XP</h3>
          <div className="text-sm text-slate-500 font-bold">{xp} XP</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ACHIEVEMENTS.map(a => (
            <AchievementCard key={a.id} item={a} unlocked={unlockedIds.includes(a.id)} />
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border bg-white hover:bg-slate-50">Cerrar</button>
        </div>
      </div>
    </div>
  );
}
