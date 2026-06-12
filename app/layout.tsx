import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
    locale: "es_CO",
    type: "website",
  },
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
