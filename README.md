# LSG — Tema Shopify

Tema de Luxury Selection Gallery, igual a lsg-web.vercel.app. Conectado a Shopify desde GitHub: cada cambio en la rama `main` se refleja en la tienda.

## Cómo cargar una pieza (en Shopify > Productos)

- **Título**: nombre de la pieza. **Proveedor**: la marca (ej. Louis Vuitton). **Tipo de producto**: la categoría (Calzado, Buzos…).
- **Precio**: en USD. **Inventario**: 1. Cuando se vende y queda en 0, la pieza aparece como "Vendida".
- **Opción "Talle"** con el valor del talle (ej. `M`, `42`, `7.5 LV · 9.5 US`).
- **Etiquetas**:
  - `numero:14` → número de la pieza (Nº 014)
  - `condicion:DS` (o `Nueva`, `Impecable`, `Con uso`)
  - `badge:Pieza única` (o `badge:Edición limitada`) → sello dorado
  - `destacada` → aparece en "Piezas destacadas" del inicio
  - `reservada` → la marca como reservada
- **Descripción**: un párrafo y, si querés, una lista con los detalles.

## Textos, videos e imágenes

Tienda online > Personalizar: cada sección del inicio tiene sus textos, videos e imágenes editables. WhatsApp y redes: Personalizar > Configuración del tema > Contacto y redes.
