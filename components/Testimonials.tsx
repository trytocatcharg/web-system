import { Reveal } from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "En tres meses pasamos de la página cuarta de Google a los primeros resultados. Las llamadas de clientes nuevos se multiplicaron.",
    name: "Laura Gómez",
    role: "Clínica dental Gómez",
  },
  {
    quote:
      "La web carga instantáneamente y el proceso de compra es muy sencillo. Nuestras ventas online crecieron un 85% en seis meses.",
    name: "Miguel Torres",
    role: "Torres & Hijos, ferretería online",
  },
  {
    quote:
      "Profesionales de principio a fin: nos explicaron cada paso y entregaron antes de plazo. La mejor inversión del año.",
    name: "Ana Ruiz",
    role: "Estudio de arquitectura AR",
  },
];

function Stars() {
  return (
    <div
      className="flex gap-1 text-brand-400"
      role="img"
      aria-label="Valoración: 5 de 5 estrellas"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Clientes
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resultados que hablan por sí solos
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <li
              key={testimonial.name}
              className="rounded-2xl border border-white/5 bg-ink-900/60 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-500/40"
            >
              <Reveal delay={index * 120} className="flex h-full flex-col">
                <Stars />
                <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-zinc-300">
                  “{testimonial.quote}”
                </blockquote>
                <footer className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {testimonial.role}
                  </p>
                </footer>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
