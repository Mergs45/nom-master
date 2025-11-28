// src/App.jsx
import React, { useEffect, useState } from "react";
import { Shield, Menu, X, FileText, Layout, Lock, ChevronRight } from "lucide-react";
import { studyPlanLevels as basePlan } from "./studyPlan";

import Nom017Module from "./modules/Nom17Module";
import Nom030Module from "./modules/Nom30Module";

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

  const markCompleted = (moduleId) => {
    if (!completed.includes(moduleId)) {
      setCompleted(prev => [...prev, moduleId]);
    }

    setStudyPlanLevels(prev => {
      const clone = deepClone(prev);

      for (let lvl of clone) {
        const idx = lvl.modules.findIndex(m => m.id === moduleId);
        if (idx !== -1) {
          const next = lvl.modules[idx + 1];
          if (next && next.locked) next.locked = false;
          break;
        }
      }

      return clone;
    });
  };

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

  const renderActive = () => {
    switch (activeTab) {
      case "nom017": return <Nom017Module onComplete={markCompleted} />;
      case "nom030": return <Nom030Module onComplete={markCompleted} />;
      default:
        return <DashboardView setActiveTab={(id)=>openModule(id)} plan={studyPlanLevels} />;
    }
  };

  // ----------------------------------------
  // DASHBOARD VIEW
  // ----------------------------------------
  function DashboardView({ setActiveTab, plan }) {
    return (
      <div className="max-w-4xl mx-auto pt-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-800 mb-2">Mapa de Estudio STPS</h1>
          <p className="text-slate-500">Tu ruta profesional para dominar la Seguridad e Higiene.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {plan.map(level => (
            <div key={level.level} className="relative pl-8 border-l-2 border-slate-200 last:border-0 pb-8 last:pb-0">
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center font-bold text-sm bg-slate-100 text-slate-500">{level.level}</div>
              
              <div className="mb-3">
                <h3 className={`text-lg font-bold ${level.color}`}>{level.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {level.modules.map(mod => (
                  <button
                    key={mod.id}
                    onClick={() => setActiveTab(mod.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left
                      ${mod.locked
                        ? "bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed"
                        : "bg-white border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md"
                      }
                    `}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-black text-sm ${mod.locked ? "text-slate-400" : "text-slate-800"}`}>
                          {mod.code}
                        </span>
                        {!mod.locked &&
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">
                            ACTIVO
                          </span>
                        }
                      </div>
                      <span className="text-xs text-slate-500 font-medium block">{mod.title}</span>
                    </div>
                    {mod.locked
                      ? <Lock size={16} className="text-slate-300" />
                      : <ChevronRight size={16} className="text-blue-500" />}
                  </button>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    );
  }

  // ----------------------------------------
  // LAYOUT FULL
  // ----------------------------------------
  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 flex md:flex-row flex-col overflow-hidden">

      {/* TOPBAR - MOBILE */}
      <div className="md:hidden bg-white p-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-slate-800">
          <Shield className="text-blue-600" /><span>NOM Master</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* SIDEBAR FULL FIX */}
      <aside
        className={`
          bg-white border-r border-slate-200 shadow-md flex flex-col

          /* MOBILE: fixed menú */
          fixed inset-y-0 left-0 z-40 w-72
          transition-transform duration-300 ease-out
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}

          /* DESKTOP */
          md:relative md:translate-x-0 md:h-full md:w-72 md:flex md:flex-col md:overflow-hidden
        `}
      >
        {/* HEADER */}
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

        {/* SIDEBAR SCROLL */}
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
                {level.modules.map(mod => (
                  <button
                    key={mod.id}
                    onClick={!mod.locked ? () => openModule(mod.id) : null}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all group text-left
                      ${
                        activeTab === mod.id
                          ? "bg-slate-900 text-white shadow"
                          : mod.locked
                          ? "text-slate-400 cursor-not-allowed"
                          : "text-slate-700 hover:bg-slate-200"
                      }
                    `}
                  >
                    <FileText size={16} className={activeTab === mod.id ? "text-blue-400" : "opacity-60"} />

                    <div className="flex-1">
                      <p className="font-bold text-[11px]">{mod.code}</p>
                      <p className="text-[10px] opacity-80 truncate">{mod.title}</p>
                    </div>

                    {mod.locked && <Lock size={12} className="opacity-40" />}
                  </button>
                ))}
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
              <p className="text-[10px] text-slate-400">Progreso: {Math.round((doneCount / totalModules) * 100)}%</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN + ANIMACIÓN FADE */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50/50 relative">
        <div
          key={fadeKey}
          className="animate-fadeIn"
        >
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
