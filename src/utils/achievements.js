// src/utils/achievements.js
export const ACHIEVEMENTS = [
  {
    id: "first-module",
    title: "Primer paso",
    desc: "Completaste tu primer módulo.",
    icon: "🎉",
    condition: (state) => state.completedModules && state.completedModules.length >= 1,
    rewardXP: 50
  },
  {
    id: "level-1-complete",
    title: "Nivel 1 desbloqueado",
    desc: "Completaste todo el Nivel 1.",
    icon: "🔓",
    condition: (state) => {
      const lvl1 = state.plan?.find(l => l.level === 1);
      return lvl1 && lvl1.modules.every(m => state.completedModules.includes(m.id));
    },
    rewardXP: 150
  },
  {
    id: "perfect-quiz",
    title: "Sin fallos",
    desc: "Terminaste un quiz con 100% a la primera.",
    icon: "💯",
    condition: (state) => state.lastQuiz && state.lastQuiz.perfectFirstTry === true,
    rewardXP: 120
  },
  {
    id: "three-in-row",
    title: "Racha 3",
    desc: "Completaste 3 módulos seguidos sin fallar el quiz.",
    icon: "🔥",
    condition: (state) => {
      const completed = state.completedModules || [];
      if (completed.length < 3) return false;
      // simple heuristic: check last 3 recordedAttempts with score >= fullScore
      const lastAttempts = state.attemptsLog?.slice(-3) || [];
      return lastAttempts.length === 3 && lastAttempts.every(a => a.score >= a.total);
    },
    rewardXP: 200
  },
  {
    id: "reset-progress",
    title: "Reinició y aprendió",
    desc: "Reiniciaste el progreso (útil para testing).",
    icon: "♻️",
    condition: (state) => state.justReset === true,
    rewardXP: 0
  }
];
