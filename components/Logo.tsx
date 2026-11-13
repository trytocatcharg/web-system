import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  // Logo transparente adaptado a fondo oscuro: el wordmark del PNG original
  // era azul oscuro y se convirtió a blanco/gris claro. El original está en
  // /Users/fernandosancheznavarro/Downloads/opcion-3-hexagono.png
  return (
    <Image
      src="/images/logo.png"
      alt="Web System"
      width={1760}
      height={520}
      priority
      className={compact ? "h-8 w-auto" : "h-12 w-auto"}
    />
  );
}
