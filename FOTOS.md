# 📸 Cómo poner las fotos REALES de La Vespa

## Situación actual

- ✅ **Foto real ya integrada**: la pared icónica de La Vespa (`public/images/vespa-wall.png`),
  visible en la **Galería**.
- 🟡 El resto son **fotos de stock profesionales** (marcadores de posición) porque
  **Instagram, TikTok y Google Maps NO permiten descargar sus fotos automáticamente**
  (Instagram exige login, las URLs del CDN expiran, y Maps requiere la API de pago).

## La forma fácil de conseguir las reales

1. Pídele a La Vespa sus fotos en alta resolución (las que suben a Instagram, del local,
   las pizzas, el horno, los platos, el ambiente). Por WhatsApp o Drive sirve.
2. Guarda cada foto en `public/images/` con el nombre indicado abajo.
3. Abre `lib/content.ts` y cambia la URL de stock por la ruta local
   (ej. `"/images/pizza-margherita.jpg"`).

> Sugerencia: fotos horizontales ~1600px de ancho, JPG. Next.js las optimiza solo
> (AVIF/WebP, tamaños responsivos) — no hay que comprimirlas a mano.

## Mapa de fotos (slot → archivo sugerido → dónde aparece)

### Sección "Historia"  (`images` en content.ts)
| Slot          | Archivo sugerido        | Qué foto va bien            |
|---------------|-------------------------|-----------------------------|
| `oven`        | `images/horno.jpg`      | El horno de leña            |
| `dough`       | `images/masa.jpg`       | La masa / preparación       |
| `table`       | `images/mesa.jpg`       | Una mesa servida (cita)     |

### Menú  (`menu[].image`)
| Categoría   | Archivo sugerido      | Qué foto va bien        |
|-------------|-----------------------|-------------------------|
| Pizzas      | `images/pizzas.jpg`   | Una pizza estrella      |
| Pastas      | `images/pastas.jpg`   | Un plato de pasta       |
| Antipasti   | `images/antipasti.jpg`| Entrada / tabla         |
| Postres     | `images/postres.jpg`  | Tiramisú u otro postre  |

### Galería  (`gallery[]`) — 9 fotos
La 1ª ya es real. Reemplaza las otras 8 con: pizzas, pastas, el local, bebidas,
el horno, postres, detalles, etc. Nombres libres (`images/galeria-1.jpg`, ...).

## Alternativa automática (si la quieres)

Puedo traer las fotos de **Google Maps automáticamente** si me consigues una
**API key de Google Places** (el dueño puede generarla gratis con el crédito inicial
de Google Cloud). Con eso descargo las fotos del perfil del negocio y las dejo locales.
