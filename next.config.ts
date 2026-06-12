import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fotografía gastronómica optimizada vía next/image (AVIF/WebP automático).
    // PRODUCCIÓN: reemplazar las URLs por las fotos reales de La Vespa
    // (subirlas a /public/images o a un CDN y actualizar lib/content.ts).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
};

export default nextConfig;
