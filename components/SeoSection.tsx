import Image from "next/image";
import { IconCheck } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const CHECKLIST = [
  "SEO técnico aplicado desde la primera línea de código",
  "Investigación de palabras clave de tu sector",
  "Contenidos optimizados para Google y para personas",
  "Velocidad de carga ultrarrápida en móvil y escritorio",
  "Estructura de datos (Schema) para destacar en las búsquedas",
  "Informes mensuales de posiciones y tráfico",
];

const RESULTS = [
  { value: "Top 3", label: "objetivo de posicionamiento para las palabras clave de tu sector" },
  { value: "+ Tráfico", label: "crecimiento orgánico continuado en nuestros proyectos de SEO" },
  { value: "<1,5 s", label: "de tiempo de carga en conexiones móviles" },
];

export function SeoSection() {
  return (
    <section className="border-t border-white/5 bg-ink-900/60">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <Image
              src="/images/seo-growth.svg"
              alt="Gráfico de crecimiento que muestra cómo el SEO de Web System lleva una web al primer puesto de Google"
              width={640}
              height={480}
              unoptimized
              className="w-full"
            />
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal delay={150}>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            SEO que posiciona
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Aparece primero cuando te buscan
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Una web bonita que nadie encuentre no sirve de nada. Por eso el SEO
            no es un extra: es la base de todo lo que construimos.
          </p>

          <ul className="mt-8 space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span className="text-sm leading-relaxed text-zinc-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-6 border-t border-white/5 pt-8 sm:grid-cols-3">
            {RESULTS.map((result) => (
              <div key={result.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-xs leading-snug text-zinc-500">
                  {result.label}
                </dt>
                <dd className="font-display text-2xl font-bold text-gradient">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
