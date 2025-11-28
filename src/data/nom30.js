// src/data/nom30.js
export const nom030Data = {
  id: "nom030",
  level: 1,
  levelTitle: "Nivel 1: Cimientos (Admin)",
  title: "NOM-030-STPS-2009",
  subtitle: "Servicios preventivos de seguridad y salud en el trabajo: funciones y actividades.",
  summary: "Establece las funciones y actividades de los servicios preventivos de seguridad y salud en el trabajo para prevenir accidentes y enfermedades laborales.",
  definitions: [
    { term: "Diagnóstico de Seguridad y Salud", def: "Identificación de condiciones físicas peligrosas, agentes contaminantes y requerimientos normativos aplicables en el centro de trabajo." },
    { term: "Acciones Preventivas y Correctivas", def: "Listado de medidas resultantes del diagnóstico, que incluyen procedimientos, medidas de seguridad, controles y capacitación." },
    { term: "Responsable de Seguridad y Salud", def: "Persona designada por el patrón para ejecutar actividades preventivas y supervisar el cumplimiento de la norma." }
  ],
  obligations: {
    patron: [
      "Designar a un responsable de seguridad y salud (interno o externo).",
      "Proporcionar acceso y facilidades al responsable para realizar sus funciones.",
      "Contar con un diagnóstico integral o por área de las condiciones de seguridad y salud.",
      "Elaborar y actualizar un programa de seguridad y salud al menos una vez al año.",
      "Comunicar el diagnóstico y el programa a trabajadores o comisión de seguridad.",
      "Conservar documentación mínima por dos años.",
      "Capacitar al personal encargado de seguridad y salud."
    ],
    worker: [
      "Participar en las acciones de capacitación relacionadas con seguridad y salud.",
      "Aplicar los procedimientos establecidos en el programa preventivo.",
      "Reportar condiciones inseguras observadas en su área de trabajo.",
      "Colaborar en la investigación de accidentes y cumplimiento de medidas preventivas."
    ]
  },
  sections: [
    { title: "Objetivo", icon: "Target", content: "Establecer las funciones y actividades de los servicios preventivos que deben realizar los centros de trabajo para evitar accidentes y enfermedades." },
    { title: "Campo de aplicación", icon: "Globe", content: "Aplica en todos los centros de trabajo del territorio nacional, sin importar tamaño o giro." },
    { title: "Diagnóstico de Seguridad y Salud (Cap. 6)", icon: "FileText", bullets: ["Identificación de condiciones peligrosas.", "Detección de agentes físicos, químicos y biológicos.", "Identificación de peligros circundantes.", "Revisión de requerimientos normativos aplicables."] },
    { title: "Programa de Seguridad y Salud (Cap. 7)", icon: "ClipboardCheck", bullets: ["Acciones preventivas por cada riesgo identificado.", "Acciones de promoción para la salud.", "Acciones para emergencias y contingencias sanitarias.", "Fechas de ejecución y responsables."] },
    { title: "Funciones del Responsable (Cap. 5)", icon: "UserCheck", bullets: ["Elaborar el diagnóstico del centro de trabajo.", "Elaborar el programa de seguridad y salud.", "Establecer mecanismos ante riesgos graves o inminentes.", "Registrar y dar seguimiento al cumplimiento del programa.", "Proponer mejoras o ajustes cuando sea necesario."] }
  ],
  quiz: [
    { q: "¿Cuál es el documento base que debe elaborar el responsable de seguridad?", options: ["Reglamento interior de la empresa", "Diagnóstico de seguridad y salud", "Permiso de operación"], correct: 1 },
    { q: "¿Cada cuánto debe actualizarse el programa de seguridad y salud?", options: ["Cada mes", "Cada vez que ocurra un accidente", "Al menos una vez al año"], correct: 2 },
    { q: "¿Quién debe proporcionar acceso al centro de trabajo al responsable de seguridad?", options: ["El trabajador", "El patrón", "La comisión de seguridad"], correct: 1 }
  ]
};
