import { LogoHomeLink } from "@/components/LogoHomeLink";
import { SITE, whatsappLink } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "#servicios", label: "Desarrollo web a medida" },
  { href: "#servicios", label: "Posicionamiento SEO" },
  { href: "#servicios", label: "Tiendas online" },
  { href: "#servicios", label: "Mantenimiento web" },
];

const COMPANY_LINKS = [
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <LogoHomeLink className="inline-block" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Desarrollamos software y páginas web optimizadas para buscadores:
              rápidas, bien construidas y pensadas para convertir visitas en
              clientes.
            </p>
          </div>

          <nav aria-label="Servicios">
            <h2 className="text-sm font-semibold text-white">Servicios</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empresa">
            <h2 className="text-sm font-semibold text-white">Empresa</h2>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                {SITE.phoneDisplay} (WhatsApp)
              </a>
            </p>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-white/5 pt-6">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <nav aria-label="Privacidad y cookies">
            <ul>
              <li>
                <button
                  type="button"
                  data-cky-tag="revisit-consent"
                  className="text-sm text-zinc-500 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                  Configuración de cookies
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
