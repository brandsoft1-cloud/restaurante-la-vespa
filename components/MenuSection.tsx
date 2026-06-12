"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { menu } from "@/lib/content";

export function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section
      id="menu"
      className="relative bg-cream py-24 text-espresso sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="divider mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-vespa">
            Nuestra carta
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Hecho con fuego y tradición
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-espresso/60">
            Una selección de nuestros favoritos. Pregunta por las
            especialidades del día.
          </p>
        </Reveal>

        {/* Tabs de categoría */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {menu.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  active === cat.id
                    ? "text-cream"
                    : "text-espresso/60 hover:text-espresso"
                }`}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-vespa shadow-lg shadow-vespa/25"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {cat.italian}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Contenido de la categoría */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >
            {/* Imagen de la categoría */}
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-xl lg:h-auto lg:min-h-[460px]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="font-script text-2xl text-gold-soft">
                  {current.italian}
                </p>
                <h3 className="font-display text-3xl font-bold text-cream">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Lista de platos */}
            <ul className="flex flex-col">
              {current.dishes.map((dish, i) => (
                <motion.li
                  key={dish.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="group flex items-start justify-between gap-4 border-b border-espresso/10 py-5 first:pt-0"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display text-xl font-bold transition-colors group-hover:text-vespa">
                        {dish.name}
                      </h4>
                      {dish.tag && (
                        <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-vespa-dark">
                          {dish.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-espresso/60">
                      {dish.desc}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-display text-lg font-bold text-vespa">
                    {dish.price}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
