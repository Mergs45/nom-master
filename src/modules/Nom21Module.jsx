// src/modules/Nom21Module.jsx
import React, { useState } from "react";
import { nom021Data } from "../data/nom21";
import Card from "../components/card";
import SectionTitle from "../components/SectionTitle";
import { iconMap } from "../utils/iconMap";
import { 
  BookOpen, Shield, Activity, CheckCircle, Briefcase, 
  User, AlertTriangle, Target, FileText, Clock 
} from "lucide-react";

export default function Nom21Module({ onComplete }) {
  // Estado para la sección interactiva (Clasificador)
  const [selectedTopic, setSelectedTopic] = useState(nom021Data.interactiveGuide[0]);
  
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleQuizOption = (qIndex, oIndex) => setQuizAnswers(prev => ({ ...prev, [qIndex]: oIndex }));

  const calculateScore = () => {
    let score = 0;
    nom021Data.quiz.forEach((q, idx) => { if (quizAnswers[idx] === q.correct) score++; });
    return score;
  };

  const handleFinish = () => {
    setShowResults(true);
    if (calculateScore() === nom021Data.quiz.length && typeof onComplete === "function") {
      onComplete(nom021Data.id);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-20 transition-all">
      {/* Etiqueta de Nivel */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold mb-[-20px] relative z-20 ml-2">
        <Activity size={14} />
        {nom021Data.levelTitle}
      </div>

      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm relative overflow-hidden">
        <h1 className="text-3xl font-black text-slate-800 mb-2">{nom021Data.title}</h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">{nom021Data.subtitle}</p>
        <p className="text-slate-400 text-sm mt-4 italic">{nom021Data.summary}</p>
      </div>

      {/* Grid: Conceptos y Obligaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conceptos y Tiempos */}
        <Card className="h-full border-l-4 border-l-indigo-600">
          <SectionTitle title="Conceptos Clave" icon={<BookOpen size={20} />} />
          <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scroll pr-2">
            {nom021Data.definitions.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="block font-bold text-indigo-700 mb-1 text-xs uppercase tracking-wide">{item.term}</span>
                <span className="text-slate-700 text-sm leading-relaxed font-medium">{item.def}</span>
              </div>
            ))}
            
            {/* Secciones Extra (Plazos y Destinatarios) */}
            {nom021Data.sections.map((sec, idx) => (
              <div key={`sec-${idx}`} className="bg-orange-50 p-4 rounded-lg border border-orange-100 mt-4">
                 <div className="flex items-center gap-2 mb-2 text-orange-800 font-bold">
                    <Clock size={16} />
                    <h4>{sec.title}</h4>
                 </div>
                 <p className="text-sm text-orange-900 mb-2">{sec.content}</p>
                 <ul className="list-disc list-inside text-xs text-orange-800 space-y-1">
                   {sec.bullets.map((b,i)=><li key={i}>{b}</li>)}
                 </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Obligaciones y Datos */}
        <Card className="h-full border-l-4 border-l-emerald-600">
          <SectionTitle title="Requerimientos de Reporte" icon={<Shield size={20} />} />
          <div className="space-y-6 max-h-[500px] overflow-y-auto custom-scroll pr-2">
            <div>
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 sticky top-0 bg-white py-2 z-10 border-b">
                <Briefcase size={16} className="text-emerald-600" /> Obligaciones del Patrón
              </h3>
              <ul className="space-y-2">
                {nom021Data.obligations.patron.map((o,i)=> (
                  <li key={i} className="text-sm text-slate-600 bg-emerald-50/50 p-2 rounded border border-emerald-100 flex gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 sticky top-0 bg-white py-2 z-10 border-b">
                <User size={16} className="text-blue-600" /> Datos Requeridos del Trabajador
              </h3>
              <ul className="space-y-2">
                {nom021Data.obligations.worker.map((o,i)=> (
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

      {/* --- SECCIÓN INTERACTIVA: CLASIFICADOR DE RIESGOS --- */}
      <Card className="bg-white border border-slate-300 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <SectionTitle title="Clasificador de Causas (Llenado CM-2A)" icon={<FileText className="text-blue-600" size={20}/>} />
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">Interactivo</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Columna Izquierda: Botones */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {nom021Data.interactiveGuide.map((topic) => {
              const Icon = iconMap[topic.icon];
              const isSelected = selectedTopic.id === topic.id;
              return (
                <button 
                  key={topic.id} 
                  onClick={() => setSelectedTopic(topic)} 
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
                    <span className="block font-bold text-sm">{topic.name}</span>
                    <span className={`text-[10px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>Click para ver ejemplos</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Columna Derecha: Detalle */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                {iconMap[selectedTopic.icon] && React.createElement(iconMap[selectedTopic.icon], { size: 32, className: "text-slate-800" })}
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-800">{selectedTopic.name}</h3>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Categoría Oficial</span>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                 <h4 className="text-[10px] font-black uppercase text-blue-600 mb-2">Definición Normativa</h4>
                 <p className="text-slate-700 font-medium text-sm">{selectedTopic.description}</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm flex-1">
                <h4 className="text-[10px] font-black uppercase text-orange-600 mb-4 flex items-center gap-2">
                  <AlertTriangle size={12}/> {selectedTopic.detailsTitle}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTopic.details.map((detail, i) => (
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
            {nom021Data.quiz.map((q, idx) => (
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
            <h3 className="text-2xl font-black text-slate-800 mb-1">Resultado: {calculateScore()} / {nom021Data.quiz.length}</h3>
            <p className="text-sm text-slate-500 mb-6 font-medium">{calculateScore() === nom021Data.quiz.length ? "¡Excelente! Has dominado la NOM-021." : "Revisa la clasificación de riesgos."}</p>
            <button onClick={() => { setShowResults(false); setQuizAnswers({}); }} className="text-blue-600 font-bold hover:underline text-sm">Intentar de nuevo</button>
          </div>
        )}
      </Card>
    </div>
  );
}