import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Páginas web y software con SEO que vende`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Web System desarrolla páginas web y software a medida: rápidos, optimizados para Google y pensados para convertir visitas en clientes. Presupuesto gratis.",
  keywords: [
    "desarrollo web",
    "páginas web para empresas",
    "SEO",
    "posicionamiento en Google",
    "tiendas online",
    "software a medida",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Páginas web y software con SEO que vende`,
    description:
      "Páginas web rápidas, bien construidas y optimizadas para aparecer primero en las búsquedas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070b16",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneDisplay,
  description:
    "Empresa de desarrollo de software y páginas web optimizadas para buscadores.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/9d2148180b89a4c148a46b750d533dec/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
