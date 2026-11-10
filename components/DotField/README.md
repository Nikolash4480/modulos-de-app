Fondo de cuadrícula de puntos (1px) con color de fondo propio; se coloca detrás de cualquier contenido y no tiene lógica de flujo.

**Props:** `tone` ('sunken' | 'plain' | 'night'): Fondo: gris hundido (por defecto), fondo de página o noche; `gap` (number): Paso de la cuadrícula en px; 20 por defecto; `padding` (number): Relleno interior en px; 24 por defecto; `children` (ReactNode): Contenido que va encima.
**Cuándo:** Detrás de un `FlowCanvas`, de un panel de ideas o de cualquier zona de trabajo libre. Ocupa el ancho de su contenedor; el alto lo da el contenido o el contenedor.
**Evitar:** Ponerlo detrás de texto largo; usar `gap` menor de 12 (ruido visual).
