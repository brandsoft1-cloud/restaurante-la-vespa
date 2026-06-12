"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [
  { href: "#historia", label: "Historia" },
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#reservas", label: "Reservar" },
  { href: "#visitanos", label: "Visítanos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-espresso/90 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="group flex items-baseline gap-2">
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-cream" : "text-teal-dark"
            }`}
          >
            La<span className="text-teal">Vespa</span>
          </span>
          <span
            className={`hidden text-[0.65rem] font-medium uppercase tracking-[0.3em] sm:inline ${
              scrolled ? "text-gold" : "text-teal/70"
            }`}
          >
            Madrid
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors hover:text-teal after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-cream/80" : "text-espresso/70"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reservas"
          className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-cream shadow-lg shadow-teal/25 transition-all hover:bg-teal-dark hover:shadow-teal/40 md:inline-block"
        >
          Reservar
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? "text-cream" : "text-teal-dark"}`}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-espresso/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-medium uppercase tracking-wider text-cream/90"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reservas"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-cream"
                >
                  Reservar mesa
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
