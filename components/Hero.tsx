"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { brand } from "@/lib/content";
import { LemonGarland } from "./LemonGarland";

// La Vespa 3D se carga solo en el cliente (WebGL, sin SSR).
const Vespa3D = dynamic(() => import("./Vespa3D"), { ssr: false });

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="stripes relative flex h-[100svh] min-h-[680px] items-center justify-center overflow-hidden"
    >
      {/* Guirnalda de limones */}
      <LemonGarland />

      {/* Viñeta suave en los bordes para profundidad */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(120,80,20,0.18))]" />
      {/* Piso cálido al fondo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#a9622f]/70 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-10 text-center"
      >
        {/* Logo "pintado" en la pared */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="wordmark relative z-0 text-7xl leading-none drop-shadow-sm sm:text-8xl lg:text-9xl"
          style={{ textShadow: "0 2px 0 rgba(255,255,255,0.4)" }}
        >
          La<span className="text-teal-dark">Vespa</span>
        </motion.h1>

        {/* Vespa 3D al frente, superpuesta al logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="-mt-10 h-[260px] w-full max-w-[560px] sm:-mt-14 sm:h-[340px]"
        >
          <Vespa3D />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-script -mt-4 text-2xl text-teal sm:text-3xl"
        >
          Auténtica cocina italiana
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-2 max-w-xl text-balance text-base font-medium text-espresso/80 sm:text-lg"
        >
          Pizza al horno de leña, pastas artesanales y el sabor de Italia en el
          corazón de {brand.city}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="rounded-full bg-teal px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream shadow-xl shadow-teal/30 transition-all hover:scale-105 hover:bg-teal-dark"
          >
            Ver el menú
          </a>
          <a
            href="#reservas"
            className="rounded-full border-2 border-teal/40 bg-white/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-teal-dark backdrop-blur-sm transition-all hover:scale-105 hover:border-teal hover:bg-white/70"
          >
            Reservar mesa
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#historia"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-teal-dark/70"
        aria-label="Desplazarse hacia abajo"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown size={28} />
        </motion.span>
      </motion.a>
    </section>
  );
}
