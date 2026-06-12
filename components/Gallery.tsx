"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { gallery, brand } from "@/lib/content";

export function Gallery() {
  return (
    <section id="galeria" className="grain bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="divider mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
            Galería
          </p>
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl">
            Cada plato, una invitación
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Síguenos en{" "}
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline-offset-4 hover:underline"
            >
              @{brand.instagram}
            </a>{" "}
            para más antojos.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {gallery.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl ${
                img.span === "tall"
                  ? "row-span-2"
                  : img.span === "wide"
                  ? "col-span-2"
                  : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/40" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-sm font-medium text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
