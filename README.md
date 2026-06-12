# La Vespa · Pizzería & Trattoria — Landing (MVP)

Landing page de alto nivel para **La Vespa** (Madrid, Cundinamarca), construida con
**Next.js 16 + React 19 + Tailwind v4 + Framer Motion**.

> MVP de propuesta. Las fotos son de stock optimizado (Unsplash vía `next/image`,
> con conversión automática a AVIF/WebP). En producción se reemplazan por las fotos
> reales del restaurante.

## Cómo correrlo

```bash
npm install        # si hace falta
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

## Dónde se edita el contenido

**Todo** el texto, precios, fotos y datos de contacto están centralizados en:

```
lib/content.ts
```

Busca los comentarios `// ⚠️ PLACEHOLDER` para los datos que hay que confirmar con
el cliente:

- **Dirección** exacta en Madrid, Cundinamarca
- **Teléfono / WhatsApp** real (campos `phone` y `whatsapp`)
- Ajustar **horarios** (`hours`) y **menú/precios** (`menu`)

### Reemplazar fotos de stock por reales

1. Sube las fotos a `public/images/`.
2. En `lib/content.ts` cambia las URLs (`images`, `menu[].image`, `gallery[].src`)
   por rutas locales, p. ej. `"/images/pizza-margherita.jpg"`.
3. (Opcional) Quita el dominio de Unsplash en `next.config.ts`.

## Estructura

```
app/
  layout.tsx        # fuentes (Playfair, Inter, Dancing Script), SEO/metadata
  page.tsx          # ensamblado de secciones
  globals.css       # sistema de diseño (paleta, utilidades, textura)
components/
  Navbar.tsx        # nav fija con blur al hacer scroll + menú móvil
  Hero.tsx          # portada full-screen con parallax
  Story.tsx         # historia + estadísticas animadas
  MenuSection.tsx   # menú con pestañas por categoría (animado)
  QuoteBanner.tsx   # banner con cita y parallax
  Gallery.tsx       # mosaico con hover
  Testimonials.tsx  # reseñas
  Visit.tsx         # mapa, horarios y contacto
  Footer.tsx        # pie con redes
  WhatsappFab.tsx   # botón flotante de WhatsApp
lib/content.ts      # ⭐ TODO el contenido editable
```

## Características

- Diseño responsive, mobile-first.
- Animaciones con Framer Motion (parallax, reveals al scroll, transiciones de menú).
- Imágenes optimizadas con `next/image` (lazy-loading, AVIF/WebP, `sizes` responsivos).
- SEO básico y metadatos Open Graph en español (`es_CO`).
- CTAs de conversión: reservar por WhatsApp, llamar, cómo llegar.
- Respeta `prefers-reduced-motion`.

## Repositorio

Código en [brandsoft1-cloud/restaurante-la-vespa](https://github.com/brandsoft1-cloud/restaurante-la-vespa).
