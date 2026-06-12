"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { images, stats } from "@/lib/content";

export function Story() {
  return (
    <section id="historia" className="grain relative bg-espresso py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Imágenes superpuestas */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={images.oven}
              alt="Horno de leña tradicional en La Vespa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute -bottom-8 -right-4 hidden aspect-square w-44 overflow-hidden rounded-2xl border-4 border-espresso shadow-2xl sm:block lg:-right-10 lg:w-56"
          >
            <Image
              src={images.dough}
              alt="Masa madre de fermentación lenta"
              fill
              sizes="220px"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute -left-5 -top-5 -z-0 hidden h-24 w-24 rounded-full border border-gold/40 lg:block" />
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="divider mb-5 justify-start text-xs font-semibold uppercase tracking-[0.3em]">
              Nuestra historia
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">
              El sabor de Italia, hecho{" "}
              <span className="text-gold">en Madrid</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-cream/75">
              La Vespa nació de un amor sencillo: la buena masa, el fuego de
              leña y la mesa compartida. Cada pizza reposa 48 horas para lograr
              una corteza ligera y crujiente, y cada salsa se prepara como
              manda la tradición.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 leading-relaxed text-cream/60">
              Ingredientes frescos, recetas honestas y el calor de un lugar
              donde todos son bienvenidos. Eso es lo que servimos cada día en el
              corazón de Madrid, Cundinamarca.
            </p>
          </Reveal>

          {/* Stats */}
          <motion.dl
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="bg-espresso px-4 py-5 text-center"
              >
                <dt className="font-display text-3xl font-bold text-gold">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-cream/60">
                  {s.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
