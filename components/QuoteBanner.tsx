"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/lib/content";

export function QuoteBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src={images.table}
          alt="Mesa servida en La Vespa"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/75" />
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <p className="font-script text-3xl text-gold sm:text-4xl">
          A tavola non si invecchia
        </p>
        <p className="mt-4 font-display text-2xl font-medium leading-snug text-cream sm:text-4xl">
          “En la mesa, junto a la buena comida y la buena compañía, nunca se
          envejece.”
        </p>
        <footer className="mt-5 text-sm uppercase tracking-[0.3em] text-cream/60">
          — Proverbio italiano
        </footer>
      </motion.blockquote>
    </section>
  );
}
