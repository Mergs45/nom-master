// src/App.jsx
import React, { useEffect, useState } from "react";
import { Shield, Menu, X, FileText, Layout, Lock, ChevronRight } from "lucide-react";
import { studyPlanLevels as basePlan } from "./studyPlan";

/* ==== TUS MÓDULOS YA EXISTENTES ==== */
import Nom017Module from "./modules/Nom17Module";
import Nom030Module from "./modules/Nom30Module";
import Nom19Module from "./modules/Nom19Module";
import Nom021Module from "./modules/Nom21Module";
import Nom001Module from "./modules/Nom001Module";

/* ==== NO EXISTEN AÚN — SE QUEDAN COMENTADOS ==== */
// import Nom002Module from "./modules/Nom002Module";
// import Nom026Module from "./modules/Nom026Module";
// import Nom009Module from "./modules/Nom009Module";
// import Nom029Module from "./modules/Nom029Module";
// import Nom004Module from "./modules/Nom004Module";
// import Nom006Module from "./modules/Nom006Module";
// import Nom027Module from "./modules/Nom027Module";
// import Nom036Module from "./modules/Nom036Module";
// import Nom025Module from "./modules/Nom025Module";
// import Nom113Module from "./modules/Nom113Module";
// import Nom115Module from "./modules/Nom115Module";

/* ==== ACHIEVEMENTS ==== */
import { useAchievements } from "./hooks/useAchievements";
import AchievementsPage from "./pages/AchievementsPage";

