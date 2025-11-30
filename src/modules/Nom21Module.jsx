// src/modules/Nom021Module.jsx
import React, { useState } from "react";
import { nom021Data } from "../data/nom21";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { iconMap } from "../utils/iconMap";
import {
  Layers,
  FileText,
  ClipboardCheck,
  Shield,
  Activity,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Move,
  Wind,
} from "lucide-react";

export default function Nom021Module({ onComplete }) {
  const [tab, setTab] = useState("conceptos");
  const [selectedGuide, setSelectedGuide] = useState(nom021Data.interactiveGuide[0]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleQuizOption = (qIndex, oIndex) =>
    setQuizAnswers(prev => ({ ...prev, [qIndex]: oIndex }));

  const calculateScore = () => {
    let score = 0;
    nom021Data.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) score++;
    });
    return score;
  };

  const finishQuiz = () => {
    const score = calculateScore();
    setShowResults(true);

    if (score === nom021Data.quiz.length && typeof onComplete === "function") {
      onComplete(nom021Data.id);
    }
  };

  // ---------------------------------------------------------
  // MAIN RENDER
  // ---------------------------------------------------------
  return (
    <div className="space-y-8 animate-fadeIn pb-20">

      {/* HEADER LEVEL */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-[-20px] relative z-20 ml-2">
        <Activity size={14} />
        {nom021Data.levelTitle}
      </div>

      {/* TITLE CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
        <h1 className="text-3xl font-black text-slate-800 mb-2">{nom021Data.title}</h1>
        <p className="text-slate-500 text-lg font-medium max-w-3xl">
          {nom021Data.subtitle}
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 flex-wrap">
        {[
          { id: "conceptos", label: "Conceptos", icon: BookOpen },
          { id: "obligaciones", label: "Obligaciones", icon: Shield },
          { id: "secciones", label: "Secciones Técnicas", icon: Layers },
          { id: "guia", label: "Guía Interactiva", icon: Move },
          { id: "examen", label: "Examen", icon: CheckCircle },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-bold transition-all
              ${
                tab === t.id
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {/* --------------------------------------------------------- */}
      {tab === "conceptos" && (
        <Card className="border-l-4 border-l-blue-600">
          <SectionTitle title="Conceptos Clave" icon={<BookOpen size={20} />} />

          <div className="space-y-4">
            {nom021Data.definitions.map((item, i) => (
              <div
                key={i}
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
          </div>
        </Card>
      )}

      {/* --------------------------------------------------------- */}
      {tab === "obligaciones" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PATRON */}
          <Card className="border-l-4 border-l-emerald-600">
            <SectionTitle
              title="Obligaciones del Patrón"
              icon={<Shield size={20} className="text-emerald-600" />}
            />
            <ul className="space-y-2 list-disc list-inside marker:text-emerald-500">
              {nom021Data.obligations.patron.map((o, i) => (
                <li key={i} className="text-sm font-medium text-slate-700">
                  {o}
                </li>
              ))}
            </ul>
          </Card>

          {/* WORKER */}
          <Card className="border-l-4 border-l-orange-500">
            <SectionTitle
              title="Obligaciones del Trabajador"
              icon={<AlertTriangle size={20} className="text-orange-600" />}
            />
            <ul className="space-y-2 list-disc list-inside marker:text-orange-500">
              {nom021Data.obligations.worker.map((o, i) => (
                <li key={i} className="text-sm font-medium text-slate-700">
                  {o}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      {/* --------------------------------------------------------- */}
      {tab === "secciones" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nom021Data.sections.map((sec, i) => {
            const Icon = iconMap[sec.icon] || FileText;

            return (
              <Card key={i} className="border-l-4 border-l-blue-500">
                <SectionTitle
                  title={sec.title}
                  icon={<Icon size={18} className="text-blue-700" />}
                />

                <ul className="space-y-2">
                  {sec.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-700 border-b border-slate-100 pb-1 last:border-0 font-medium"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      )}

      {/* --------------------------------------------------------- */}
      {tab === "guia" && (
        <Card className="bg-white border border-slate-300 shadow-md">
          <SectionTitle
            title="Guía Interactiva de Evaluación Ambiental"
            icon={<Move className="text-blue-600" size={20} />}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT LIST */}
            <div className="lg:col-span-4 space-y-2">
              {nom021Data.interactiveGuide.map(g => {
                const Icon = iconMap[g.icon] || Activity;

                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGuide(g)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all border text-left w-full
                    ${
                      selectedGuide.id === g.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        selectedGuide.id === g.id ? "text-white" : "text-slate-400"
                      }
                    />
                    <span className="font-bold text-sm">{g.name}</span>
                  </button>
                );
              })}
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-2xl font-black text-slate-800 mb-1">
                {selectedGuide.detailsTitle}
              </h3>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-4">
                {selectedGuide.description}
              </p>

              <ul className="space-y-2">
                {selectedGuide.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 border-b border-slate-100 pb-1 last:border-0 font-medium"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* --------------------------------------------------------- */}
      {tab === "examen" && (
        <Card>
          <SectionTitle title="Examen Rápido" icon={<CheckCircle size={20} />} />

          {!showResults ? (
            <div className="space-y-4">
              {nom021Data.quiz.map((q, i) => (
                <div key={i} className="pb-4 border-b border-slate-100 last:border-0">
                  <p className="font-bold text-slate-800 mb-2">
                    {i + 1}. {q.q}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {q.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => handleQuizOption(i, optIdx)}
                        className={`text-sm px-4 py-2 rounded-md border transition-all
                          ${
                            quizAnswers[i] === optIdx
                              ? "bg-slate-800 text-white border-slate-800"
                              : "bg-white text-slate-600 hover:bg-slate-50"
                          }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={finishQuiz}
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm mt-4"
              >
                Calificar
              </button>
            </div>
          ) : (
            <div className="text-center py-6 bg-slate-50 rounded-lg">
              <h3 className="text-xl font-black text-slate-800 mb-1">
                Resultado: {calculateScore()} / {nom021Data.quiz.length}
              </h3>

              <p className="text-sm text-slate-500 mb-4">
                {calculateScore() === nom021Data.quiz.length
                  ? "¡Excelente! Dominio total de la NOM-021."
                  : "Repasa las secciones, especialmente la guía técnica."}
              </p>

              <button
                onClick={() => {
                  setShowResults(false);
                  setQuizAnswers({});
                }}
                className="text-blue-600 font-bold hover:underline text-sm"
              >
                Reintentar
              </button>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
