// src/modules/Nom19Module.jsx
import React, { useState } from "react";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { nom019Data } from "../data/nom19";
import { iconMap } from "../utils/iconMap";

export default function Nom19Module({ onComplete }) {
  const [activeTab, setActiveTab] = useState("info");
  const [selectedRole, setSelectedRole] = useState(null);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const handleAnswer = (qIndex, optionIndex) => {
    setAnswers({ ...answers, [qIndex]: optionIndex });
  };

  const finishQuiz = () => {
    const correct = nom019Data.quiz.every(
      (q, i) => answers[i] === q.correct
    );
    if (correct) {
      setDone(true);
      onComplete(nom019Data.id);
    } else {
      alert("Algunas respuestas son incorrectas. Intenta nuevamente.");
    }
  };

  const RoleCard = ({ role }) => (
    <div
      onClick={() => setSelectedRole(role)}
      className="cursor-pointer p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3">
        {iconMap[role.icon] && React.createElement(iconMap[role.icon], { size: 24, className: "text-blue-600" })}
        <h3 className="font-bold text-slate-800">{role.name}</h3>
      </div>
      <p className="text-sm text-slate-500 mt-2">{role.description}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* HEADER */}
      <Card className="animate-fadeIn">
        <h1 className="text-2xl font-black text-slate-800">
          {nom019Data.title}
        </h1>
        <p className="text-slate-600 mt-1">{nom019Data.subtitle}</p>
      </Card>

      {/* TABS */}
      <div className="flex gap-2 bg-white p-2 rounded-xl shadow border border-slate-200">
        {[
          { id: "info", label: "Información" },
          { id: "roles", label: "Guía de Roles" },
          { id: "quiz", label: "Evaluación" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all
              ${
                activeTab === t.id
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-200"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB: INFO */}
      {activeTab === "info" && (
        <div className="space-y-6 animate-fadeIn">
          <Card>
            <SectionTitle
              title="Resumen General"
              icon={<iconMap.FileText size={18} />}
            />
            <p className="text-slate-700 text-sm">{nom019Data.summary}</p>
          </Card>

          {/* Definiciones */}
          <Card>
            <SectionTitle
              title="Definiciones"
              icon={<iconMap.BookOpen size={18} />}
            />
            <ul className="space-y-3 text-sm text-slate-700">
              {nom019Data.definitions.map((d, i) => (
                <li key={i}>
                  <span className="font-bold">{d.term}: </span>
                  {d.def}
                </li>
              ))}
            </ul>
          </Card>

          {/* Obligaciones */}
          <Card>
            <SectionTitle
              title="Obligaciones del Patrón"
              icon={<iconMap.Shield size={18} />}
            />
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
              {nom019Data.obligations.patron.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <SectionTitle
              title="Obligaciones de los Trabajadores"
              icon={<iconMap.User size={18} />}
            />
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
              {nom019Data.obligations.worker.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Card>

          {/* Secciones técnicas */}
          {nom019Data.sections.map((sec, idx) => (
            <Card key={idx}>
              <SectionTitle
                title={sec.title}
                icon={
                  iconMap[sec.icon]
                    ? React.createElement(iconMap[sec.icon], { size: 18 })
                    : null
                }
              />
              {sec.content && (
                <p className="text-sm text-slate-700 mb-4">{sec.content}</p>
              )}
              {sec.bullets && (
                <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                  {sec.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* TAB: ROLES */}
      {activeTab === "roles" && (
        <div className="space-y-6 animate-fadeIn">
          {!selectedRole && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nom019Data.interactiveGuide.map((role) => (
                <RoleCard key={role.id} role={role} />
              ))}
            </div>
          )}

          {/* DETALLE DEL ROL */}
          {selectedRole && (
            <Card>
              <button
                onClick={() => setSelectedRole(null)}
                className="text-xs text-blue-600 mb-3 font-bold"
              >
                ← Regresar
              </button>

              <SectionTitle
                title={selectedRole.detailsTitle}
                icon={
                  iconMap[selectedRole.icon] &&
                  React.createElement(iconMap[selectedRole.icon], { size: 18 })
                }
              />

              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
                {selectedRole.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      )}

      {/* TAB: QUIZ */}
      {activeTab === "quiz" && (
        <div className="space-y-6 animate-fadeIn">
          <Card>
            <SectionTitle
              title="Evaluación Final"
              icon={<iconMap.CheckCircle size={18} />}
            />

            {nom019Data.quiz.map((q, qi) => (
              <div key={qi} className="mb-6">
                <p className="font-bold text-sm mb-2">{q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, oi) => (
                    <label
                      key={oi}
                      className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`q-${qi}`}
                        checked={answers[qi] === oi}
                        onChange={() => handleAnswer(qi, oi)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {!done ? (
              <button
                onClick={finishQuiz}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700"
              >
                Finalizar Evaluación
              </button>
            ) : (
              <p className="mt-4 font-bold text-emerald-600">
                ¡Módulo completado! 🎉
              </p>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
