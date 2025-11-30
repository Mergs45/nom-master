// src/modules/Nom001Module.jsx
import React, { useState } from "react";
import { nom001Data } from "../data/nom001";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { iconMap } from "../utils/iconMap";

import {
  Activity,
  BookOpen,
  Shield,
  AlertTriangle,
  CheckCircle,
  ClipboardList,
  HardHat,
  FileText,
  ClipboardCheck,
  User
} from "lucide-react";

export default function Nom001Module({ onComplete }) {
  const data = nom001Data;

  // Tabs
  const tabs = [
    { key: "conceptos", label: "Conceptos Clave" },
    { key: "obligaciones", label: "Obligaciones" },
    { key: "secciones", label: "Contenido Técnico" },
    { key: "interactivo", label: "Guía Interactiva" },
    { key: "quiz", label: "Examen" }
  ];

  const [activeTab, setActiveTab] = useState("conceptos");

  // --- Quiz ---
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleQuizOption = (q, opt) =>
    setQuizAnswers(prev => ({ ...prev, [q]: opt }));

  const calculateScore = () => {
    let score = 0;
    data.quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) score++;
    });
    return score;
  };

  const finishQuiz = () => {
    setShowResults(true);
    if (calculateScore() === data.quiz.length && typeof onComplete === "function") {
      onComplete(data.id);
    }
  };

  // --- Interactivo ---
  const [selectedItem, setSelectedItem] = useState(data.interactiveGuide[0]);

  return (
    <div className="space-y-8 animate-fadeIn pb-20">
      {/* ETIQUETA NIVEL */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-bold ml-2">
        <Activity size={14} />
        {data.levelTitle}
      </div>

      {/* CABECERA */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-black text-slate-800 mb-2">{data.title}</h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          {data.subtitle}
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scroll">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-4 py-2 text-sm font-bold rounded-lg border transition-all whitespace-nowrap
              ${
                activeTab === t.key
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }
            `}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* CONTENIDO DEPENDIENDO DEL TAB */}

      {/* --- TAB 1: CONCEPTOS CLAVE --- */}
      {activeTab === "conceptos" && (
        <Card>
          <SectionTitle title="Conceptos Clave" icon={<BookOpen size={20} />} />
          <div className="space-y-4">
            {data.definitions.map((d, i) => (
              <div
                key={i}
                className="bg-slate-50 p-4 rounded-lg border border-slate-200"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-1">
                  {d.term}
                </p>
                <p className="text-slate-700 text-sm font-medium">{d.def}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* --- TAB 2: OBLIGACIONES --- */}
      {activeTab === "obligaciones" && (
        <Card>
          <SectionTitle title="Obligaciones" icon={<Shield size={20} />} />

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <HardHat size={16} className="text-blue-600" /> Patrón
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-700">
                {data.obligations.patron.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <User size={16} className="text-orange-600" /> Trabajador
              </h3>
              <ul className="list-disc list-inside text-sm text-slate-700">
                {data.obligations.worker.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* --- TAB 3: CONTENIDO TÉCNICO --- */}
      {activeTab === "secciones" && (
        <Card>
          <SectionTitle title="Contenido Técnico" icon={<FileText size={20} />} />
          <div className="space-y-6">
            {data.sections.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={i}
                  className="bg-slate-50 p-4 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {Icon && <Icon className="w-5 h-5 text-blue-600" />}
                    <h3 className="font-bold text-slate-800">{s.title}</h3>
                  </div>

                  {s.content && (
                    <p className="text-sm font-medium text-slate-700 mb-2">
                      {s.content}
                    </p>
                  )}

                  {s.bullets && (
                    <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                      {s.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* --- TAB 4: INTERACTIVO --- */}
      {activeTab === "interactivo" && (
        <Card>
          <SectionTitle
            title="Guía Interactiva de Seguridad Eléctrica"
            icon={<ClipboardCheck size={20} />}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Lista */}
            <div className="space-y-2">
              {data.interactiveGuide.map(item => {
                const Icon = iconMap[item.icon];
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all
                      ${
                        selectedItem.id === item.id
                          ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                      }
                    `}
                  >
                    {Icon && <Icon size={18} />}
                    <span className="font-bold text-sm">{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Detalles */}
            <div className="md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                {iconMap[selectedItem.icon] &&
                  React.createElement(iconMap[selectedItem.icon], {
                    size: 28,
                    className: "text-slate-800"
                  })}
                <h3 className="text-xl font-black text-slate-800">
                  {selectedItem.name}
                </h3>
              </div>

              <p className="text-slate-600 text-sm font-medium mb-4">
                {selectedItem.description}
              </p>

              <h4 className="text-xs font-bold uppercase text-blue-600 mb-2">
                {selectedItem.detailsTitle}
              </h4>

              <ul className="space-y-2">
                {selectedItem.details.map((d, i) => (
                  <li
                    key={i}
                    className="bg-white p-3 rounded-md border border-slate-200 text-sm font-medium text-slate-700"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* --- TAB 5: EXAMEN --- */}
      {activeTab === "quiz" && (
        <Card>
          <SectionTitle title="Examen Rápido" icon={<CheckCircle size={20} />} />

          {!showResults ? (
            <div className="space-y-4">
              {data.quiz.map((q, i) => (
                <div
                  key={i}
                  className="pb-4 border-b border-slate-200 last:border-0"
                >
                  <p className="font-bold text-slate-800 mb-2">
                    {i + 1}. {q.q}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {q.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleQuizOption(i, j)}
                        className={`text-sm px-4 py-2 rounded-md border transition-all
                          ${
                            quizAnswers[i] === j
                              ? "bg-slate-900 text-white border-slate-900"
                              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
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
                onClick={finishQuiz}
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
                  ? "🔥 Eres una máquina de la NOM-001, crack."
                  : "Puedes mejorar, revisa lo eléctrico ⚡"}
              </p>

              <button
                onClick={() => {
                  setQuizAnswers({});
                  setShowResults(false);
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
