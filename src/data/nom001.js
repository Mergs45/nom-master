// src/data/nom001.js
export const nom001Data = {
  id: "nom001",
  code: "NOM-001",
  level: 2,
  levelTitle: "Nivel 2: Seguridad Eléctrica",
  title: "NOM-001-STPS-2008",
  subtitle: "Edificios, locales, instalaciones y áreas en los centros de trabajo – Condiciones de seguridad.",
  summary:
    "Establece las condiciones mínimas de seguridad que deben existir en los centros de trabajo donde se maneja energía eléctrica, así como medidas preventivas, mantenimiento, señalización y evaluación de riesgos eléctricos.",

  // ------------------------------------------------------
  // DEFINICIONES
  // ------------------------------------------------------
  definitions: [
    {
      term: "Instalación eléctrica",
      def: "Conjunto de circuitos, equipos, conductores, tableros, canalizaciones y dispositivos destinados a la generación, transformación, transmisión, distribución o utilización de energía eléctrica."
    },
    {
      term: "Riesgo eléctrico",
      def: "Posibilidad de daño por contactos directos o indirectos, arco eléctrico, fallas a tierra o sobrecargas."
    },
    {
      term: "Mantenimiento",
      def: "Acciones preventivas o correctivas necesarias para asegurar el funcionamiento seguro de las instalaciones eléctricas."
    },
    {
      term: "Contacto directo",
      def: "Cuando una persona toca de manera accidental o intencional una parte activa de la instalación eléctrica."
    },
    {
      term: "Contacto indirecto",
      def: "Contacto con partes metálicas que no deberían estar energizadas, pero lo están por una falla."
    }
  ],

  // ------------------------------------------------------
  // OBLIGACIONES
  // ------------------------------------------------------
  obligations: {
    patron: [
      "Evaluar los riesgos eléctricos presentes en las áreas de trabajo.",
      "Contar con planos actualizados de la instalación eléctrica.",
      "Mantener en condiciones seguras las instalaciones eléctricas conforme al mantenimiento preventivo.",
      "Asegurar que los conductores, canalizaciones, tableros y protecciones sean los adecuados.",
      "Proveer señalización preventiva en lugares con riesgo eléctrico.",
      "Capacitar a los trabajadores expuestos a riesgos eléctricos.",
      "Contar con equipo de protección personal (EPP) adecuado para trabajos eléctricos.",
      "Garantizar que solo personal autorizado realice trabajos eléctricos."
    ],
    worker: [
      "Reportar condiciones inseguras relacionadas con instalaciones eléctricas.",
      "Cumplir los procedimientos de seguridad establecidos.",
      "Usar el equipo de protección personal proporcionado.",
      "Evitar manipular instalaciones eléctricas sin autorización.",
      "Participar en la capacitación impartida por el patrón."
    ]
  },

  // ------------------------------------------------------
  // SECCIONES TÉCNICAS
  // ------------------------------------------------------
  sections: [
    {
      title: "Requisitos de Instalaciones Eléctricas",
      icon: "HardHat",
      bullets: [
        "Canalizaciones y conductores deben tener resistencia adecuada y estar en buen estado.",
        "Los tableros de distribución deben contar con protecciones termo-magnéticas.",
        "Debe haber continuidad en los sistemas de puesta a tierra.",
        "Los interruptores y dispositivos de protección deben estar identificados."
      ]
    },
    {
      title: "Protecciones contra Riesgos Eléctricos",
      icon: "AlertTriangle",
      bullets: [
        "Uso de interruptores diferenciales donde exista humedad o riesgo de contacto indirecto.",
        "Protección contra sobrecorrientes con dispositivos calibrados.",
        "Cubiertas protectoras en partes energizadas expuestas."
      ]
    },
    {
      title: "Señalización y Advertencias",
      icon: "FileText",
      bullets: [
        "Letreros visibles en tableros eléctricos.",
        "Indicaciones de voltaje elevado.",
        "Identificación de áreas restringidas por riesgo eléctrico."
      ]
    },
    {
      title: "Mantenimiento Eléctrico",
      icon: "ClipboardCheck",
      bullets: [
        "Debe ser realizado por personal capacitado y autorizado.",
        "El mantenimiento preventivo debe documentarse.",
        "Revisión periódica de conexiones, conductores y dispositivos de protección.",
        "Pruebas de aislamiento y continuidad."
      ]
    },
    {
      title: "Trabajos en Instalaciones Energizadas",
      icon: "Activity",
      bullets: [
        "Solo personal autorizado y con EPP puede intervenir.",
        "Debe haber procedimientos escritos para trabajos energizados.",
        "Uso de herramientas dieléctricas, guantes aislantes y protectores faciales.",
        "Bloqueo y etiquetado obligatorio para evitar energización accidental."
      ]
    }
  ],

  // ------------------------------------------------------
  // GUÍA INTERACTIVA (EXTRA MEJORADA)
  // ------------------------------------------------------
  interactiveGuide: [
    {
      id: "evaluacion",
      icon: "HardHat",
      name: "Evaluación de Instalaciones",
      description: "Identificación de condiciones inseguras en sistemas eléctricos.",
      detailsTitle: "Inspección de Instalación Eléctrica",
      details: [
        "Verificación del calibre de conductores.",
        "Revisión de continuidad en tierra física.",
        "Estado físico de canalizaciones.",
        "Identificación de protecciones faltantes.",
        "Detección de sobrecalentamientos o falsos contactos."
      ]
    },
    {
      id: "protecciones",
      icon: "Shield",
      name: "Protecciones Eléctricas",
      description: "Dispositivos de seguridad obligatorios.",
      detailsTitle: "Sistemas de Protección",
      details: [
        "Interruptores termomagnéticos.",
        "Fusibles calibrados.",
        "Interruptores diferenciales.",
        "Protección contra arco eléctrico.",
        "Sistemas de paro de emergencia."
      ]
    },
    {
      id: "mantenimiento",
      icon: "ClipboardCheck",
      name: "Mantenimiento Preventivo",
      description: "Revisión periódica del sistema eléctrico.",
      detailsTitle: "Plan de Mantenimiento",
      details: [
        "Limpieza y ajuste de tableros.",
        "Revisión de torque en conexiones.",
        "Prueba de aislamiento.",
        "Identificación de humedad o corrosión.",
        "Registro documental obligatorio."
      ]
    },
    {
      id: "trabajo_energizado",
      icon: "Activity",
      name: "Trabajo Energizado",
      description: "Indicaciones clave para intervenir en sistemas activos.",
      detailsTitle: "Procedimientos de Trabajo Energizado",
      details: [
        "Permiso escrito antes de intervenir.",
        "Revisión de herramientas dieléctricas.",
        "Verificación de ausencia de energía (prueba – probar – probar).",
        "Uso de EPP contra arco eléctrico.",
        "Supervisión durante trabajos críticos."
      ]
    }
  ],

  // ------------------------------------------------------
  // QUIZ
  // ------------------------------------------------------
  quiz: [
    {
      q: "¿Cuál es el principal documento que debe existir para conocer la instalación eléctrica?",
      options: [
        "Plano actualizado de la instalación eléctrica",
        "Croquis simple del edificio",
        "Inventario de herramientas"
      ],
      correct: 0
    },
    {
      q: "¿Qué tipo de contacto ocurre al tocar una parte activa?",
      options: ["Contacto indirecto", "Contacto directo", "Contacto mixto"],
      correct: 1
    },
    {
      q: "¿Quién puede realizar trabajos en instalaciones energizadas?",
      options: [
        "Cualquier trabajador con experiencia",
        "Solo personal autorizado y capacitado",
        "Supervisores administrativos"
      ],
      correct: 1
    },
    {
      q: "¿Qué equipo es obligatorio para trabajos con riesgo de arco eléctrico?",
      options: [
        "Guantes de carnaza",
        "Protección dieléctrica y facial",
        "Casco estándar"
      ],
      correct: 1
    }
  ]
};
