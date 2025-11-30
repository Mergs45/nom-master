// src/modules/Nom30Module.jsx
import React, { useState } from "react";
import { nom030Data } from "../data/nom30";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { iconMap } from "../utils/iconMap";
import { Activity, BookOpen, Shield, CheckCircle, ClipboardList } from "lucide-react";

export default function Nom30Module({ onComplete }) {
  const data = nom030Data;

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("diagnostico");

  const handleQuizOption = (qIndex, oIndex) =>
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: oIndex }));

  const calculateScore = () => {
    let score = 0;
    data.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  const handleFinish = () => {
    setShowResults(true);

    if (
      calculateScore() === data.quiz.length &&
      typeof onComplete === "function"
    ) {
      onComplete(data.id);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-20">
      {/* LEVEL TAG */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold ml-2">
        <Activity size={14} />
        {data.levelTitle}
      </div>

      {/* HEADER */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative">
        <h1 className="text-3xl font-black text-slate-800 mb-2">
          {data.title}
        </h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      {/* DEFINICIONES + OBLIGACIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DEFINICIONES */}
        <Card className="border-l-4 border-l-indigo-600">
          <SectionTitle title="Conceptos Clave" icon={<BookOpen size={20} />} />

          <div className="space-y-4">
            {data.definitions.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-lg border border-slate-200"
              >
                <span className="block font-bold text-indigo-700 mb-1 text-sm uppercase tracking-wide">
                  {item.term}
                </span>
                <span className="text-slate-700 text-sm font-medium">
                  {item.def}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* OBLIGACIONES */}
        <Card className="border-l-4 border-l-emerald-600">
          <SectionTitle title="Obligaciones" icon={<Shield size={20} />} />

          <div className="space-y-6">
            {/* PATRÓN */}
            <div>
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Shield size={16} className="text-emerald-600" /> Patrón
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 marker:text-emerald-500">
                {data.obligations.patron.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>

            {/* TRABAJADOR */}
            <div>
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Shield size={16} className="text-orange-600" /> Trabajador
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 marker:text-orange-500">
                {data.obligations.worker.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* TABS INTERACTIVOS (nuevo upgrade) */}
      <Card className="border-l-4 border-l-blue-600">
        <SectionTitle
          title="Guía Interactiva del Servicio Preventivo"
          icon={<ClipboardList size={20} />}
        />

        {/* TAB BUTTONS */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {Object.entries(data.tabs).map(([key, tab]) => {
            const Icon = iconMap[tab.icon];
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all flex items-center gap-2
                  ${
                    activeTab === key
                      ? "bg-slate-800 text-white border-slate-800 shadow"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }
                `}
              >
                {Icon && <Icon size={16} />}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ACTIVE TAB CONTENT */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            {iconMap[data.tabs[activeTab].icon] &&
              React.createElement(iconMap[data.tabs[activeTab].icon], {
                size: 24,
                className: "text-slate-700"
              })}
            <h3 className="text-xl font-black text-slate-800">
              {data.tabs[activeTab].title}
            </h3>
          </div>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            {data.tabs[activeTab].bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </Card>

      {/* SECCIONES NORMALES */}
      <Card className="bg-white border border-slate-300 shadow-md">
        <SectionTitle
          title="Contenido Clave de la Norma"
          icon={<BookOpen size={20} />}
        />

        <div className="space-y-6">
          {data.sections.map((sec, idx) => {
            const Icon = iconMap[sec.icon];
            return (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-lg border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  {Icon && <Icon className="w-5 h-5 text-blue-600" />}
                  <h3 className="font-bold text-slate-800">{sec.title}</h3>
                </div>

                {sec.content && (
                  <p className="text-sm text-slate-700 font-medium">
                    {sec.content}
                  </p>
                )}

                {sec.bullets && (
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mt-2">
                    {sec.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* QUIZ */}
      <Card>
        <SectionTitle
          title="Examen Rápido"
          icon={<CheckCircle size={20} />}
        />

        {!showResults ? (
          <div className="space-y-4">
            {data.quiz.map((q, idx) => (
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
                      className={`text-sm px-4 py-2 rounded-md border transition-all
                        ${
                          quizAnswers[idx] === optIdx
                            ? "bg-slate-800 border-slate-800 text-white"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        }
                      `}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={handleFinish}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm mt-4"
            >
              Calificar
            </button>
          </div>
        ) : (
          <div className="text-center py-6 bg-slate-50 rounded-lg">
            <h3 className="text-xl font-black text-slate-800 mb-1">
              Resultado: {calculateScore()} / {data.quiz.length}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {calculateScore() === data.quiz.length
                ? "¡Dominaste la NOM-030! 🔥"
                : "Dale otra repasada, crack 👀"}
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
    </div>
  );
}
