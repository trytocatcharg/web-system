import { IconCheck } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const PLANS = [
  {
    name: "Web Esencial",
    price: "desde 890 €",
    description: "Perfecta para lanzar tu presencia online con una base sólida.",
    features: [
      "Página web de hasta 5 secciones",
      "Diseño responsive (móvil, tablet y escritorio)",
      "SEO técnico de base e indexación en Google",
      "Formulario de contacto y WhatsApp",
      "Entrega en 2 semanas",
    ],
    featured: false,
  },
  {
    name: "Web Profesional",
    price: "desde 1.900 €",
    description:
      "Para empresas que quieren destacar, posicionarse y captar clientes cada mes.",
    features: [
      "Web de hasta 12 secciones o catálogo de servicios",
      "Estrategia SEO con palabras clave de tu sector",
      "Blog optimizado para contenidos",
      "Analítica e informe mensual de posiciones",
      "Panel para editar contenidos",
      "Entrega en 4 semanas",
    ],
    featured: true,
  },
  {
    name: "A Medida",
    price: "Presupuesto",
    description:
      "Software, aplicaciones web, e-commerce y proyectos especiales.",
    features: [
      "Análisis y arquitectura a medida",
      "Integraciones con tus herramientas (ERP, CRM, pasarelas de pago)",
      "Tienda online o aplicación web completa",
      "Acuerdo de nivel de servicio (SLA) y soporte prioritario",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="precios" className="border-t border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Precios
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Inversión clara, sin letra pequeña
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Elige el punto de partida: todos los planes incluyen diseño
            responsive, SEO de base y contacto directo por WhatsApp.
          </p>
        </div>

        <ul className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <li
              key={plan.name}
              className={
                plan.featured
                  ? "relative flex flex-col rounded-2xl border border-brand-500/60 bg-ink-950 p-8 shadow-2xl shadow-brand-500/10 transition-transform duration-300 hover:-translate-y-1"
                  : "relative flex flex-col rounded-2xl border border-white/5 bg-ink-950 p-8 transition-transform duration-300 hover:-translate-y-1"
              }
            >
              {plan.featured && (
                <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                  Más popular
                </p>
              )}
              <Reveal delay={index * 120} className="flex h-full flex-col">
                <h3 className="font-display text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 font-display text-3xl font-bold text-white">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {plan.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={
                    plan.featured
                      ? "mt-8 inline-flex items-center justify-center rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                      : "mt-8 inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                  }
                >
                  Solicitar presupuesto
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
