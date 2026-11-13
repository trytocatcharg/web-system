export const SITE = {
  name: "Web System",
  tagline: "Software y páginas web que venden",
  url: "https://web-system.cloud",
  phoneDisplay: "+34 600 123 456",
  whatsappNumber: "34600123456",
  whatsappMessage: "Hola Web System, quiero información sobre vuestras páginas web y servicios de SEO.",
} as const;

export const whatsappLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;
