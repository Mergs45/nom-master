// src/data/nom001.js
export const nom001Data = {
  id: "nom001",
  level: 2,
  levelTitle: "Nivel 2: Infraestructura",
  title: "NOM-001-STPS-2008",
  subtitle: "Edificios, locales, instalaciones y áreas en los centros de trabajo - Condiciones de seguridad.",
  summary: "Establece las condiciones de seguridad en la infraestructura física (pisos, techos, paredes, escaleras, rampas) para prevenir riesgos como caídas, resbalones y colapsos estructurales.",
  
  definitions: [
    { term: "Condición Insegura", def: "Circunstancia física peligrosa en el ambiente de trabajo (ej. piso resbaloso, falta de barandal)[cite: 58]." },
    { term: "Escalas Fijas", def: "Peldaños sujetos permanentemente a una superficie vertical (ej. para subir a silos o azoteas)[cite: 60]." },
    { term: "Escalas Móviles", def: "Aparato portátil (escalera de mano) para subir o bajar de un nivel a otro[cite: 61]." },
    { term: "Conservación", def: "Mantenimiento preventivo y correctivo para asegurar la seguridad de las instalaciones[cite: 59]." }
  ],

  obligations: {
    patron: [
      "Conservar las instalaciones en condiciones seguras (orden, limpieza, reparaciones)[cite: 73].",
      "Realizar verificaciones oculares cada 12 meses para identificar daños[cite: 74].",
      "Realizar verificaciones extraordinarias después de sismos, incendios o eventos climáticos[cite: 76].",
      "Contar con sanitarios, retretes y lavabos limpios y seguros[cite: 79].",
      "Proporcionar información a los trabajadores sobre el uso seguro de las áreas[cite: 82]."
    ],
    worker: [
      "Informar al patrón sobre las condiciones inseguras detectadas (ej. un escalón roto, una lámpara fundida)[cite: 84].",
      "Dar a las áreas el uso para el que fueron diseñadas (no usar techos como almacén si no lo son)[cite: 86].",
      "Participar en la conservación del centro de trabajo (orden y limpieza)[cite: 86]."
    ]
  },

  sections: [
    { 
      title: "Pisos y Pasillos", 
      icon: "Layers", 
      content: "La base de la seguridad diaria:",
      bullets: [
        "Deben mantenerse limpios y ordenados[cite: 89].",
        "Los pasillos deben estar delimitados (líneas amarillas de 5cm)[cite: 92].",
        "Deben ser llanos (planos) y antiderrapantes[cite: 125].",
        "Las aberturas (coladeras, registros) deben tener protecciones o señalización[cite: 128]."
      ] 
    },
    { 
      title: "Techos y Paredes", 
      icon: "Home", 
      content: "Estructura y protección:",
      bullets: [
        "Techos: Deben permitir la salida de líquidos (drenaje) y soportar cargas solo si fueron diseñados para ello[cite: 105, 108].",
        "Paredes: Colores que eviten reflexión excesiva (deslumbramiento) y señalización en zonas de riesgo[cite: 112, 117]."
      ] 
    }
  ],

  // --- GUÍA INTERACTIVA: INSPECTOR DE DIMENSIONES ---
  interactiveGuide: [
    {
      id: "escaleras",
      name: "Escaleras Fijas",
      icon: "Menu", 
      description: "Elementos estructurales para comunicación entre niveles.",
      detailsTitle: "Medidas Reglamentarias (7.5)",
      details: [
        "Ancho mínimo: 56 cm (tramos rectos)[cite: 132].",
        "Huella mínima: 25 cm[cite: 145].",
        "Peralte máximo: 23 cm[cite: 145].",
        "Altura de barandal: 90 cm (±10 cm)[cite: 192].",
        "Todas las huellas y peraltes deben ser iguales (variación máx ±0.5 cm)[cite: 138]."
      ]
    },
    {
      id: "rampas",
      name: "Rampas",
      icon: "Minimize2", 
      description: "Superficies inclinadas para tránsito de personas o materiales.",
      detailsTitle: "Reglas de Pendiente y Seguridad (7.6)",
      details: [
        "Pendiente máx (Personas): 10%[cite: 215].",
        "Pendiente máx (Mantenimiento): 17%[cite: 216].",
        "Ancho: Suficiente para evitar obstrucciones o el ancho del vehículo + 60cm[cite: 227].",
        "Barandal lateral: Obligatorio si la altura es mayor a 150 cm[cite: 228].",
        "Distancia libre al techo: Mínimo 200 cm[cite: 236]."
      ]
    },
    {
      id: "escalas_fijas",
      name: "Escalas Fijas (Gato)",
      icon: "ArrowUp", 
      description: "Escaleras verticales sujetas a estructuras (Silos, Torres).",
      detailsTitle: "Requisitos de Seguridad (7.7.1)",
      details: [
        "Ancho mínimo: 40 cm[cite: 249].",
        "Distancia entre peldaños: Máx 38 cm[cite: 254].",
        "Separación pared-peldaño: Mínimo 18 cm (para meter el pie)[cite: 264].",
        "Jaula de seguridad: Obligatoria a partir de 200 cm de altura[cite: 266].",
        "Descansos: Cada 10 metros de altura[cite: 268]."
      ]
    },
    {
      id: "escalas_moviles",
      name: "Escalas Portátiles",
      icon: "Move", 
      description: "Escaleras de mano (tijera o extensión).",
      detailsTitle: "Reglas de Uso (7.7.2)",
      details: [
        "Regla de Inclinación: 1 metro de separación por cada 4 de altura (1:4)[cite: 282].",
        "Solo usar si tienen zapatas antiderrapantes[cite: 286].",
        "Prohibido usar si tienen grasa o aceite[cite: 287].",
        "Para trabajos eléctricos: Deben ser de material no conductor (fibra de vidrio/madera)[cite: 288]."
      ]
    }
  ],

  quiz: [
    { q: "¿Cuál es la altura reglamentaria para un barandal de escalera?", options: ["80 cm", "90 cm (±10)", "110 cm"], correct: 1 }, // [cite: 192]
    { q: "¿Cada cuánto tiempo se debe verificar ocularmente el centro de trabajo?", options: ["Cada 6 meses", "Cada 12 meses", "Cada 2 años"], correct: 1 }, // [cite: 74]
    { q: "¿Cuál es la pendiente máxima permitida para rampas de tránsito peatonal?", options: ["5%", "10%", "15%"], correct: 1 }, // [cite: 215]
    { q: "¿A partir de qué altura requiere 'jaula' o protección circundante una escala fija?", options: ["2 metros", "3 metros", "5 metros"], correct: 0 }, // [cite: 266]
    { q: "¿De qué color deben ser las líneas para delimitar pasillos?", options: ["Blanco", "Rojo", "Amarillo"], correct: 2 } // [cite: 92]
  ]
};