import Image from "next/image";
import { IconArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

const STATS = [
  { value: "24 h", label: "respuesta a tu consulta" },
  { value: "100/100", label: "Core Web Vitals" },
  { value: "Top 3", label: "en Google" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.16), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300">
              Desarrollo web · SEO · Software a medida
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Páginas web que aparecen{" "}
              <span className="text-gradient">primeras</span> y venden más
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400">
              En Web System construimos páginas web y software rápidos, bien
              construidos y optimizados para Google. Tu negocio visible donde
              tus clientes buscan.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                Solicitar presupuesto gratis
                <IconArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-base font-semibold text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                Ver servicios
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse justify-end">
                  <dt className="mt-1 text-xs text-zinc-500">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="max-lg:order-first">
          <div className="animate-float">
            <Image
              src="/images/hero-dashboard.svg"
              alt="Panel de analítica mostrando el crecimiento de una web desarrollada por Web System"
              width={720}
              height={540}
              priority
              unoptimized
              className="w-full drop-shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
