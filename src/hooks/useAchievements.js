// src/hooks/useAchievements.js
import { useEffect, useState, useCallback } from "react";
import { ACHIEVEMENTS } from "../utils/achievements";

const STORAGE_KEY = "nm_achievements_v1";

export function useAchievements({ plan, completedModules, attemptsLog, lastQuiz, justReset }) {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { unlocked: [], xp: 0, log: [] };
    } catch {
      return { unlocked: [], xp: 0, log: [] };
    }
  });

  const stateSnapshot = { plan, completedModules, attemptsLog, lastQuiz, justReset };

  const checkAll = useCallback(() => {
    const newUnlocked = [...unlocked.unlocked];
    let newXP = unlocked.xp;
    const newlyGained = [];

    ACHIEVEMENTS.forEach(a => {
      const already = newUnlocked.includes(a.id);
      try {
        const ok = a.condition(stateSnapshot);
        if (ok && !already) {
          newUnlocked.push(a.id);
          newXP += (a.rewardXP || 0);
          newlyGained.push(a.id);
        }
      } catch (e) {
        // ignore bad condition
      }
    });

    if (newlyGained.length) {
      const updated = { unlocked: newUnlocked, xp: newXP, log: (unlocked.log || []).concat(newlyGained.map(id => ({ id, at: Date.now() }))) };
      setUnlocked(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return newlyGained;
    }

    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan, completedModules, attemptsLog, lastQuiz, justReset, unlocked]);

  useEffect(() => {
    checkAll();
  }, [checkAll]);

  const resetAchievements = () => {
    const empty = { unlocked: [], xp: 0, log: [] };
    setUnlocked(empty);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(empty));
  };

  return {
    unlocked: unlocked.unlocked,
    xp: unlocked.xp,
    log: unlocked.log || [],
    checkAll,
    resetAchievements
  };
}
