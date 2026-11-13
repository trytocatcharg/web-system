import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Análisis y estrategia",
    description:
      "Estudiamos tu negocio, tu competencia y las palabras clave que tus clientes buscan en Google.",
  },
  {
    number: "02",
    title: "Diseño y prototipo",
    description:
      "Diseñamos una web a medida, responsive y orientada a la conversión, y la validamos contigo.",
  },
  {
    number: "03",
    title: "Desarrollo y SEO",
    description:
      "Construimos tu web con código limpio y aplicamos SEO técnico desde la base: velocidad, estructura y contenidos.",
  },
  {
    number: "04",
    title: "Lanzamiento y crecimiento",
    description:
      "Publicamos, medimos resultados y mejoramos cada mes para escalar posiciones y conversiones.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Proceso
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Un método probado, sin sorpresas
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Cuatro fases claras para lanzar tu web con el máximo impacto desde
            el primer día.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-white/5 bg-ink-900/60 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand-500/40"
            >
              <Reveal delay={index * 100}>
                <span className="font-display text-4xl font-bold text-brand-500/40">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
