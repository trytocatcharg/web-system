"use client";

import { FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 transition-colors hover:border-white/20 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

const SERVICE_LABELS: Record<string, string> = {
  web: "Página web nueva",
  seo: "Posicionamiento SEO",
  ecommerce: "Tienda online",
  software: "Software a medida",
  mantenimiento: "Mantenimiento web",
  otro: "Otro",
};

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const servicio = String(data.get("servicio") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");

    const lineas = [`Hola Web System, soy ${nombre}.`];
    if (empresa) lineas.push(`Soy de ${empresa}.`);
    if (servicio)
      lineas.push(`Me interesa: ${SERVICE_LABELS[servicio] ?? servicio}.`);
    if (mensaje) lineas.push(mensaje);

    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
      lineas.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="border-t border-white/5">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Contacto
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 max-w-md text-lg text-zinc-400">
            Rellena el formulario y te respondemos por WhatsApp en menos de
            24&nbsp;horas laborables. Presupuesto gratis, sin compromiso.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25d366]/10 text-[#25d366]"
              aria-hidden="true"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </span>
            <div>
              <p className="text-sm text-zinc-500">WhatsApp</p>
              <p className="font-medium text-white">{SITE.phoneDisplay}</p>
            </div>
          </div>
        </div>

        <Reveal delay={150}>
          <form
            name="contacto"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/5 bg-ink-900/60 p-6 sm:p-8"
          >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="nombre"
                className="mb-1.5 block text-sm font-medium text-zinc-300"
              >
                Nombre <span aria-hidden="true" className="text-brand-400">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                placeholder="María García…"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="empresa"
                className="mb-1.5 block text-sm font-medium text-zinc-300"
              >
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                placeholder="Nombre de tu empresa…"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="servicio"
              className="mb-1.5 block text-sm font-medium text-zinc-300"
            >
              Servicio que te interesa
            </label>
            <select id="servicio" name="servicio" className={inputClass} defaultValue="">
              <option value="" disabled>
                Selecciona una opción…
              </option>
              <option value="web">Página web nueva</option>
              <option value="seo">Posicionamiento SEO</option>
              <option value="ecommerce">Tienda online</option>
              <option value="software">Software a medida</option>
              <option value="mantenimiento">Mantenimiento web</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="mt-5">
            <label
              htmlFor="mensaje"
              className="mb-1.5 block text-sm font-medium text-zinc-300"
            >
              Mensaje <span aria-hidden="true" className="text-brand-400">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              autoComplete="off"
              placeholder="Cuéntanos tu proyecto: qué haces, qué necesitas y cuándo te gustaría lanzarlo…"
              className={`${inputClass} resize-y`}
            />
          </div>

          <p className="mt-4 text-xs leading-relaxed text-zinc-500">
            Al pulsar el botón se abrirá WhatsApp con tu mensaje listo para
            enviar. Nada se envía hasta que tú lo confirmes allí.
          </p>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25d366] px-6 py-3.5 text-base font-semibold text-zinc-950 transition-colors hover:bg-[#1fb959] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Enviar por WhatsApp
          </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
