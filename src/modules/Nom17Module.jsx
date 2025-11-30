// src/modules/Nom17Module.jsx
import React, { useState } from "react";
import { nom017Data } from "../data/nom17";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { iconMap } from "../utils/iconMap";

import {
  Activity,
  BookOpen,
  Shield,
  AlertTriangle,
  CheckCircle,
  Briefcase,
  User
} from "lucide-react";

export default function Nom017Module({ onComplete }) {
  const [selectedBodyPart, setSelectedBodyPart] = useState(nom017Data.bodyParts[0]);
  const [activeTab, setActiveTab] = useState("conceptos");

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleQuizOption = (qIndex, oIndex) =>
    setQuizAnswers(prev => ({ ...prev, [qIndex]: oIndex }));

  const calculateScore = () => {
    let score = 0;
    nom017Data.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  const handleFinish = () => {
    setShowResults(true);
    if (
      calculateScore() === nom017Data.quiz.length &&
      typeof onComplete === "function"
    ) {
      onComplete(nom017Data.id);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-20 transition-all">
      {/* Nivel */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-[-20px] relative z-20 ml-2">
        <Activity size={14} />
        {nom017Data.levelTitle}
      </div>

      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
        <h1 className="text-3xl font-black text-slate-800 mb-2">
          {nom017Data.title}
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          {nom017Data.subtitle}
        </p>
        <p className="text-slate-400 text-sm mt-4 italic">{nom017Data.summary}</p>
      </div>

      {/* ----------------------- TABS --------------------------- */}
      <div className="flex gap-2 border-b border-slate-200 pb-2 sticky top-0 bg-slate-50 z-10">
        {[
          { id: "conceptos", label: "Conceptos" },
          { id: "obligaciones", label: "Obligaciones" },
          { id: "selector", label: "Selector de EPP" }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === t.id
                ? "bg-slate-900 text-white shadow"
                : "text-slate-600 hover:bg-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ----------------------- TAB: CONCEPTOS --------------------------- */}
      {activeTab === "conceptos" && (
        <Card className="border-l-4 border-l-blue-600">
          <SectionTitle
            title="Conceptos Fundamentales (EPP)"
            icon={<BookOpen size={20} />}
          />
          <div className="space-y-4">
            {nom017Data.definitions.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-lg border border-slate-200"
              >
                <span className="block font-bold text-blue-700 mb-1 text-sm uppercase tracking-wide">
                  {item.term}
                </span>
                <span className="text-slate-700 text-sm leading-relaxed font-medium">
                  {item.def}
                </span>
              </div>
            ))}

            {nom017Data.sections.map((sec, idx) => {
              const Icon = iconMap[sec.icon];
              return (
                <div
                  key={idx}
                  className="bg-red-50 p-4 rounded-lg border border-red-200 mt-4"
                >
                  <div className="flex items-center gap-2 mb-2 text-red-800 font-bold">
                    {Icon && <Icon size={18} />}
                    <h4>{sec.title}</h4>
                  </div>
                  <ul className="list-disc list-inside text-sm text-red-800 space-y-1">
                    {sec.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* ----------------------- TAB: OBLIGACIONES --------------------------- */}
      {activeTab === "obligaciones" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="h-full border-l-4 border-l-emerald-600">
            <SectionTitle
              title="Obligaciones del Patrón"
              icon={<Briefcase size={20} />}
            />
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
              {nom017Data.obligations.patron.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Card>

          <Card className="h-full border-l-4 border-l-orange-500">
            <SectionTitle
              title="Obligaciones del Trabajador"
              icon={<User size={20} />}
            />
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
              {nom017Data.obligations.worker.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      {/* ----------------------- TAB: SELECTOR INTERACTIVO --------------------------- */}
      {activeTab === "selector" && (
        <Card className="border border-slate-300 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <SectionTitle
              title="Selector de EPP (Basado en Tabla A.1)"
              icon={<Shield size={20} className="text-blue-600" />}
            />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">
              Interactivo
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Botones */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2">
              {nom017Data.bodyParts.map(part => {
                const Icon = iconMap[part.icon];
                const selected = selectedBodyPart.id === part.id;

                return (
                  <button
                    key={part.id}
                    onClick={() => setSelectedBodyPart(part)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all border text-left ${
                      selected
                        ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {Icon && (
                      <Icon size={18} className={selected ? "text-white" : "text-slate-400"} />
                    )}
                    <span className="font-bold text-sm">{part.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Panel derecho */}
            <div className="lg:col-span-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                {iconMap[selectedBodyPart.icon] &&
                  React.createElement(iconMap[selectedBodyPart.icon], {
                    size: 32,
                    className: "text-slate-800"
                  })}
                <div>
                  <h3 className="text-2xl font-black text-slate-800">{selectedBodyPart.name}</h3>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                    Región Anatómica
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border-l-4 border-l-red-500 shadow-sm">
                  <h4 className="text-xs font-black uppercase text-red-600 mb-3 flex items-center gap-2">
                    <AlertTriangle size={14} /> Riesgos
                  </h4>
                  <ul className="space-y-2">
                    {selectedBodyPart.risks.map((r, i) => (
                      <li key={i} className="text-sm font-medium text-slate-700">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-l-emerald-500 shadow-sm">
                  <h4 className="text-xs font-black uppercase text-emerald-600 mb-3 flex items-center gap-2">
                    <Shield size={14} /> EPP Requerido
                  </h4>
                  <ul className="space-y-2">
                    {selectedBodyPart.epp.map((e, i) => (
                      <li key={i} className="text-sm font-medium text-slate-700">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* ----------------------- QUIZ --------------------------- */}
      <Card>
        <SectionTitle title="Examen Rápido" icon={<CheckCircle size={20} />} />

        {!showResults ? (
          <div className="space-y-4">
            {nom017Data.quiz.map((q, idx) => (
              <div
                key={idx}
                className="pb-4 border-b border-slate-100 last:border-0"
              >
                <p className="font-bold text-slate-800 mb-2">
                  {idx + 1}. {q.q}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {q.options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => handleQuizOption(idx, optIdx)}
                      className={`text-sm px-4 py-2 rounded-md border transition-all ${
                        quizAnswers[idx] === optIdx
                          ? "bg-slate-900 border-slate-900 text-white shadow-md"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleFinish}
              className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-all shadow-md mt-4"
            >
              Calificar Módulo
            </button>
          </div>
        ) : (
          <div className="text-center py-8 bg-green-50 rounded-xl border border-green-100">
            <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-3">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-1">
              Resultado: {calculateScore()} / {nom017Data.quiz.length}
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">
              {calculateScore() === nom017Data.quiz.length
                ? "¡Excelente! Dominaste la NOM-017."
                : "Revisa la selección correcta del EPP."}
            </p>
            <button
              onClick={() => {
                setShowResults(false);
                setQuizAnswers({});
              }}
              className="text-blue-600 font-bold hover:underline text-sm"
            >
              Intentar de nuevo
            </button>
          </div>
        )}
      </Card>
    </div>
  );
}
