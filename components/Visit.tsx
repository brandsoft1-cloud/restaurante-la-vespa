"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { InstagramIcon } from "./icons";
import { Reveal } from "./Reveal";
import { brand, hours } from "@/lib/content";

export function Visit() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    brand.mapsQuery
  )}&output=embed`;

  return (
    <section id="visitanos" className="grain bg-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="divider mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
            Visítanos
          </p>
          <h2 className="font-display text-4xl font-bold text-cream sm:text-5xl">
            Te esperamos en Madrid
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <Reveal className="flex flex-col gap-6">
            <InfoCard icon={<MapPin size={22} />} title="Dirección">
              <p className="text-cream/75">{brand.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  brand.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-semibold text-gold hover:underline"
              >
                Cómo llegar →
              </a>
            </InfoCard>

            <InfoCard icon={<Clock size={22} />} title="Horarios">
              <ul className="space-y-1.5">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-cream/75">{h.day}</span>
                    <span
                      className={
                        h.closed
                          ? "font-medium text-vespa"
                          : "font-medium text-cream"
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon={<Phone size={22} />} title="Reservas y pedidos">
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-vespa px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-vespa-dark"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  {brand.phone}
                </a>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  <InstagramIcon size={16} /> @{brand.instagram}
                </a>
              </div>
            </InfoCard>
          </Reveal>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="min-h-[360px] overflow-hidden rounded-2xl border border-cream/10 shadow-2xl lg:min-h-full"
          >
            <iframe
              title="Ubicación de La Vespa en el mapa"
              src={mapSrc}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-espresso-soft p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-vespa/15 text-gold">
          {icon}
        </span>
        <h3 className="font-display text-xl font-bold text-cream">{title}</h3>
      </div>
      {children}
    </div>
  );
}
