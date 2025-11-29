// src/data/nom19.js
export const nom019Data = {
  id: "nom19",
  level: 1,
  levelTitle: "Nivel 1: Cimientos (Admin)",
  title: "NOM-019-STPS-2011",
  subtitle: "Constitución, integración, organización y funcionamiento de las comisiones de seguridad e higiene.",
  summary: "Norma obligatoria que establece cómo deben formarse y operar los organismos bipartitos (patrón-trabajador) encargados de prevenir accidentes mediante la investigación y recorridos de verificación.",
  
  definitions: [
    { term: "Comisión (CSH)", def: "Organismo bipartito conformado por igual número de representantes de los trabajadores y del patrón." },
    { term: "Recorridos de Verificación", def: "Revisiones trimestrales para identificar agentes, condiciones peligrosas, actos inseguros e investigar causas de accidentes." },
    { term: "Actos Inseguros", def: "Acciones realizadas por el trabajador que implican una omisión o violación a un método de trabajo seguro." },
    { term: "Condiciones Inseguras", def: "Características inherentes a las instalaciones o procesos que pueden provocar un incidente o accidente." },
    { term: "Accidente de Trabajo", def: "Toda lesión orgánica o perturbación funcional, inmediata o posterior, producida en ejercicio o con motivo del trabajo." }
  ],

  obligations: {
    patron: [
      "Constituir e integrar al menos una comisión en el centro de trabajo.",
      "Designar a sus representantes para participar en la comisión.",
      "Solicitar al sindicato o trabajadores la designación de sus representantes.",
      "Contar con el Acta de Constitución y sus actualizaciones.",
      "Elaborar el Programa Anual de Recorridos dentro de los primeros 30 días del año.",
      "Facilitar el desempeño de la comisión y proporcionar capacitación anual.",
      "Atender y dar seguimiento a las medidas preventivas propuestas por la comisión.",
      "Difundir la relación actualizada de integrantes y los resultados de las investigaciones."
    ],
    worker: [
      "Designar a sus representantes para participar en la comisión.",
      "Participar como miembros de la comisión cuando sean designados.",
      "Proponer medidas para prevenir accidentes en su puesto de trabajo.",
      "Proporcionar información a la comisión para investigar accidentes.",
      "Atender las medidas preventivas que señale el patrón y la comisión.",
      "Recibir la capacitación proporcionada por el patrón."
    ]
  },

  sections: [
    { 
      title: "Reglas de Constitución", 
      icon: "User", 
      content: "La integración depende del número de empleados en el centro de trabajo:",
      bullets: [
        "Menos de 15 trabajadores: 1 Coordinador (Patrón) + 1 Secretario (Trabajador).",
        "15 trabajadores o más: 1 Coordinador, 1 Secretario y los Vocales que se acuerden.",
        "Vigencia de Cargos: 2 años. Los puestos de Coordinador y Secretario se alternan entre patrón y sindicato."
      ] 
    },
    { 
      title: "Operación de la Comisión", 
      icon: "Activity", 
      content: "Actividades críticas para el cumplimiento normativo:",
      bullets: [
        "Acta de Constitución: Debe incluir datos del centro de trabajo, fecha de inicio y firmas.",
        "Programa Anual: Se define en los primeros 30 días del año.",
        "Recorridos Ordinarios: Al menos cada 3 meses (Trimestrales).",
        "Recorridos Extraordinarios: Cuando ocurran accidentes graves, cambios en instalaciones o reportes de peligro."
      ] 
    }
  ],

  // --- GUÍA INTERACTIVA (ROLES DETALLADOS) ---
  interactiveGuide: [
    {
      id: "coordinador",
      name: "Coordinador",
      icon: "UserCheck",
      description: "Preside las reuniones y dirige el funcionamiento. (Alterna cargo cada 2 años)",
      detailsTitle: "Funciones Específicas (Cap. 8.2)",
      details: [
        "Presidir las reuniones de trabajo de la comisión.",
        "Dirigir y coordinar el funcionamiento de la comisión.",
        "Integrar el programa anual de recorridos y presentarlo al patrón.",
        "Consignar en actas los agentes peligrosos y actos inseguros detectados.",
        "Coordinar las investigaciones de accidentes.",
        "Dar seguimiento a la instauración de medidas propuestas."
      ]
    },
    {
      id: "secretario",
      name: "Secretario",
      icon: "FileText",
      description: "Organiza la logística y custodia los documentos. (Alterna cargo cada 2 años)",
      detailsTitle: "Funciones Específicas (Cap. 8.3)",
      details: [
        "Convocar a los integrantes a las reuniones y recorridos.",
        "Apoyar el desarrollo de las reuniones.",
        "Integrar al acta los hallazgos de los recorridos.",
        "Recabar las firmas de los integrantes en las actas.",
        "Mantener bajo custodia las actas y documentos por 2 años.",
        "Integrar el programa anual de capacitación."
      ]
    },
    {
      id: "vocal",
      name: "Vocales",
      icon: "Eye",
      description: "Representantes que vigilan y detectan riesgos en sus áreas específicas.",
      detailsTitle: "Funciones Específicas (Cap. 8.4)",
      details: [
        "Participar en las reuniones y recorridos de verificación.",
        "Detectar y recabar información sobre condiciones peligrosas en su área.",
        "Colaborar en las investigaciones de accidentes.",
        "Revisar las actas de los recorridos.",
        "Apoyar en el asesoramiento a los trabajadores sobre riesgos."
      ]
    }
  ],

  quiz: [
    { q: "¿Cada cuánto deben realizarse los recorridos de verificación ordinarios?", options: ["Mensual", "Bimestral", "Trimestral"], correct: 2 },
    { q: "¿Cuánto tiempo duran los cargos de Coordinador y Secretario?", options: ["1 año", "2 años", "Indefinido"], correct: 1 },
    { q: "¿Quién debe conservar las actas de recorrido bajo su custodia?", options: ["El Patrón", "El Secretario", "El Coordinador"], correct: 1 },
    { q: "¿Qué sucede si hay menos de 15 trabajadores?", options: ["No se hace comisión", "Solo integra el Patrón", "Integran 1 Coordinador y 1 Secretario"], correct: 2 },
    { q: "¿Cuándo se hace una verificación extraordinaria?", options: ["Ante accidentes graves o cambios en instalaciones", "Cada auditoría", "Cuando falta el patrón"], correct: 0 }
  ]
};