/* ============================================ */

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default function App() {
  const [studyPlanLevels, setStudyPlanLevels] = useState(() => {
    const raw = localStorage.getItem("studyPlanLevels");
    if (raw) {
      try { return JSON.parse(raw); } catch {}
    }
    return deepClone(basePlan);
  });

  const [completed, setCompleted] = useState(() => {
    const raw = localStorage.getItem("completedModules");
    return raw ? JSON.parse(raw) : [];
  });

  const [activeTab, setActiveTab] = useState("dashboard");
  const [fadeKey, setFadeKey] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("studyPlanLevels", JSON.stringify(studyPlanLevels));
  }, [studyPlanLevels]);

  useEffect(() => {
    localStorage.setItem("completedModules", JSON.stringify(completed));
  }, [completed]);

  const totalModules = studyPlanLevels.reduce((acc, l) => acc + l.modules.length, 0);
  const doneCount = completed.length;

  const [unlockMessage, setUnlockMessage] = useState(null);

  /* ===== LOGS DE EXÁMENES ===== */
  const [attemptsLog, setAttemptsLog] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("attemptsLog")) || [];
    } catch { return []; }
  });

  const [lastQuiz, setLastQuiz] = useState(null);
  const [justReset, setJustReset] = useState(false);

  const { unlocked, xp, checkAll, resetAchievements } = useAchievements({
    plan: studyPlanLevels,
    completedModules: completed,
    attemptsLog,
    lastQuiz,
    justReset
  });

  const [showAchievements, setShowAchievements] = useState(false);

  /* ====================================================
      MARCAR COMPLETADO + DESBLOQUEO DE NIVELES
  ==================================================== */
  const markCompleted = (moduleId) => {
    if (!completed.includes(moduleId)) {
      setCompleted(prev => [...prev, moduleId]);
    }

    setStudyPlanLevels(prev => {
      const clone = deepClone(prev);

      let levelIndex = -1;
      for (let i = 0; i < clone.length; i++) {
        if (clone[i].modules.some(m => m.id === moduleId)) {
          levelIndex = i;
          break;
        }
      }

      if (levelIndex === -1) return clone;

      const currentLevel = clone[levelIndex];
      const levelCompleted = currentLevel.modules.every(m =>
        completed.includes(m.id) || m.id === moduleId
      );

      if (levelCompleted && clone[levelIndex + 1]) {
        clone[levelIndex + 1].modules.forEach(mod => { mod.locked = false; });

        setUnlockMessage(`Nivel ${levelIndex + 2} desbloqueado`);
        setTimeout(() => setUnlockMessage(null), 3000);
      }

      setTimeout(() => checkAll(), 120);

      return clone;
    });
  };

  /* ====================================================
      ABRIR MÓDULO (RESPETA locked)
  ==================================================== */
  const openModule = (moduleId) => {
    let allowed = false;

    for (const lvl of studyPlanLevels) {
      const m = lvl.modules.find(x => x.id === moduleId);
      if (m) { allowed = !m.locked; break; }
    }

    if (allowed) {
      setFadeKey(moduleId);
      setActiveTab(moduleId);
    }
  };

  /* ====================================================
      RENDER PRINCIPAL
  ==================================================== */
  const renderActive = () => {
    switch (activeTab) {

      case "nom030": return <Nom030Module onComplete={markCompleted} />;
      case "nom019": return <Nom19Module onComplete={markCompleted} />;
      case "nom021": return <Nom021Module onComplete={markCompleted} />;
      case "nom001": return <Nom001Module onComplete={markCompleted} />;

      /* ===== NO EXISTEN AÚN, SE DEJAN DESHABILITADOS ===== */
      // case "nom002": return <Nom002Module onComplete={markCompleted} />;
      // case "nom026": return <Nom026Module onComplete={markCompleted} />;
      // case "nom009": return <Nom009Module onComplete={markCompleted} />;
      // case "nom029": return <Nom029Module onComplete={markCompleted} />;
      // case "nom004": return <Nom004Module onComplete={markCompleted} />;
      // case "nom006": return <Nom006Module onComplete={markCompleted} />;
      // case "nom027": return <Nom027Module onComplete={markCompleted} />;
      // case "nom036": return <Nom036Module onComplete={markCompleted} />;
      // case "nom025": return <Nom025Module onComplete={markCompleted} />;
      // case "nom113": return <Nom113Module onComplete={markCompleted} />;
      // case "nom115": return <Nom115Module onComplete={markCompleted} />;

      case "nom017": return <Nom017Module onComplete={markCompleted} />;

      default:
        return (
          <DashboardView
            setActiveTab={(id)=>openModule(id)}
            plan={studyPlanLevels}
            completed={completed}
          />
        );
    }
  };

  /* ====================================================
      DASHBOARD
  ==================================================== */
  function DashboardView({ setActiveTab, plan, completed }) {
    const flatModules = plan.flatMap(level => level.modules);
    const completedList = flatModules.filter(m => completed.includes(m.id));
    const lastCompleted = completedList[completedList.length - 1];

    return (
      <div className="max-w-4xl mx-auto pt-10 pb-20 animate-fadeIn">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 mb-1">Mapa de Estudio</h1>
          <p className="text-slate-500 text-sm">Avanza paso a paso y desbloquea nuevos módulos.</p>

          {lastCompleted && (
            <button
              onClick={() => setActiveTab(lastCompleted.id)}
              className="mt-5 inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition-all text-sm font-bold shadow"
            >
              Continuar módulo
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        <div className="space-y-10">
          {plan.map(level => {
            const total = level.modules.length;
            const done = level.modules.filter(m => completed.includes(m.id)).length;
            const progress = Math.round((done / total) * 100) || 0;

            return (
              <div key={level.level} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-black px-2 py-1 rounded bg-slate-100 ${level.color}`}>
                      Nivel {level.level}
                    </span>
                    <h2 className={`font-bold text-lg ${level.color}`}>{level.title}</h2>
                  </div>

                  <div className="w-40 bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }}/>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {level.modules.map(mod => {
                    const isLocked = mod.locked;
                    const isCompleted = completed.includes(mod.id);

                    return (
                      <button
                        key={mod.id}
                        onClick={() => !isLocked && setActiveTab(mod.id)}
                        className={`
                          w-full p-4 rounded-xl border flex justify-between items-center
                          transition-all shadow-sm text-left group
                          ${isLocked
                            ? "bg-slate-50 border-slate-100 opacity-50 cursor-not-allowed"
                            : "bg-white border-slate-200 hover:border-blue-400 hover:shadow-md"
                          }
                        `}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`
                            w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm
                            ${isLocked ? "bg-slate-400" : isCompleted ? "bg-emerald-600" : "bg-blue-600"}
                          `}>
                            <FileText size={20} />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`font-bold text-sm ${isLocked ? "text-slate-400" : "text-slate-800"}`}>
                                {mod.code}
                              </span>

                              {!isLocked && !isCompleted && (
                                <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                                  ACTIVO
                                </span>
                              )}

                              {isCompleted && (
                                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">
                                  ✔ Completado
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-slate-500 font-medium">{mod.title}</p>
                          </div>
                        </div>

                        {isLocked
                          ? <Lock size={18} className="text-slate-300" />
                          : <ChevronRight size={18} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                        }
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ====================================================
      LAYOUT PRINCIPAL
  ==================================================== */
  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 flex md:flex-row flex-col overflow-hidden">

      {/* TOPBAR MOBILE */}
      <div className="md:hidden bg-white p-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-slate-800">
          <Shield className="text-blue-600" /><span>NOM Master</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
          bg-white border-r border-slate-200 shadow-md flex flex-col
          fixed inset-y-0 left-0 z-40 w-72 transition-transform duration-300 ease-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:h-full md:w-72 md:flex md:flex-col md:overflow-hidden
        `}
      >

        {/* SIDEBAR HEADER */}
        <div className="p-5 border-b border-slate-100 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2 font-extrabold text-xl text-slate-900">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <Shield size={22} />
            </div>
            <span>NOM Master</span>
          </div>

          <button
            onClick={() => setActiveTab("dashboard")}
            className={`mt-4 w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
              activeTab === "dashboard"
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Layout size={16} />
            Ver Mapa Completo
          </button>
        </div>

        {/* SIDEBAR NIVELES */}
        <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-6 custom-scroll">
          {studyPlanLevels.map(level => (
            <div key={level.level} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className={`mb-2 text-xs font-black uppercase tracking-wide flex items-center gap-2 ${level.color}`}>
                <span className="w-5 h-5 rounded bg-white shadow text-[10px] flex items-center justify-center">
                  {level.level}
                </span>
                {level.title}
              </div>

              <div className="space-y-1">
                {level.modules.map(mod => {
                  const isLocked = mod.locked;
                  const isActive = activeTab === mod.id;

                  return (
                    <button
                      key={mod.id}
                      onClick={!isLocked ? () => openModule(mod.id) : null}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all group text-left
                        ${
                          isActive
                            ? "bg-slate-900 text-white shadow"
                            : isLocked
                            ? "text-slate-400 cursor-not-allowed"
                            : "text-slate-700 hover:bg-slate-200"
                        }
                      `}
                    >
                      <FileText size={16} className={isActive ? "text-blue-400" : "opacity-60"} />

                      <div className="flex-1">
                        <p className="font-bold text-[11px]">{mod.code}</p>
                        <p className="text-[10px] opacity-80 truncate">{mod.title}</p>
                      </div>

                      {isLocked && <Lock size={12} className="opacity-40" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* FOOTER USER */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 sticky bottom-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              U
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Supervisor SST</p>
              <p className="text-[10px] text-slate-400">
                Progreso: {Math.round((doneCount / totalModules) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* UNLOCK MESSAGE */}
      {unlockMessage && (
        <div className="
          absolute left-1/2 top-4 transform -translate-x-1/2 
          bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg
          text-sm font-bold tracking-wide animate-bounce-soft animate-fade
          z-50
        ">
          {unlockMessage} 🎉
        </div>
      )}

      {/* MAIN */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50/50 relative">
        <div key={fadeKey} className="animate-fadeIn">
          {renderActive()}
        </div>
      </main>

      {/* OVERLAY MOBILE */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

