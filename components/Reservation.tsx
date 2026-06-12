"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { brand, hours } from "@/lib/content";

export function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "20:00",
    guests: "2",
    notes: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `¡Hola La Vespa! Quiero reservar una mesa 🍽️\n\n` +
      `*Nombre:* ${form.name || "—"}\n` +
      `*Personas:* ${form.guests}\n` +
      `*Fecha:* ${form.date || "—"}\n` +
      `*Hora:* ${form.time}\n` +
      (form.phone ? `*Teléfono:* ${form.phone}\n` : "") +
      (form.notes ? `*Nota:* ${form.notes}\n` : "");
    window.open(
      `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const fieldBase =
    "w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 text-espresso outline-none transition-all focus:border-teal focus:ring-2 focus:ring-teal/30";

  return (
    <section id="reservas" className="relative overflow-hidden bg-teal-dark py-24 sm:py-32">
      {/* Acentos decorativos */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lemon/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-lemon/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Lado informativo */}
        <div>
          <Reveal>
            <p className="font-script text-3xl text-lemon">Te esperamos</p>
            <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-cream sm:text-5xl">
              Reserva tu mesa
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/75">
              Aparta tu lugar en La Vespa y vive una noche de auténtica cocina
              italiana. Completa tus datos y confirmamos al instante por
              WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {[
                { icon: <Clock size={18} />, text: hours[1].time + " (Mar–Jue) · ampliado fines de semana" },
                { icon: <Users size={18} />, text: "Grupos y celebraciones bienvenidos" },
                { icon: <CalendarDays size={18} />, text: "Reserva para el mismo día o con anticipación" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-cream/85">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lemon/15 text-lemon">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-lemon hover:text-lemon"
              >
                <Phone size={16} /> Llamar
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-lemon hover:text-lemon"
              >
                <MessageCircle size={16} /> WhatsApp directo
              </a>
            </div>
          </Reveal>
        </div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-cream p-7 shadow-2xl sm:p-9"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
                Nombre
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Tu nombre"
                className={fieldBase}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
                Personas
              </label>
              <select value={form.guests} onChange={update("guests")} className={fieldBase}>
                {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === "1" ? "persona" : "personas"}
                  </option>
                ))}
                <option value="9+">9 o más</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
                Teléfono
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="Opcional"
                className={fieldBase}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
                Fecha
              </label>
              <input
                required
                type="date"
                min={today}
                value={form.date}
                onChange={update("date")}
                className={fieldBase}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
                Hora
              </label>
              <input
                required
                type="time"
                value={form.time}
                onChange={update("time")}
                className={fieldBase}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-espresso/60">
                Nota (opcional)
              </label>
              <input
                type="text"
                value={form.notes}
                onChange={update("notes")}
                placeholder="Cumpleaños, silla para bebé, alergias…"
                className={fieldBase}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 text-sm font-semibold uppercase tracking-wider text-cream shadow-lg shadow-teal/30 transition-all hover:scale-[1.02] hover:bg-teal-dark"
          >
            <MessageCircle size={18} /> Reservar por WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-espresso/50">
            Te llevamos a WhatsApp con tu reserva lista para enviar.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
