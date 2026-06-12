"use client";

import { InstagramIcon, TikTokIcon } from "./icons";
import { brand } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-espresso py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-3xl font-bold text-cream">
              La<span className="text-lemon">Vespa</span>
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gold">
              {brand.tagline} · {brand.city}
            </p>
          </div>

          <nav className="flex gap-7 text-sm font-medium uppercase tracking-wider text-cream/70">
            <a href="#historia" className="hover:text-gold">Historia</a>
            <a href="#menu" className="hover:text-gold">Menú</a>
            <a href="#galeria" className="hover:text-gold">Galería</a>
            <a href="#visitanos" className="hover:text-gold">Visítanos</a>
          </nav>

          <div className="flex gap-3">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={brand.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} La Vespa. Todos los derechos
            reservados.
          </p>
          <p>
            Hecho con <span className="text-lemon">♥</span> en Madrid,
            Cundinamarca.{" "}
            <a
              href="https://poly.pizza/m/blGLclvvdEM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-cream/60"
            >
              · Modelo 3D: Jasmine Roberts (CC-BY)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
