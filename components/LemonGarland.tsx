"use client";

import { motion } from "framer-motion";

/* Un limón con un par de hojas */
function LemonSprig({ size = 1 }: { size?: number }) {
  return (
    <svg
      width={56 * size}
      height={64 * size}
      viewBox="0 0 56 64"
      fill="none"
      aria-hidden="true"
    >
      {/* hojas */}
      <path
        d="M28 18C20 10 8 9 4 14c6 2 10 7 13 13 4-3 8-5 11-9z"
        fill="#5e8c3a"
      />
      <path
        d="M28 18c8-8 20-9 24-4-6 2-10 7-13 13-4-3-8-5-11-9z"
        fill="#6fa247"
      />
      <path d="M27 17l2 10" stroke="#3f6326" strokeWidth="1.4" />
      {/* limón */}
      <ellipse cx="28" cy="42" rx="15" ry="18" fill="#f6c915" />
      <ellipse cx="28" cy="42" rx="15" ry="18" fill="url(#lg)" />
      <ellipse cx="22" cy="35" rx="5" ry="7" fill="#fff08a" opacity="0.6" />
      {/* puntita inferior */}
      <path d="M28 60c-1 2 2 2 0 0z" fill="#e0a90a" />
      <circle cx="28" cy="60.5" r="1.6" fill="#d8a14a" />
      <defs>
        <linearGradient id="lg" x1="13" y1="24" x2="43" y2="60">
          <stop stopColor="#ffe24d" />
          <stop offset="1" stopColor="#e6a90b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LemonGarland() {
  // alturas y tamaños alternados para dar forma de guirnalda colgante
  const sprigs = Array.from({ length: 16 }, (_, i) => ({
    drop: i % 2 === 0 ? 6 : 22,
    size: 0.78 + (i % 3) * 0.14,
    delay: (i % 5) * 0.25,
  }));

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 overflow-hidden">
      {/* base de follaje */}
      <div className="h-7 w-full bg-gradient-to-b from-[#4a7c2f] to-transparent opacity-90" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between px-2 sm:px-6">
        {sprigs.map((s, i) => (
          <motion.div
            key={i}
            style={{ marginTop: s.drop }}
            animate={{ rotate: [-4, 4, -4] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
            className="origin-top"
          >
            <LemonSprig size={s.size} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
