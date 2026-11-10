Piezas sueltas para pantallas de app: navegación, listas, flujos de nodos, datos y conversación. Estilo suave y funcional: esquinas redondeadas, tipografía Geist, superficies blancas sobre gris cálido (o negro en oscuro) y un solo naranja de señal, con verde para lo activo. Cada pieza se pide por nombre y se ordena como se quiera. Las piezas de estilo técnico (mono, esquinas rectas, naranja y negro) viven aparte, en **Módulos Técnicos**.

## Cómo pedir una pantalla

Se describe de afuera hacia adentro y de izquierda a derecha, nombrando las piezas:

```
SideNav (items, footer)
PageHeader (crumbs, title, status)
FlowCanvas → FlowStart · FlowConnector · FlowNode (selected) · FlowCondition
Panel lateral → SearchField · SectionHeader · ListItem ×n
```

- El contenedor va primero (`SideNav`, `PhoneFrame`, `FlowCanvas`, `Card`); dentro, las piezas en orden de lectura.
- Las separaciones salen de `space-1` a `space-12`; nunca de márgenes sueltos.
- Todo cambia de tema con `data-theme="light"` o `"dark"` en el contenedor; no hace falta proveedor.

## Piezas disponibles

| Grupo | Piezas |
| --- | --- |
| Átomos | `Icon`, `IconTile`, `Avatar`, `Badge`, `Chip`, `Button`, `IconButton`, `PagerArrows` |
| Entradas | `SearchField`, `SelectField` |
| Navegación | `SideNav`, `RailNav`*, `MenuList`, `TopNav`, `Announcement`, `PageHeader`, `PillTabs`, `IconDock`, `PhoneFrame` |
| Listas y tarjetas | `SectionHeader`, `ListItem`, `InfoPill`, `Card`, `UserChip`, `ClockBar`, `LogoStrip` |
| Flujo de nodos | `FlowCanvas`, `FlowStart`, `FlowNode`, `FlowCondition`, `FlowConnector` |
| Datos | `StatCard`, `TickBar`, `StackedBar`, `Legend`, `Donut`, `KeyValueStat`, `TimelineMarker`, `EventPill` |
| Conversación | `PanelTitle`, `CommentItem`, `Composer`, `FileTile`, `PersonRow`, `ActionRow`, `FilePreview` |

\* `RailNav` pertenece a Módulos Técnicos; aquí se usa `SideNav` o `IconDock`.

## Recetas

1. **Editor de flujos:** `SideNav` + `PageHeader` + `FlowCanvas` con `FlowStart`, `FlowNode` y `FlowCondition` unidos por `FlowConnector`, y un panel con `SearchField` y `ListItem`.
2. **Panel móvil:** `PhoneFrame` con `StatCard` (con `TickBar`) y `Card` con `Donut` + `Legend`.
3. **Comentarios:** `PanelTitle` + `CommentItem` (con `thread`) + `Composer`.
4. **Archivo:** `FilePreview` o, por partes, `FileTile` + `PersonRow` + `ActionRow`.
5. **Cabecera de sitio:** `Announcement` + `TopNav` con `Button` a la derecha.

## Fundamentos de contenido

- Español neutro y directo; títulos en mayúscula inicial de frase, sin signos de exclamación ni emojis.
- Etiquetas de uno a tres palabras; los estados se escriben como lo que ocurre (“Cambios sin publicar”).
- Las cifras llevan unidad pegada y variación aparte (“+2,1 % vs semana pasada”).

## Fundamentos visuales

- **Color:** `bg` de fondo, `surface` para tarjetas; `accent` (naranja) una vez por vista para la acción principal; `green` para lo activo o seleccionado; `amber` para avisos; `danger` solo para errores. Texto sobre naranja siempre `on-accent` (oscuro).
- **Forma:** `radius-sm` en tiles y chips, `radius-md` en tarjetas y nodos, `radius-lg` en paneles, `radius-pill` en pestañas y botones. Sin sombras salvo `shadow-card` y `shadow-float` en lo que flota.
- **Tipografía:** `Geist` (cargada desde Google Fonts, pesos 300–700); `Geist Mono` solo en etiquetas técnicas y horas. Las cifras grandes van en peso 500.
- **Iconografía:** 68 iconos lineales de 24px, trazo 1,6, que heredan el color; se alojan en `IconTile`, `IconButton` o `Chip`.

## Uso en código

Las piezas son componentes React expuestos en `window.AppKit`. Cada `README` documenta sus props, de modo que se puedan portar a Vue/Nuxt conservando nombres, props y clases `ak-*`.
