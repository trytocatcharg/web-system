"use client";

import { useState } from "react";
import { LogoHomeLink } from "@/components/LogoHomeLink";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <LogoHomeLink />

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 sm:inline-block"
          >
            Presupuesto gratis
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 md:hidden"
          >
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="border-t border-white/5 bg-ink-950 md:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-brand-700 px-3 py-2.5 text-center text-base font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                Presupuesto gratis
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
