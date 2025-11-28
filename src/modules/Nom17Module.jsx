// src/modules/Nom17Module.jsx
import React, { useState } from "react";
import { nom017Data } from "../data/nom17";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { iconMap } from "../utils/iconMap";
import { Activity, BookOpen, Shield, AlertTriangle, CheckCircle, Briefcase, User } from "lucide-react";

export default function Nom017Module({ onComplete }) {
  const [selectedBodyPart, setSelectedBodyPart] = useState(nom017Data.bodyParts[0]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleQuizOption = (qIndex, oIndex) => setQuizAnswers(prev => ({ ...prev, [qIndex]: oIndex }));
  const calculateScore = () => { let score = 0; nom017Data.quiz.forEach((q, idx) => { if (quizAnswers[idx] === q.correct) score++; }); return score; };

  const handleFinish = () => {
    setShowResults(true);
    if (calculateScore() === nom017Data.quiz.length && typeof onComplete === "function") {
      onComplete(nom017Data.id);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-[-20px] relative z-20 ml-2">
        <Activity size={14} />
        {nom017Data.levelTitle}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
        <h1 className="text-3xl font-black text-slate-800 mb-2">{nom017Data.title}</h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">{nom017Data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-full border-l-4 border-l-blue-600">
          <SectionTitle title="Conceptos Clave" icon={<BookOpen size={20} />} />
          <div className="space-y-4">
            {nom017Data.definitions.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="block font-bold text-blue-700 mb-1 text-sm uppercase tracking-wide">{item.term}</span>
                <span className="text-slate-700 text-sm leading-relaxed font-medium">{item.def}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="h-full border-l-4 border-l-emerald-600">
          <SectionTitle title="Obligaciones (Art. 5 vs Art. 6)" icon={<Shield size={20} />} />
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 font-bold text-slate-800 mb-2"><Briefcase size={16} className="text-emerald-600" /><h3>Patrón</h3></div>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2 marker:text-emerald-500">{nom017Data.obligations.patron.map((o,i)=><li key={i}>{o}</li>)}</ul>
            </div>
            <div>
              <div className="flex items-center gap-2 font-bold text-slate-800 mb-2"><User size={16} className="text-orange-600" /><h3>Trabajador</h3></div>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-2 marker:text-orange-500">{nom017Data.obligations.worker.map((o,i)=><li key={i}>{o}</li>)}</ul>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-white border border-slate-300 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <SectionTitle title="Selector de EPP (Tabla A.1)" icon={<User className="text-blue-600" size={20}/>} />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">Interactivo</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2">
            {nom017Data.bodyParts.map((part) => {
              const Icon = iconMap[part.icon];
              return (
                <button key={part.id} onClick={() => setSelectedBodyPart(part)} className={`flex items-center gap-3 p-3 rounded-lg transition-all border text-left ${selectedBodyPart.id === part.id ? "bg-slate-800 text-white border-slate-800 shadow-lg" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}>
                  {Icon && <Icon size={18} className={selectedBodyPart.id === part.id ? "text-white" : "text-slate-400"} />}
                  <span className="font-bold text-sm">{part.name}</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              {iconMap[selectedBodyPart.icon] && React.createElement(iconMap[selectedBodyPart.icon], { size: 32, className: "text-slate-800" })}
              <div><h3 className="text-2xl font-black text-slate-800">{selectedBodyPart.name}</h3><span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Región Anatómica</span></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border-l-4 border-l-red-500 shadow-sm">
                <h4 className="text-xs font-black uppercase text-red-600 mb-3 flex items-center gap-2"><AlertTriangle size={14}/> Riesgos</h4>
                <ul className="space-y-2">{selectedBodyPart.risks.map((r,i)=><li key={i} className="text-sm font-medium text-slate-700 border-b border-slate-50 pb-1 last:border-0">{r}</li>)}</ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-l-emerald-500 shadow-sm">
                <h4 className="text-xs font-black uppercase text-emerald-600 mb-3 flex items-center gap-2"><Shield size={14}/> EPP Requerido</h4>
                <ul className="space-y-2">{selectedBodyPart.epp.map((e,i)=><li key={i} className="text-sm font-medium text-slate-700 border-b border-slate-50 pb-1 last:border-0">{e}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <SectionTitle title="Examen Rápido" icon={<CheckCircle size={20}/>} />
        {!showResults ? (
          <div className="space-y-4">
            {nom017Data.quiz.map((q, idx) => (
              <div key={idx} className="pb-4 border-b border-slate-100 last:border-0">
                <p className="font-bold text-slate-800 mb-2">{idx + 1}. {q.q}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {q.options.map((opt,optIdx)=>(<button key={optIdx} onClick={()=>handleQuizOption(idx,optIdx)} className={`text-sm px-4 py-2 rounded-md border transition-all ${quizAnswers[idx]===optIdx ? "bg-slate-800 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}>{opt}</button>))}
                </div>
              </div>
            ))}
            <button onClick={handleFinish} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm mt-4">Calificar</button>
          </div>
        ) : (
          <div className="text-center py-6 bg-slate-50 rounded-lg">
            <h3 className="text-xl font-black text-slate-800 mb-1">Resultado: {calculateScore()} / {nom017Data.quiz.length}</h3>
            <p className="text-sm text-slate-500 mb-4">{calculateScore()===nom017Data.quiz.length ? "¡Excelente! NOM Dominada." : "Repasa los conceptos clave."}</p>
            <button onClick={()=>{ setShowResults(false); setQuizAnswers({}); }} className="text-blue-600 font-bold hover:underline text-sm">Reintentar</button>
          </div>
        )}
      </Card>
    </div>
  );
}
