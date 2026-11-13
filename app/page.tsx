import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { SeoSection } from "@/components/SeoSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { SITE } from "@/lib/site";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "es",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <Services />
      <Process />
      <SeoSection />
      <ContactSection />
    </>
  );
}
