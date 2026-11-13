import { Reveal } from "@/components/Reveal";
import {
  IconCode,
  IconSearch,
  IconCart,
  IconGauge,
  IconPalette,
  IconShield,
} from "@/components/icons";

const SERVICES = [
  {
    icon: IconCode,
    title: "Desarrollo web a medida",
    description:
      "Páginas corporativas y aplicaciones construidas con Next.js y TypeScript: código limpio, escalable y mantenible.",
  },
  {
    icon: IconSearch,
    title: "Posicionamiento SEO",
    description:
      "Optimización técnica y de contenidos para aparecer en los primeros resultados de Google y atraer clientes que buscan lo que ofreces.",
  },
  {
    icon: IconCart,
    title: "Tiendas online",
    description:
      "E-commerce rápidos y seguros, optimizados para convertir visitas en ventas desde el primer día.",
  },
  {
    icon: IconGauge,
    title: "Rendimiento web",
    description:
      "Core Web Vitals: webs que cargan al instante en cualquier dispositivo y retienen a tus visitantes.",
  },
  {
    icon: IconPalette,
    title: "Diseño UX/UI",
    description:
      "Diseños modernos, responsive y orientados a la conversión: tu web se ve profesional y guía al cliente hacia la compra.",
  },
  {
    icon: IconShield,
    title: "Mantenimiento y soporte",
    description:
      "Actualizaciones, copias de seguridad, monitorización y mejoras continuas de SEO para que tu web nunca se quede atrás.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="border-t border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Servicios
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Todo lo que tu negocio necesita para triunfar online
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Cubrimos el ciclo completo: desde la primera línea de código hasta
            el primer puesto en Google.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className="group rounded-2xl border border-white/5 bg-ink-950 p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand-500/40"
            >
              <Reveal delay={index * 80}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
