// src/studyPlan.js
export const studyPlanLevels = [
  {
    level: 1,
    title: "Cimientos (Admin)",
    color: "text-indigo-600",
    modules: [
      { id: "nom030", code: "NOM-030", title: "Servicios Preventivos", locked: false },
      { id: "nom019", code: "NOM-019", title: "Comisiones de SyH", locked: true },
      { id: "nom021", code: "NOM-021", title: "Riesgos de Trabajo", locked: true }
    ]
  },
  {
    level: 2,
    title: "Infraestructura",
    color: "text-blue-600",
    modules: [
      { id: "nom001", code: "NOM-001", title: "Edificios y Locales", locked: true },
      { id: "nom002", code: "NOM-002", title: "Prevención de Incendios", locked: true },
      { id: "nom026", code: "NOM-026", title: "Colores y Señales", locked: true }
    ]
  },
  {
    level: 3,
    title: "Riesgos Críticos",
    color: "text-amber-600",
    modules: [
      { id: "nom009", code: "NOM-009", title: "Trabajos en Altura", locked: true },
      { id: "nom029", code: "NOM-029", title: "Mto. Eléctrico", locked: true },
      { id: "nom004", code: "NOM-004", title: "Maquinaria y Equipo", locked: true },
      { id: "nom006", code: "NOM-006", title: "Manejo de Materiales", locked: true },
      { id: "nom027", code: "NOM-027", title: "Soldadura y Corte", locked: true }
    ]
  },
  {
    level: 4,
    title: "Salud y Ergonomía",
    color: "text-emerald-600",
    modules: [
      { id: "nom017", code: "NOM-017", title: "EPP (Equipo Protección)", locked: true },
      { id: "nom036", code: "NOM-036-1", title: "Riesgo Ergonómico", locked: true },
      { id: "nom025", code: "NOM-025", title: "Iluminación", locked: true }
    ]
  },
  {
    level: 5,
    title: "Ref. Producto (Series 100)",
    color: "text-slate-500",
    modules: [
      { id: "nom113", code: "NOM-113", title: "Calzado (Producto)", locked: true },
      { id: "nom115", code: "NOM-115", title: "Cascos (Producto)", locked: true }
    ]
  }
];
