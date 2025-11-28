// src/data/nom17.js
export const nom017Data = {
  id: "nom017",
  level: 4,
  levelTitle: "Nivel 4: Salud y Ergonomía",
  title: "NOM-017-STPS-2008",
  subtitle: "Equipo de Protección Personal: Selección, uso y manejo.",
  summary: "Esta norma establece los requisitos mínimos para que el patrón seleccione, adquiera y proporcione a sus trabajadores el equipo de protección personal (EPP).",
  definitions: [
    { term: "EPP (Equipo de Protección Personal)", def: "Conjunto de elementos y dispositivos diseñados específicamente para proteger al trabajador contra accidentes y enfermedades." },
    { term: "Análisis de Riesgo", def: "La base para seleccionar el EPP. El patrón debe identificar y analizar los riesgos por cada puesto de trabajo." }
  ],
  obligations: {
    patron: ["Identificar y analizar los riesgos de trabajo (Art. 5.2)", "Determinar el EPP necesario basándose en el análisis (Art. 5.3)", "Proporcionar el EPP a los trabajadores (Art. 5.4)", "Capacitar sobre el uso, revisión, reposición y limpieza (Art. 5.6)", "Supervisar que los trabajadores realmente lo usen (Art. 5.7)"],
    worker: ["Participar en la capacitación y adiestramiento (Art. 6.1)", "Utilizar el EPP de acuerdo a la capacitación recibida (Art. 6.2)", "Revisar las condiciones del EPP antes, durante y al final del turno (Art. 6.3)", "Informar al patrón cuando el EPP ya no proteja o esté dañado (Art. 6.4)"]
  },
  bodyParts: [
    { id: "head", name: "Cabeza", icon: "HardHat", risks: ["Golpes", "Descarga eléctrica", "Temperaturas bajas"], epp: ["Casco contra impacto", "Casco dieléctrico", "Capuchas"] },
    { id: "eyes", name: "Ojos y Cara", icon: "Eye", risks: ["Proyección de partículas", "Líquidos/Vapores", "Radiaciones"], epp: ["Anteojos de protección", "Goggles", "Pantalla facial"] },
    { id: "ears", name: "Oídos", icon: "Ear", risks: ["Ruido excesivo"], epp: ["Tapones auditivos", "Conchas acústicas"] },
    { id: "respiratory", name: "Respiratorio", icon: "Wind", risks: ["Polvos/Partículas", "Gases y Vapores"], epp: ["Respirador contra partículas", "Respirador vs gases", "Equipo autónomo"] },
    { id: "hands", name: "Extremidades Sup.", icon: "Hand", risks: ["Sustancias químicas", "Descargas eléctricas", "Corte"], epp: ["Guantes químicos", "Guantes dieléctricos", "Mangas"] },
    { id: "feet", name: "Extremidades Inf.", icon: "Footprints", risks: ["Golpes", "Resbalones", "Electricidad estática"], epp: ["Calzado ocupacional", "Calzado dieléctrico", "Botas impermeables"] },
    { id: "body", name: "Tronco/Total", icon: "User", risks: ["Altas temperaturas", "Sustancias químicas", "Caídas"], epp: ["Mandil", "Overol", "Arnés de cuerpo completo"] }
  ],
  quiz: [
    { q: "¿Cuál es el documento base para seleccionar el EPP?", options: ["El reglamento interior", "El análisis de riesgos por puesto", "La factura de compra"], correct: 1 },
    { q: "Si un casco está roto, ¿cuál es la obligación del trabajador?", options: ["Pegarlo con cinta", "Seguir usándolo así", "Informar al patrón"], correct: 2 },
    { q: "¿Quién debe capacitar sobre la limpieza del EPP?", options: ["El Patrón", "El Trabajador", "El Sindicato"], correct: 0 }
  ]
};
