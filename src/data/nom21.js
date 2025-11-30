// src/data/nom21.js
export const nom021Data = {
  id: "nom021",
  code: "NOM-021-STPS-1993",
  title: "Seguridad e Higiene — Evaluación de las condiciones ambientales de trabajo",
  subtitle: "Procedimientos para determinar los agentes contaminantes del ambiente laboral.",

  levelTitle: "Nivel 1 — Fundamentos Técnicos",

  summary: `
Esta NOM establece el procedimiento técnico para realizar mediciones, muestreos 
y evaluaciones de agentes físicos, químicos y biológicos dentro del ambiente laboral. 
Define responsabilidades, métodos de evaluación, criterios de referencia, intervalos, 
frecuencias y elaboración de informes. Es una NOM puramente técnica y metrológica, 
usada como base para diagnósticos integrales de seguridad e higiene.
`,

  definitions: [
    {
      term: "Condiciones ambientales de trabajo",
      def: "Factores presentes en el ambiente laboral que pueden modificar el estado de salud del trabajador. Incluyen agentes físicos, químicos y biológicos."
    },
    {
      term: "Agente contaminante",
      def: "Cualquier elemento, sustancia o forma de energía capaz de alterar la salud del trabajador por exposición directa o prolongada."
    },
    {
      term: "Muestreo ambiental",
      def: "Proceso de recopilación sistemática de muestras de aire, ruido, iluminación, vibración, contaminantes u otros factores ambientales."
    },
    {
      term: "Evaluación",
      def: "Interpretación de resultados para determinar si los valores obtenidos cumplen con los límites máximos permisibles establecidos por la normatividad."
    },
    {
      term: "Diagnóstico de seguridad e higiene",
      def: "Documento técnico que integra resultados de mediciones y análisis del ambiente laboral."
    },
  ],

  obligations: {
    patron: [
      "Realizar evaluaciones periódicas de las condiciones ambientales.",
      "Contratar laboratorios acreditados o personal competente para la medición técnica.",
      "Asegurar el mantenimiento periódico de instrumentos de medición.",
      "Aplicar medidas correctivas cuando los niveles excedan los valores permisibles.",
      "Informar a los trabajadores sobre los resultados y riesgos identificados.",
      "Llevar registros de mediciones por un mínimo de 5 años.",
    ],
    worker: [
      "Participar en los estudios de medición cuando sea requerido.",
      "Utilizar el equipo de protección personal asignado.",
      "Reportar de inmediato olores, irritaciones, ruido excesivo u otras molestias.",
      "Cooperar con el personal de muestreo evitando alterar los instrumentos.",
    ]
  },

  sections: [
    {
      title: "Clasificación de agentes contaminantes",
      icon: "Layers",
      bullets: [
        "Agentes físicos: ruido, vibración, iluminación, radiación ionizante y no ionizante, presión ambiental.",
        "Agentes químicos: vapores, nieblas, gases, partículas, humo metálico y solventes.",
        "Agentes biológicos: bacterias, hongos, virus y toxinas en ambientes controlados o húmedos.",
      ],
    },
    {
      title: "Metodología de muestreo",
      icon: "ClipboardCheck",
      bullets: [
        "Determinación del agente y parámetros.",
        "Selección del equipo de medición adecuado.",
        "Calibración previa y posterior a la medición.",
        "Identificación de áreas críticas de exposición.",
        "Trazabilidad metrológica de los instrumentos.",
      ],
    },
    {
      title: "Frecuencias y criterios de evaluación",
      icon: "Clock",
      bullets: [
        "Muestreos iniciales para establecer línea base.",
        "Reevaluaciones posteriores a cambios en procesos.",
        "Evaluaciones extraordinarias después de incidentes.",
        "Periodicidad mínima anual en áreas de riesgo.",
      ],
    },
    {
      title: "Informe técnico de resultados",
      icon: "FileText",
      bullets: [
        "Identificación del área y proceso evaluado.",
        "Nombre del técnico responsable y acreditaciones.",
        "Descripción del procedimiento aplicado.",
        "Tabla de valores obtenidos vs límites permisibles.",
        "Recomendaciones y acciones correctivas.",
      ],
    },
    {
      title: "Instrumentos de medición",
      icon: "Target",
      bullets: [
        "Dosímetros de ruido de integración.",
        "Bombas de muestreo de aire.",
        "Luxómetros con fotocelda corregida.",
        "Medidores de vibración de tres ejes.",
        "Detectores portátiles de gases tóxicos.",
      ],
    },
  ],

  interactiveGuide: [
    {
      id: "ambiental",
      icon: "Wind",
      name: "Agentes ambientales",
      description: "Identifica los factores que requieren medición periódica.",
      detailsTitle: "Identificación de agentes ambientales",
      details: [
        "Reconocer áreas con emisión de ruido continuo o impactante.",
        "Detectar vapores o gases percibidos por olor.",
        "Identificar áreas con exposición a calor o frío extremo.",
        "Reportar zonas con microorganismos o humedad persistente.",
      ],
    },
    {
      id: "medicion",
      icon: "Move",
      name: "Técnicas de medición",
      description: "Procedimientos para muestreo confiable.",
      detailsTitle: "Técnicas de medición ambiental",
      details: [
        "Colocación de dosímetros en zonas de máxima exposición.",
        "Ajuste de caudal en bombas de muestreo personal.",
        "Ubicación de sensores según altura respiratoria.",
        "Realizar duplicados y controles de campo.",
      ],
    },
    {
      id: "control",
      icon: "Shield",
      name: "Control y corrección",
      description: "Acciones cuando los valores superan los límites.",
      detailsTitle: "Acciones Correctivas",
      details: [
        "Aislar o encapsular fuentes contaminantes.",
        "Sustitución de sustancias peligrosas.",
        "Incremento de ventilación general y localizada.",
        "Rotación de personal en áreas de mayor exposición.",
      ],
    },
  ],

  quiz: [
    {
      q: "¿Qué es un agente contaminante según la NOM-021?",
      options: [
        "Cualquier factor presente que pueda alterar la salud del trabajador.",
        "Únicamente sustancias químicas peligrosas.",
        "Solo microorganismos biológicos detectables.",
      ],
      correct: 0,
    },
    {
      q: "¿Qué debe contener un informe técnico?",
      options: [
        "Solo los valores numéricos de medición.",
        "Identificación del área, método aplicado y tabla comparativa con límites.",
        "Notas personales del evaluador.",
      ],
      correct: 1,
    },
    {
      q: "¿Qué instrumento se usa para medir ruido?",
      options: [
        "Luxómetro.",
        "Dosímetro de integración.",
        "Termómetro ambiental.",
      ],
      correct: 1,
    },
    {
      q: "¿Cuál es una obligación del patrón?",
      options: [
        "Evitar entregar los resultados al trabajador.",
        "Realizar evaluaciones periódicas del ambiente laboral.",
        "Impedir el uso de EPP en mediciones.",
      ],
      correct: 1,
    },
  ],
};
