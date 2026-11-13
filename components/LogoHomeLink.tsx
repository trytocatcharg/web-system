"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";

export function LogoHomeLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      onClick={() => window.scrollTo(0, 0)}
      className={`rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400 ${className}`}
      aria-label="Web System — Ir al inicio"
    >
      <Logo />
    </Link>
  );
}
