// src/modules/Nom001Module.jsx
import React, { useState } from "react";
import { nom001Data } from "../data/nom001";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { iconMap } from "../utils/iconMap";
import { 
  BookOpen, Shield, Activity, CheckCircle, Briefcase, 
  User, Home, Layers, Menu, Minimize2, ArrowUp, Move, AlertTriangle
} from "lucide-react";

export default function Nom001Module({ onComplete }) {
  const [selectedElement, setSelectedElement] = useState(nom001Data.interactiveGuide[0]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleQuizOption = (qIndex, oIndex) => setQuizAnswers(prev => ({ ...prev, [qIndex]: oIndex }));

  const calculateScore = () => {
    let score = 0;
    nom001Data.quiz.forEach((q, idx) => { if (quizAnswers[idx] === q.correct) score++; });
    return score;
  };

  const handleFinish = () => {
    setShowResults(true);
    if (calculateScore() === nom001Data.quiz.length && typeof onComplete === "function") {
      onComplete(nom001Data.id);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-20 transition-all">
      {/* Etiqueta de Nivel */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-[-20px] relative z-20 ml-2">
        <Home size={14} />
        {nom001Data.levelTitle}
      </div>

      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
        <h1 className="text-3xl font-black text-slate-800 mb-2">{nom001Data.title}</h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">{nom001Data.subtitle}</p>
        <p className="text-slate-400 text-sm mt-4 italic">{nom001Data.summary}</p>
      </div>

      {/* Grid: Definiciones y Obligaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-full border-l-4 border-l-blue-600">
          <SectionTitle title="Conceptos de Infraestructura" icon={<BookOpen size={20} />} />
          <div className="space-y-4">
            {nom001Data.definitions.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="block font-bold text-blue-700 mb-1 text-xs uppercase tracking-wide">{item.term}</span>
                <span className="text-slate-700 text-sm leading-relaxed font-medium">{item.def}</span>
              </div>
            ))}
            {/* Secciones Extra (Pisos, Techos) */}
            {nom001Data.sections.map((sec, idx) => (
              <div key={`sec-${idx}`} className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mt-4">
                 <div className="flex items-center gap-2 mb-2 text-indigo-800 font-bold">
                    {iconMap[sec.icon] && React.createElement(iconMap[sec.icon], { size: 16 })}
                    <h4>{sec.title}</h4>
                 </div>
                 <p className="text-sm text-indigo-900 mb-2">{sec.content}</p>
                 <ul className="list-disc list-inside text-xs text-indigo-800 space-y-1">
                   {sec.bullets.map((b,i)=><li key={i}>{b}</li>)}
                 </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card className="h-full border-l-4 border-l-emerald-600">
          <SectionTitle title="Obligaciones de Mantenimiento" icon={<Shield size={20} />} />
          <div className="space-y-6 max-h-[600px] overflow-y-auto custom-scroll pr-2">
            <div>
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 sticky top-0 bg-white py-2 z-10 border-b">
                <Briefcase size={16} className="text-emerald-600" /> Patrón (Art. 5)
              </h3>
              <ul className="space-y-2">
                {nom001Data.obligations.patron.map((o,i)=> (
                  <li key={i} className="text-sm text-slate-600 bg-emerald-50/50 p-2 rounded border border-emerald-100 flex gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 sticky top-0 bg-white py-2 z-10 border-b">
                <User size={16} className="text-blue-600" /> Trabajador (Art. 6)
              </h3>
              <ul className="space-y-2">
                {nom001Data.obligations.worker.map((o,i)=> (
                  <li key={i} className="text-sm text-slate-600 bg-blue-50/50 p-2 rounded border border-blue-100 flex gap-2">
                     <span className="text-blue-500 font-bold">•</span>
                     {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* --- GUÍA INTERACTIVA: INSPECTOR DE DIMENSIONES --- */}
      <Card className="bg-white border border-slate-300 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <SectionTitle title="Inspector de Dimensiones (Medidas Oficiales)" icon={<Layers className="text-blue-600" size={20}/>} />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">Interactivo</span>
        </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Botones */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {nom001Data.interactiveGuide.map((element) => {
              const Icon = iconMap[element.icon];
              const isSelected = selectedElement.id === element.id;
              return (
                <button 
                  key={element.id} 
                  onClick={() => setSelectedElement(element)} 
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all border text-left group
                    ${isSelected 
                      ? "bg-slate-800 text-white border-slate-800 shadow-lg scale-[1.02]" 
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? "bg-white/10" : "bg-slate-100 group-hover:bg-slate-200"}`}>
                    {Icon && <Icon size={20} className={isSelected ? "text-white" : "text-slate-500"} />}
                  </div>
                  <div>
                    <span className="block font-bold text-sm">{element.name}</span>
                    <span className={`text-[10px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>Ver medidas</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detalle */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                {iconMap[selectedElement.icon] && React.createElement(iconMap[selectedElement.icon], { size: 32, className: "text-slate-800" })}
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800">{selectedElement.name}</h3>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Infraestructura</span>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                 <h4 className="text-[10px] font-black uppercase text-blue-600 mb-2">Descripción</h4>
                 <p className="text-slate-700 font-medium text-sm">{selectedElement.description}</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm flex-1">
                <h4 className="text-[10px] font-black uppercase text-orange-600 mb-4 flex items-center gap-2">
                  <AlertTriangle size={12}/> {selectedElement.detailsTitle}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedElement.details.map((detail, i) => (
                    <li key={i} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      <span className="leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quiz */}
      <Card>
        <SectionTitle title="Examen Rápido" icon={<CheckCircle size={20} />} />
        {!showResults ? (
          <div className="space-y-4">
            {nom001Data.quiz.map((q, idx) => (
              <div key={idx} className="pb-4 border-b border-slate-100 last:border-0">
                <p className="font-bold text-slate-800 mb-3 text-sm">{idx + 1}. {q.q}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {q.options.map((opt, optIdx) => (
                    <button key={optIdx} onClick={() => handleQuizOption(idx, optIdx)} className={`text-xs font-bold px-4 py-3 rounded-lg border transition-all ${quizAnswers[idx] === optIdx ? "bg-slate-800 border-slate-800 text-white shadow-md transform scale-[1.02]" : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700"}`}>{opt}</button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={handleFinish} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg mt-4">Calificar Módulo</button>
          </div>
        ) : (
          <div className="text-center py-8 bg-green-50 rounded-xl border border-green-100">
            <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-3">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-1">Resultado: {calculateScore()} / {nom001Data.quiz.length}</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">{calculateScore() === nom001Data.quiz.length ? "¡Excelente! Has dominado la NOM-001." : "Cuidado con los escalones, repasa las medidas."}</p>
            <button onClick={() => { setShowResults(false); setQuizAnswers({}); }} className="text-blue-600 font-bold hover:underline text-sm">Intentar de nuevo</button>
          </div>
        )}
      </Card>
    </div>
  );
}