/* ============================================================================
   LA VESPA · Contenido del sitio
   ----------------------------------------------------------------------------
   TODO el texto, precios, fotos y datos de contacto se editan AQUÍ.
   Los datos marcados con  // ⚠️ PLACEHOLDER  deben confirmarse con el cliente.
   Las fotos son de stock optimizado; reemplazar por fotos reales de La Vespa.
   ========================================================================== */

export const brand = {
  name: "La Vespa",
  tagline: "Pizzería & Trattoria",
  city: "Madrid, Cundinamarca",
  // ⚠️ PLACEHOLDER — confirmar dirección exacta
  address: "Carrera 7 # 7-50, Centro · Madrid, Cundinamarca",
  // ⚠️ PLACEHOLDER — confirmar teléfono / WhatsApp
  phone: "+57 300 123 4567",
  whatsapp: "573001234567",
  email: "hola@lavespamadrid.co",
  instagram: "lavespamadrid",
  instagramUrl: "https://www.instagram.com/lavespamadrid/",
  tiktok: "lavespa.madrid",
  tiktokUrl: "https://www.tiktok.com/@lavespa.madrid",
  mapsQuery: "Madrid, Cundinamarca, Colombia",
};

export const hours = [
  { day: "Lunes", time: "Cerrado", closed: true },
  { day: "Martes — Jueves", time: "12:00 — 22:00" },
  { day: "Viernes — Sábado", time: "12:00 — 23:00" },
  { day: "Domingo", time: "12:00 — 21:00" },
];

export const stats = [
  { value: "48h", label: "Fermentación de la masa" },
  { value: "100%", label: "Horno de leña" },
  { value: "12+", label: "Pizzas de autor" },
  { value: "2019", label: "Cocinando en Madrid" },
];

/* --- Galería de fotos (hero, secciones, mosaico) ---------------------------
   Unsplash optimizado. Reemplazar src por las fotos reales del restaurante.   */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroPizza: u("1513104890138-7c749659a591", 2000),
  oven: u("1574071318508-1cdbab80d002"),
  dough: u("1595854341625-f33ee10dbf94"),
  interior: u("1517248135467-4c7edcad34c4"),
  chef: u("1577219491135-ce391730fb2c"),
  wine: u("1510812431401-41d2bd2722f3"),
  table: u("1414235077428-338989a2e8c0"),
};

/* --- Menú ------------------------------------------------------------------ */
export type Dish = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  italian: string;
  image: string;
  dishes: Dish[];
};

