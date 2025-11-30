// src/studyPlan.js
export const studyPlanLevels = [
  {
    level: 1,
    title: "Fundamentos de la Seguridad",
    color: "text-blue-600",
    modules: [
      {
        id: "nom030",
        code: "NOM-030-STPS",
        title: "Servicios Preventivos de Seguridad y Salud en el Trabajo",
        locked: false,
        cover: "/assets/covers/nom030.png",
      },
      {
        id: "nom019",
        code: "NOM-019-STPS",
        title: "Comisiones de Seguridad e Higiene",
        locked: false,
        cover: "/assets/covers/nom019.png",
      },
      {
        id: "nom021",
        code: "NOM-021-STPS",
        title: "Informe de Accidentes de Trabajo",
        locked: false,
        cover: "/assets/covers/nom021.png",
      },
    ],
  },

  {
    level: 2,
    title: "Técnicas de Análisis",
    color: "text-emerald-600",
    modules: [
      {
        id: "nom001",
        code: "NOM-001-STPS",
        title: "Condiciones de Seguridad en Edificios y Locales",
        locked: true,
        cover: "/assets/covers/nom001.png",
      },
      {
        id: "nom002",
        code: "NOM-002-STPS",
        title: "Prevención y Protección Contra Incendios",
        locked: true,
        cover: "/assets/covers/nom002.png",
      },
      {
        id: "nom026",
        code: "NOM-026-STPS",
        title: "Colores y Señales de Seguridad",
        locked: true,
        cover: "/assets/covers/nom026.png",
      },
    ],
  },

  {
    level: 3,
    title: "Riesgos Específicos",
    color: "text-orange-600",
    modules: [
      {
        id: "nom009",
        code: "NOM-009-STPS",
        title: "Trabajos en Alturas",
        locked: true,
        cover: "/assets/covers/nom009.png",
      },
      {
        id: "nom029",
        code: "NOM-029-STPS",
        title: "Mantenimiento de Instalaciones Eléctricas",
        locked: true,
        cover: "/assets/covers/nom029.png",
      },
      {
        id: "nom004",
        code: "NOM-004-STPS",
        title: "Sistemas de Protección y Dispositivos de Seguridad",
        locked: true,
        cover: "/assets/covers/nom004.png",
      },
      {
        id: "nom006",
        code: "NOM-006-STPS",
        title: "Manejo y Almacenamiento de Materiales",
        locked: true,
        cover: "/assets/covers/nom006.png",
      },
      {
        id: "nom027",
        code: "NOM-027-STPS",
        title: "Soldadura y Corte",
        locked: true,
        cover: "/assets/covers/nom027.png",
      },
    ],
  },

  {
    level: 4,
    title: "Procesos y Equipos",
    color: "text-purple-600",
    modules: [
      {
        id: "nom017",
        code: "NOM-017-STPS",
        title: "Equipo de Protección Personal",
        locked: true,
        cover: "/assets/covers/nom017.png",
      },
      {
        id: "nom036",
        code: "NOM-036-STPS",
        title: "Ergonomía: Manejo Manual de Cargas",
        locked: true,
        cover: "/assets/covers/nom036.png",
      },
      {
        id: "nom025",
        code: "NOM-025-STPS",
        title: "Condiciones de Iluminación",
        locked: true,
        cover: "/assets/covers/nom025.png",
      },
    ],
  },

  {
    level: 5,
    title: "Especialización",
    color: "text-pink-600",
    modules: [
      {
        id: "nom113",
        code: "NOM-113-STPS",
        title: "Seguridad en Trabajos con Sustancias Químicas",
        locked: true,
        cover: "/assets/covers/nom113.png",
      },
      {
        id: "nom115",
        code: "NOM-115-STPS",
        title: "Vehículos de Carga y Revisión de Seguridad",
        locked: true,
        cover: "/assets/covers/nom115.png",
      },
    ],
  },
];
