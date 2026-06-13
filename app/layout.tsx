import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fuentes auto-hospedadas (variables, subconjunto latino) para que el build
// NO dependa de descargar de Google Fonts. Más rápido y deploy confiable.
const playfair = localFont({
  variable: "--font-playfair",
  display: "swap",
  src: [{ path: "./fonts/playfair.woff2", weight: "400 800", style: "normal" }],
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [{ path: "./fonts/inter.woff2", weight: "400 700", style: "normal" }],
});

const dancing = localFont({
  variable: "--font-script",
  display: "swap",
  src: [{ path: "./fonts/dancing.woff2", weight: "600 700", style: "normal" }],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "La Vespa · Pizzería & Trattoria — Madrid, Cundinamarca",
  description:
    "Auténtica cocina italiana en el corazón de Madrid, Cundinamarca. Pizza al horno de leña, pastas artesanales y antipasti. Masa de fermentación lenta e ingredientes frescos.",
  keywords: [
    "pizzería Madrid Cundinamarca",
    "restaurante italiano Madrid",
    "La Vespa",
    "pizza horno de leña",
    "trattoria",
  ],
  openGraph: {
    title: "La Vespa · Pizzería & Trattoria",
    description:
      "Auténtica cocina italiana en Madrid, Cundinamarca. Pizza al horno de leña y pastas artesanales.",
    siteName: "La Vespa",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/vespa-wall.png",
        width: 758,
        height: 936,
        alt: "La Vespa · Pizzería & Trattoria en Madrid, Cundinamarca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Vespa · Pizzería & Trattoria",
    description:
      "Auténtica cocina italiana en Madrid, Cundinamarca. Pizza al horno de leña y pastas artesanales.",
    images: ["/images/vespa-wall.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#2c7a6f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${dancing.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
