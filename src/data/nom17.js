// src/data/nom17.js
export const nom017Data = {
  id: "nom017",
  level: 4,
  levelTitle: "Nivel 4: Salud y Ergonomía",
  title: "NOM-017-STPS-2008",
  subtitle: "Equipo de Protección Personal – Selección, uso y manejo en el centro de trabajo.",
  summary:
    "Norma que establece los requisitos para la identificación, selección, uso y mantenimiento del Equipo de Protección Personal (EPP) para proteger al trabajador de riesgos capaces de causar lesiones o daños a la salud.",

  /* -------------------------------------------------------------------------- */
  /*                                DEFINICIONES                                */
  /* -------------------------------------------------------------------------- */
  definitions: [
    {
      term: "Equipo de Protección Personal (EPP)",
      def: "Dispositivos o accesorios diseñados para proteger al trabajador de agentes, condiciones peligrosas o riesgos a los que pudiera estar expuesto."
    },
    {
      term: "Riesgo",
      def: "Combinación de la probabilidad de ocurrencia de un accidente o daño relacionado con la exposición a un peligro."
    },
    {
      term: "Peligro",
      def: "Fuente, situación o acto con potencial para causar daño a los trabajadores en forma de lesiones o afectaciones a la salud."
    },
    {
      term: "Evaluación de Necesidades",
      def: "Análisis integral para determinar qué EPP requiere cada trabajador, basado en los riesgos identificados."
    },
    {
      term: "Condiciones de Operación",
      def: "Conjunto de características del proceso, ambiente laboral, herramientas y métodos de trabajo que pueden modificar la selección del EPP."
    }
  ],

  /* -------------------------------------------------------------------------- */
  /*                                 OBLIGACIONES                               */
  /* -------------------------------------------------------------------------- */
  obligations: {
    patron: [
      "Identificar y analizar los riesgos en todas las áreas del centro de trabajo para determinar el EPP necesario.",
      "Proporcionar EPP adecuado de acuerdo con los riesgos identificados.",
      "Asegurar que el EPP cumpla con Normas Oficiales Mexicanas y estándares aplicables.",
      "Capacitar a los trabajadores en el uso, mantenimiento y reemplazo del EPP.",
      "Sustituir EPP defectuoso o dañado sin costo para los trabajadores.",
      "Llevar registros sobre la entrega y mantenimiento del EPP.",
      "Vigilar que los trabajadores usen correctamente el EPP entregado."
    ],
    worker: [
      "Usar el EPP proporcionado conforme a la capacitación recibida.",
      "Cuidar y mantener en buen estado el EPP asignado.",
      "Notificar al patrón sobre daños, pérdidas o deterioro del EPP.",
      "Participar en la capacitación relacionada con el uso del EPP.",
      "Reportar condiciones peligrosas relacionadas con los riesgos a los que están expuestos."
    ]
  },

  /* -------------------------------------------------------------------------- */
  /*                         INTERACTIVE GUIDE – TABLA A.1                      */
  /* -------------------------------------------------------------------------- */
  bodyParts: [
    {
      id: "cabeza",
      name: "Cabeza",
      icon: "HardHat",
      risks: [
        "Golpes por objetos que caen",
        "Proyección de partículas",
        "Impactos contra superficies duras",
        "Contactos eléctricos indirectos"
      ],
      epp: [
        "Casco dieléctrico",
        "Casco con suspensión interna",
        "Casco con barbuquejo",
        "Protector facial con visera"
      ]
    },
    {
      id: "ojos",
      name: "Ojos",
      icon: "Eye",
      risks: [
        "Proyección de partículas",
        "Luz intensa o radiación UV",
        "Vapores y gases irritantes",
        "Salpicaduras químicas"
      ],
      epp: [
        "Goggles de protección",
        "Careta para salpicaduras",
        "Lentes contra radiación UV/IR",
        "Goggles indirectos para químicos"
      ]
    },
    {
      id: "oidos",
      name: "Oídos",
      icon: "Ear",
      risks: [
        "Ruido continuo mayor a 85 dB",
        "Golpes de ruido impulsivo",
        "Ambientes con maquinaria ruidosa"
      ],
      epp: [
        "Tapones auditivos",
        "Orejeras tipo copa",
        "Protectores auditivos dieléctricos"
      ]
    },
    {
      id: "viaRespiratoria",
      name: "Vía Respiratoria",
      icon: "Wind",
      risks: [
        "Polvos y partículas suspendidas",
        "Gases y vapores tóxicos",
        "Ambientes con oxígeno deficiente",
        "Exposición a humos metálicos"
      ],
      epp: [
        "Respirador de media cara",
        "Respirador con cartucho químico",
        "Filtro P100 para partículas finas",
        "Equipo autónomo de respiración (SCBA)"
      ]
    },
    {
      id: "manos",
      name: "Manos",
      icon: "Hand",
      risks: [
        "Cortes o laceraciones",
        "Aplastamientos",
        "Temperaturas extremas",
        "Sustancias corrosivas"
      ],
      epp: [
        "Guantes anticorte",
        "Guantes térmicos",
        "Guantes químicos nitrilo/neopreno",
        "Guantes dieléctricos"
      ]
    },
    {
      id: "pies",
      name: "Pies",
      icon: "Footprints",
      risks: [
        "Aplastamiento por objetos",
        "Pisos resbalosos",
        "Choque eléctrico",
        "Penetración de objetos"
      ],
      epp: [
        "Calzado con casquillo",
        "Bota dieléctrica",
        "Suela antiderrapante",
        "Puntera de seguridad"
      ]
    }
  ],

  /* -------------------------------------------------------------------------- */
  /*                                   SECCIONES                                */
  /* -------------------------------------------------------------------------- */
  sections: [
    {
      title: "Evaluación de Riesgos (Base de la Selección del EPP)",
      icon: "AlertTriangle",
      bullets: [
        "Identificar peligros físicos, químicos, biológicos y ergonómicos.",
        "Evaluar el nivel de exposición del trabajador.",
        "Determinar si existen medidas de ingeniería o administrativas antes de recurrir al EPP.",
        "Seleccionar el tipo específico de EPP según la Tabla A.1."
      ]
    },
    {
      title: "Capacitación Obligatoria",
      icon: "BookOpen",
      bullets: [
        "Instrucciones de colocación y ajuste del EPP.",
        "Limitaciones de uso y protección.",
        "Procedimiento de limpieza y mantenimiento.",
        "Reconocimiento de EPP dañado o defectuoso."
      ]
    },
    {
      title: "Condiciones del EPP",
      icon: "Shield",
      bullets: [
        "Debe ser compatible entre sí (ej: casco + careta).",
        "Sin daños visibles, desgaste crítico o fisuras.",
        "Cumplir con Normas Oficiales y estándares internacionales.",
        "Proporcionado sin costo al trabajador."
      ]
    }
  ],

  /* -------------------------------------------------------------------------- */
  /*                                   QUIZ                                     */
  /* -------------------------------------------------------------------------- */
  quiz: [
    {
      q: "¿Cuál es la base principal para seleccionar el EPP?",
      options: ["El presupuesto de la empresa", "La moda y estética del equipo", "La evaluación de riesgos"],
      correct: 2
    },
    {
      q: "¿Cuál es una obligación del patrón?",
      options: [
        "Comprar EPP solo si el trabajador lo solicita",
        "Capacitar en uso y mantenimiento del EPP",
        "Permitir usar cualquier EPP sin revisión"
      ],
      correct: 1
    },
    {
      q: "¿Cuál opción corresponde a riesgo para los ojos?",
      options: ["Proyección de partículas", "Ruido mayor a 85 dB", "Temperaturas extremas"],
      correct: 0
    },
    {
      q: "¿Quién debe notificar sobre daño o deterioro del EPP?",
      options: ["El patrón", "La comisión de seguridad", "El trabajador"],
      correct: 2
    },
    {
      q: "¿Qué EPP se usa para exposición a polvos finos?",
      options: ["Guantes químicos", "Respirador con filtro P100", "Calzado dieléctrico"],
      correct: 1
    }
  ]
};