export const menu: MenuCategory[] = [
  {
    id: "pizzas",
    title: "Pizzas al horno de leña",
    italian: "Pizze",
    image: u("1604382354936-07c5d9983bd3", 1200),
    dishes: [
      {
        name: "Margherita",
        desc: "Tomate San Marzano, mozzarella fior di latte, albahaca fresca y aceite de oliva extra virgen.",
        price: "$28.000",
      },
      {
        name: "La Vespa",
        desc: "Nuestra firma: 'nduja calabresa, burrata, rúgula y parmesano reggiano.",
        price: "$39.000",
        tag: "La favorita",
      },
      {
        name: "Diavola",
        desc: "Salami picante, mozzarella, tomate y hojuelas de chile italiano.",
        price: "$34.000",
      },
      {
        name: "Quattro Formaggi",
        desc: "Mozzarella, gorgonzola, parmesano y provolone ahumado.",
        price: "$36.000",
      },
      {
        name: "Prosciutto e Funghi",
        desc: "Jamón de cerdo, champiñones salteados y mozzarella.",
        price: "$35.000",
      },
      {
        name: "Capricciosa",
        desc: "Alcachofas, aceitunas Kalamata, jamón, champiñones y mozzarella.",
        price: "$37.000",
      },
    ],
  },
  {
    id: "pastas",
    title: "Pastas artesanales",
    italian: "Paste",
    image: u("1621996346565-e3dbc646d9a9", 1200),
    dishes: [
      {
        name: "Spaghetti alla Carbonara",
        desc: "Huevo, guanciale, pecorino romano y pimienta negra recién molida.",
        price: "$30.000",
      },
      {
        name: "Lasagna della Nonna",
        desc: "Capas de pasta fresca, ragú de res a fuego lento y bechamel.",
        price: "$32.000",
        tag: "Tradicional",
      },
      {
        name: "Fettuccine Alfredo",
        desc: "Crema de parmesano, mantequilla y un toque de nuez moscada.",
        price: "$29.000",
      },
      {
        name: "Ravioli di Ricotta e Spinaci",
        desc: "Rellenos de ricotta y espinaca en salsa de mantequilla y salvia.",
        price: "$33.000",
      },
    ],
  },
  {
    id: "entradas",
    title: "Para empezar",
    italian: "Antipasti",
    image: u("1572695157366-5e585ab2b69f", 1200),
    dishes: [
      {
        name: "Bruschetta Classica",
        desc: "Pan tostado, tomate, ajo, albahaca y aceite de oliva.",
        price: "$16.000",
      },
      {
        name: "Burrata con Prosciutto",
        desc: "Burrata cremosa, prosciutto, rúgula y reducción de balsámico.",
        price: "$26.000",
        tag: "Recomendada",
      },
      {
        name: "Tabla de Antipasti",
        desc: "Selección de embutidos, quesos italianos, aceitunas y focaccia.",
        price: "$38.000",
      },
    ],
  },
  {
    id: "postres",
    title: "Dolci",
    italian: "Postres",
    image: u("1571877227200-a0d98ea607e9", 1200),
    dishes: [
      {
        name: "Tiramisú",
        desc: "Mascarpone, café espresso, cacao y bizcocho savoiardi.",
        price: "$15.000",
        tag: "Casero",
      },
      {
        name: "Panna Cotta",
        desc: "Crema de vainilla con coulis de frutos rojos.",
        price: "$14.000",
      },
      {
        name: "Cannoli Siciliani",
        desc: "Masa crujiente rellena de ricotta dulce y chips de chocolate.",
        price: "$16.000",
      },
    ],
  },
];

/* --- Mosaico de galería ---------------------------------------------------- */
export const gallery = [
  // ✅ FOTO REAL del restaurante (la pared icónica de La Vespa).
  { src: "/images/vespa-wall.png", alt: "La pared de La Vespa en Madrid, Cundinamarca", span: "tall" },
  { src: u("1565299624946-b28f40a0ae38", 900), alt: "Pizza pepperoni recién horneada" },
  { src: u("1574894709920-11b28e7367e3", 900), alt: "Lasagna casera" },
  { src: u("1551024709-8f23befc6f87", 900), alt: "Aperol Spritz" },
  { src: u("1517248135467-4c7edcad34c4", 1200), alt: "Ambiente del restaurante", span: "wide" },
  { src: u("1608897013039-887f21d8c804", 900), alt: "Ensalada caprese" },
  { src: u("1574071318508-1cdbab80d002", 900), alt: "Horno de leña", span: "tall" },
  { src: u("1612874742237-6526221588e3", 900), alt: "Pasta fresca" },
  { src: u("1495474472287-4d71bcdd2085", 900), alt: "Espresso italiano" },
];

/* --- Testimonios ----------------------------------------------------------- */
export const testimonials = [
  {
    quote:
      "La mejor pizza de Madrid, sin discusión. La masa es ligera y el horno de leña se nota en cada bocado.",
    author: "Valentina R.",
    role: "Reseña de Google",
  },
  {
    quote:
      "Nos sentimos en Italia. La burrata con prosciutto y un buen vino: plan perfecto para la noche.",
    author: "Andrés M.",
    role: "Cliente frecuente",
  },
  {
    quote:
      "Atención impecable y porciones generosas. La lasagna sabe a casa de la nonna. Volveremos siempre.",
    author: "Carolina P.",
    role: "Reseña de Instagram",
  },
];
