// src/components/AchievementCard.jsx
import React from "react";

export default function AchievementCard({ item, unlocked }) {
  return (
    <div className={`p-4 rounded-xl border ${unlocked ? "bg-emerald-50 border-emerald-100" : "bg-white border-slate-200"} shadow-sm flex items-center gap-4`}>
      <div className="text-2xl">{item.icon || "🏅"}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className={`text-sm font-bold ${unlocked ? "text-slate-800" : "text-slate-500"}`}>{item.title}</h4>
          <div className="text-xs font-mono text-slate-400">{item.rewardXP ? `+${item.rewardXP} XP` : ""}</div>
        </div>
        <p className={`text-xs mt-1 ${unlocked ? "text-slate-600" : "text-slate-400"}`}>{item.desc}</p>
      </div>
    </div>
  );
}
