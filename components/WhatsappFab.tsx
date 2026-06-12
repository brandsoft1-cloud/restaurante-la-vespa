"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/content";

export function WhatsappFab() {
  return (
    <motion.a
      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
        "¡Hola La Vespa! Quisiera reservar una mesa."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-xl shadow-black/30"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.32-1.95 1.36-.5.04-.97.22-3.27-.68-2.76-1.09-4.5-3.91-4.64-4.09-.14-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.24-.27.53-.34.71-.34.18 0 .36.002.51.01.16.007.39-.06.6.46.24.58.81 2 .88 2.14.07.14.12.31.02.49-.09.18-.14.29-.27.45-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.93 1.93 1.22 2.21 1.36.27.14.43.12.59-.07.16-.18.68-.79.86-1.07.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.11.07.63-.17 1.31z" />
      </svg>
    </motion.a>
  );
}
