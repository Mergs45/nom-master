// src/data/nom30.js
export const nom030Data = {
  id: "nom030",
  level: 1,
  levelTitle: "Nivel 1: Cimientos (Admin)",
  title: "NOM-030-STPS-2009",
  subtitle: "Servicios preventivos de seguridad y salud en el trabajo: funciones y actividades.",
  
  summary:
    "Norma que establece la estructura mínima de los servicios preventivos, su diagnóstico, el programa anual, la documentación requerida y las funciones del responsable de seguridad y salud.",

  // ---------------------------------------------------------------------
  // DEFINICIONES
  // ---------------------------------------------------------------------
  definitions: [
    {
      term: "Diagnóstico de Seguridad y Salud",
      def: "Proceso sistemático para identificar condiciones peligrosas, agentes físicos, químicos o biológicos, así como los requerimientos normativos aplicables al centro de trabajo."
    },
    {
      term: "Programa de Seguridad y Salud",
      def: "Plan preventivo anual con actividades, responsables, fechas de ejecución, medidas de control y acciones de promoción para evitar accidentes y enfermedades."
    },
    {
      term: "Servicio Preventivo",
      def: "Conjunto de actividades internas o externas enfocadas en la prevención de incidentes, cumplimiento normativo y mejora de condiciones laborales."
    },
    {
      term: "Responsable de Seguridad y Salud",
      def: "Persona designada por el patrón para ejecutar las funciones y actividades preventivas, dar seguimiento al programa y asesorar ante riesgos graves o inminentes."
    }
  ],

  // ---------------------------------------------------------------------
  // OBLIGACIONES
  // ---------------------------------------------------------------------
  obligations: {
    patron: [
      "Designar un responsable de seguridad y salud en el trabajo, interno o externo.",
      "Proporcionar acceso, información y facilidades necesarias al responsable para realizar el diagnóstico.",
      "Contar con un diagnóstico de seguridad y salud del centro de trabajo o por áreas.",
      "Elaborar y actualizar anualmente el programa de seguridad y salud.",
      "Informar el contenido del diagnóstico y del programa a los trabajadores y a la Comisión de Seguridad e Higiene.",
      "Conservar la documentación (diagnóstico y programa) durante al menos dos años.",
      "Asegurar la capacitación del personal encargado de seguridad y salud."
    ],
    worker: [
      "Participar en la capacitación impartida sobre seguridad y salud.",
      "Aplicar los procedimientos y medidas del programa preventivo.",
      "Reportar condiciones inseguras detectadas en el centro de trabajo.",
      "Colaborar en la investigación de accidentes y cumplimiento de acciones preventivas."
    ]
  },

  // ---------------------------------------------------------------------
  // SECCIÓN INTERACTIVA — TABS NUEVOS
  // ---------------------------------------------------------------------
  tabs: {
    diagnostico: {
      label: "Diagnóstico",
      icon: "FileText",
      title: "Elementos del Diagnóstico de Seguridad y Salud",
      bullets: [
        "Identificación de condiciones peligrosas o inseguras.",
        "Detección de agentes físicos (ruido, vibración, radiación).",
        "Evaluación de riesgos químicos o biológicos según procesos.",
        "Revisión del cumplimiento de las normas aplicables.",
        "Determinación de riesgos circundantes o colaterales.",
        "Análisis de accidentes anteriores y su clasificación.",
        "Identificación de medidas de control existentes y su eficacia."
      ]
    },

    programa: {
      label: "Programa",
      icon: "ClipboardCheck",
      title: "Contenido del Programa de Seguridad y Salud",
      bullets: [
        "Acciones preventivas para cada riesgo identificado.",
        "Medidas correctivas para condiciones inseguras detectadas.",
        "Acciones de promoción de la salud (capacitaciones, campañas).",
        "Preparación ante emergencias y contingencias sanitarias.",
        "Definición de responsables directos por actividad.",
        "Cronograma anual con fechas de ejecución.",
        "Seguimiento mensual del avance del programa."
      ]
    },

    funciones: {
      label: "Funciones",
      icon: "UserCheck",
      title: "Funciones del Responsable del Servicio Preventivo",
      bullets: [
        "Elaborar el diagnóstico de seguridad y salud en el trabajo.",
        "Diseñar y actualizar el programa anual preventivo.",
        "Implementar mecanismos inmediatos ante riesgos graves o inminentes.",
        "Registrar y dar seguimiento al cumplimiento de actividades del programa.",
        "Asesorar al patrón y a los trabajadores en temas de seguridad.",
        "Supervisar la aplicación de medidas preventivas y correctivas.",
        "Proponer mejoras continuas en seguridad, higiene y salud laboral."
      ]
    }
  },

  // ---------------------------------------------------------------------
  // SECCIONES (LAS NORMALES DEL MÓDULO)
  // ---------------------------------------------------------------------
  sections: [
    {
      title: "Objetivo",
      icon: "Target",
      content:
        "Establecer las funciones y actividades de los servicios preventivos que deben realizar los centros de trabajo para evitar accidentes y enfermedades laborales."
    },
    {
      title: "Campo de Aplicación",
      icon: "Globe",
      content: "Aplica a todos los centros de trabajo del territorio nacional, sin importar tamaño, actividad económica o número de trabajadores."
    },
    {
      title: "Diagnóstico de Seguridad y Salud",
      icon: "FileText",
      bullets: [
        "Identificación de condiciones peligrosas o inseguras.",
        "Evaluación de agentes físicos, químicos y biológicos.",
        "Revisión de la normatividad aplicable al centro.",
        "Detección de riesgos colaterales y circundantes.",
        "Análisis de accidentes y enfermedades previas."
      ]
    },
    {
      title: "Programa de Seguridad y Salud",
      icon: "ClipboardCheck",
      bullets: [
        "Acciones preventivas basadas en el diagnóstico.",
        "Acciones específicas para emergencias.",
        "Promoción de salud y campañas formativas.",
        "Cronograma anual y responsables.",
        "Evidencias de cumplimiento."
      ]
    },
    {
      title: "Funciones del Responsable",
      icon: "UserCheck",
      bullets: [
        "Elaborar el diagnóstico preventivo.",
        "Diseñar, implementar y actualizar el programa anual.",
        "Informar a la comisión o trabajadores sobre riesgos detectados.",
        "Aplicar mecanismos ante riesgos graves o inminentes.",
        "Registrar el cumplimiento del programa.",
        "Proponer mejoras continuas."
      ]
    }
  ],

  // ---------------------------------------------------------------------
  // QUIZ FINAL
  // ---------------------------------------------------------------------
  quiz: [
    {
      q: "¿Qué documento debe elaborarse primero según la NOM-030?",
      options: ["Permiso de funcionamiento", "Diagnóstico de seguridad y salud", "Lista de asistencia"],
      correct: 1
    },
    {
      q: "¿Cada cuánto debe actualizarse el programa de seguridad y salud?",
      options: ["Cada mes", "Cada año", "Cada cinco años"],
      correct: 1
    },
    {
      q: "¿Quién debe proporcionar acceso al centro de trabajo para realizar el diagnóstico?",
      options: ["El patrón", "El trabajador", "El supervisor externo"],
      correct: 0
    },
    {
      q: "¿Cuál es una función del Responsable de Seguridad y Salud?",
      options: [
        "Revisar nóminas",
        "Actualizar el programa de seguridad y salud",
        "Contratar personal"
      ],
      correct: 1
    },
    {
      q: "¿Qué elemento NO forma parte del diagnóstico?",
      options: [
        "Detección de agentes químicos",
        "Análisis de riesgos circundantes",
        "Asignación de sueldos"
      ],
      correct: 2
    }
  ]
};
