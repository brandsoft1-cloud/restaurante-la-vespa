"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="bg-cream py-24 text-espresso sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="divider mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-vespa">
            Lo que dicen
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Clientes felices, mesas llenas
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col rounded-2xl border border-espresso/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
            >
              <Quote
                className="absolute right-6 top-6 text-vespa/15"
                size={40}
                fill="currentColor"
              />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-espresso/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-espresso/10 pt-4">
                <p className="font-display text-lg font-bold">{t.author}</p>
                <p className="text-xs uppercase tracking-wide text-espresso/50">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
