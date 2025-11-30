// src/data/nom19.js
export const nom019Data = {
  id: "nom019",
  level: 1,
  levelTitle: "Nivel 1: Cimientos (Admin)",
  title: "NOM-019-STPS-2011",
  subtitle: "Constitución, organización y funcionamiento de las Comisiones de Seguridad e Higiene.",
  summary:
    "Esta norma establece la obligación de contar con una Comisión de Seguridad e Higiene, sus funciones, atribuciones, procedimientos de investigación, estructura mínima y responsabilidades formales.",

  definitions: [
    {
      term: "Comisión de Seguridad e Higiene",
      def: "Órgano mixto encargado de identificar peligros, investigar accidentes y promover medidas preventivas en el centro de trabajo.",
    },
    {
      term: "Centro de Trabajo",
      def: "Cualquier lugar en donde se realicen actividades laborales y exista personal subordinado.",
    },
    {
      term: "Accidente de Trabajo",
      def: "Lesión física o perturbación funcional inmediata o posterior, originada repentinamente en el ejercicio o con motivo del trabajo.",
    },
    {
      term: "Recorrido de Verificación",
      def: "Inspección física que la Comisión realiza para detectar condiciones inseguras o actos inseguros.",
    },
  ],

  obligations: {
    patron: [
      "Constituir formalmente la Comisión de Seguridad e Higiene.",
      "Designar a sus representantes dentro de la Comisión.",
      "Facilitar tiempos, recursos y documentación para que la Comisión realice sus funciones.",
      "Proporcionar información sobre accidentes, actividades peligrosas y agentes que puedan generar riesgos.",
      "Atender y dar seguimiento a las medidas preventivas emitidas por la Comisión.",
      "Mantener disponibles las actas de verificación, investigación y recorridos.",
    ],
    worker: [
      "Designar a sus representantes para participar en la Comisión.",
      "Participar en los recorridos y análisis de riesgos.",
      "Reportar condiciones inseguras y proponer mejoras.",
      "Colaborar en la investigación de accidentes.",
      "Cumplir medidas preventivas acordadas por la Comisión.",
    ],
  },

  sections: [
    {
      title: "Integración Mínima de la Comisión",
      icon: "UserCheck",
      content:
        "La Comisión está integrada de manera mixta, con igual número de representantes del patrón y de los trabajadores.",
      bullets: [
        "Un Coordinador (designado por el patrón).",
        "Un Secretario (representante de los trabajadores).",
        "Vocales de ambos sectores, dependiendo del tamaño del centro de trabajo.",
      ],
    },
    {
      title: "Funciones Principales",
      icon: "ClipboardCheck",
      bullets: [
        "Investigar accidentes y verificar causas.",
        "Realizar recorridos de verificación periódicos.",
        "Determinar medidas preventivas y correctivas.",
        "Dar seguimiento al cumplimiento de medidas implementadas.",
        "Emitir actas y registros oficiales.",
      ],
    },
    {
      title: "Reglas de Constitución",
      icon: "FileText",
      content:
        "El acta constitutiva de la Comisión debe contener datos específicos y firmarse por ambas partes.",
      bullets: [
        "Nombre o razón social del centro de trabajo.",
        "Domicilio y giro.",
        "Datos del patrón o representante legal.",
        "Nombre de integrantes designados por cada parte.",
        "Fecha de constitución.",
      ],
    },
  ],

  // ✔️ GUÍA INTERACTIVA: ROLES OFICIALES
  interactiveGuide: [
    {
      id: "coordinador",
      name: "Coordinador",
      icon: "UserCheck",
      description:
        "Responsable de conducir las reuniones, organizar las investigaciones y garantizar el cumplimiento de medidas preventivas.",
      detailsTitle: "Funciones del Coordinador",
      details: [
        "Convocar a reuniones ordinarias y extraordinarias.",
        "Organizar los recorridos de verificación.",
        "Asegurar que se elaboren los formatos oficiales.",
        "Coordinar la investigación de accidentes.",
        "Supervisar la ejecución de las medidas propuestas.",
      ],
    },
    {
      id: "secretario",
      name: "Secretario",
      icon: "User",
      description:
        "Da soporte técnico en reuniones, levanta actas oficiales y registra evidencia de los recorridos e investigaciones.",
      detailsTitle: "Funciones del Secretario",
      details: [
        "Levantar actas de constitución, verificación e investigación.",
        "Integrar archivos y expedientes de la Comisión.",
        "Registrar asistencia y acuerdos.",
        "Resguardar evidencia fotográfica y documental.",
        "Reportar incumplimientos a la Comisión.",
      ],
    },
    {
      id: "vocal",
      name: "Vocal",
      icon: "Activity",
      description:
        "Participa directamente en recorridos, identifica condiciones inseguras y elabora propuestas de mejora.",
      detailsTitle: "Funciones del Vocal",
      details: [
        "Participar en recorridos de verificación.",
        "Detectar condiciones inseguras.",
        "Emitir recomendaciones preventivas.",
        "Apoyar en investigación de accidentes.",
        "Reportar hallazgos al Coordinador o Secretario.",
      ],
    },
  ],

  quiz: [
    {
      q: "¿Cuál es la naturaleza de la Comisión de Seguridad e Higiene?",
      options: [
        "Un órgano únicamente del patrón",
        "Un órgano mixto entre patrón y trabajadores",
        "Un departamento especializado externo",
      ],
      correct: 1,
    },
    {
      q: "¿Quién funge como Coordinador de la Comisión?",
      options: ["Un representante del patrón", "Un trabajador", "Un asesor externo"],
      correct: 0,
    },
    {
      q: "¿Qué documento formaliza la creación de la Comisión?",
      options: ["Acta Constitutiva", "Permiso STPS", "Informe de Riesgos"],
      correct: 0,
    },
    {
      q: "¿Qué actividad corresponde a los Vocales?",
      options: [
        "Convocar reuniones",
        "Levantar actas y registros",
        "Participar en recorridos de verificación",
      ],
      correct: 2,
    },
    {
      q: "¿Qué hace el Secretario?",
      options: [
        "Investiga accidentes directamente con la STPS",
        "Levanta actas y resguarda evidencia",
        "Supervisa medidas correctivas",
      ],
      correct: 1,
    },
  ],
};
