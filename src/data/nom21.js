// src/data/nom21.js
export const nom021Data = {
  id: "nom21",
  level: 1,
  levelTitle: "Nivel 1: Cimientos (Admin)",
  title: "NOM-021-STPS-1994",
  subtitle: "Requerimientos y características de los informes de los riesgos de trabajo.",
  summary: "Norma administrativa que obliga a los patrones a reportar los accidentes y enfermedades de trabajo ante la STPS, estableciendo los formatos oficiales y los plazos críticos para evitar sanciones.",
  
  definitions: [
    { term: "Aviso de Riesgo", def: "Notificación obligatoria que el patrón debe hacer a la autoridad laboral sobre los accidentes o enfermedades ocurridos." },
    { term: "Forma CM-2A", def: "Reporte inicial del accidente o enfermedad. Contiene datos de la empresa, del trabajador y descripción del evento." },
    { term: "Forma CM-2B", def: "Reporte de datos adicionales (costos, días de incapacidad, indemnizaciones) que se presenta al dar de alta al trabajador o tras su defunción." },
    { term: "Estadística Nacional", def: "Recopilación de datos a cargo de la STPS para analizar tendencias de riesgos en el país." }
  ],

  obligations: {
    patron: [
      "Dar aviso por escrito a las autoridades del trabajo (STPS, Delegaciones, Inspectores o Juntas de Conciliación).",
      "Cumplir con el plazo estricto de 72 horas siguientes al accidente o detección de la enfermedad.",
      "Notificar también a la Comisión Mixta de Seguridad e Higiene sobre los riesgos ocurridos.",
      "Llevar un registro interno de los avisos de accidentes y enfermedades.",
      "Utilizar los formatos oficiales (CM-2A y CM-2B) proporcionados por la Secretaría.",
      "Proporcionar información completa para la estadística nacional (razón social, giro, producto, etc.)."
    ],
    // En esta NOM, más que obligaciones del trabajador, son datos que se requieren de él para el reporte
    worker: [
      "Proporcionar nombre completo, domicilio, edad y sexo.",
      "Informar sobre su estado civil y escolaridad.",
      "Detallar su antigüedad en la empresa y en el puesto específico.",
      "Informar sobre su salario diario y categoría.",
      "Describir la parte del cuerpo lesionada y el tipo de lesión."
    ]
  },

  sections: [
    { 
      title: "Plazos Críticos (Regla de las 72 Horas)", 
      icon: "Activity", 
      content: "El incumplimiento del tiempo de reporte es una de las sanciones más comunes:",
      bullets: [
        "Accidentes: Aviso dentro de las 72 horas siguientes a su realización.",
        "Enfermedades: Aviso dentro de las 72 horas siguientes a su detección/dictamen médico.",
        "CM-2B (Cierre): Dentro de las 72 horas siguientes al alta médica o defunción."
      ] 
    },
    { 
      title: "Destinatarios del Aviso", 
      icon: "UserCheck", 
      content: "El patrón puede entregar el reporte en cualquiera de las siguientes instancias:",
      bullets: [
        "Secretaría del Trabajo y Previsión Social (Directamente).",
        "Delegaciones Federales del Trabajo.",
        "Inspector del Trabajo.",
        "Junta de Conciliación Permanente o Junta de Conciliación y Arbitraje."
      ] 
    }
  ],

  // --- GUÍA INTERACTIVA: CLASIFICACIÓN DE CAUSAS (Esencial para llenar la CM-2A) ---
  interactiveGuide: [
    {
      id: "acto",
      name: "Acto Inseguro",
      icon: "User", // Icono de persona
      description: "Acciones realizadas por el trabajador que violan un método seguro (Causa Humana).",
      detailsTitle: "Ejemplos Oficiales (Forma CM-2A)",
      details: [
        "No usar equipo de protección personal.",
        "Operar maquinaria sin autorización.",
        "Hacer inoperantes los dispositivos de seguridad.",
        "Reparar equipo vivo (energizado) o en movimiento.",
        "Adoptar posiciones o actitudes inseguras."
      ]
    },
    {
      id: "condicion",
      name: "Condición Insegura",
      icon: "AlertTriangle", // Icono de alerta
      description: "Situaciones peligrosas derivadas del entorno, instalaciones o equipos (Causa Física).",
      detailsTitle: "Ejemplos Oficiales (Forma CM-2A)",
      details: [
        "Ausencia de avisos preventivos.",
        "Derrame de productos o materiales dispersos.",
        "Dispositivos de seguridad inapropiados o faltantes.",
        "Iluminación o ventilación inapropiada.",
        "Ropa o accesorios de trabajo inapropiados."
      ]
    },
    {
      id: "agente",
      name: "Agente Causal",
      icon: "Target", // Icono de objetivo
      description: "Elemento físico, químico o mecánico que provocó directamente la lesión.",
      detailsTitle: "Clasificación Oficial (CM-2A)",
      details: [
        "Calderas y recipientes a presión.",
        "Herramientas manuales o eléctricas.",
        "Transmisiones mecánicas de fuerza.",
        "Sustancias químicas (Tóxicas, corrosivas).",
        "Superficies de trabajo (Pisos, andamios)."
      ]
    },
    {
      id: "factor",
      name: "Factor Personal",
      icon: "Briefcase", 
      description: "Características internas del individuo que contribuyeron al accidente.",
      detailsTitle: "Clasificación Oficial",
      details: [
        "Actitud inapropiada.",
        "Falta de conocimientos (Capacitación insuficiente).",
        "Defectos orgánicos o psíquicos."
      ]
    }
  ],

  quiz: [
    { q: "¿Cuál es el plazo máximo para presentar el aviso de accidente?", options: ["24 horas", "48 horas", "72 horas"], correct: 2 },
    { q: "¿Qué formato se usa para reportar los costos y días de incapacidad al cerrar el caso?", options: ["CM-2A", "CM-2B", "CM-3"], correct: 1 },
    { q: "¿A quién MÁS se debe avisar además de la autoridad?", options: ["A la Comisión Mixta de Seguridad e Higiene", "Al proveedor de seguros", "A los clientes"], correct: 0 },
    { q: "¿Cómo se clasifica 'No usar el equipo de protección'?", options: ["Condición Insegura", "Acto Inseguro", "Agente"], correct: 1 },
    { q: "¿Cómo se clasifica 'Piso mojado o resbaloso'?", options: ["Acto Inseguro", "Factor Personal", "Condición Insegura"], correct: 2 }
  ]
};