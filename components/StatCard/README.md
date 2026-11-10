Tarjeta de estadística con título e icono de información, acción “Detalles”, cifra con variación, contenido libre y pie.

**Props:** `title` (string): Título; `info` (boolean): Icono de información junto al título; true por defecto; `action` (string): Texto del botón de contorno a la derecha; `headRight` (ReactNode): Contenido a la derecha si no hay acción (p. ej. variación); `value` (string): Cifra principal; `delta` (string): Variación (“+2,1 %”); `deltaTone` ('up' | 'down'): Verde o rojo; `deltaLabel` (string): Texto de comparación (“vs semana pasada”); `footer` (ReactNode): Pie; `children` (ReactNode): Barra de ticks, barra apilada o gráfico.
**Cuándo:** Maquetas móviles de panel de control; una tarjeta por magnitud.
**Evitar:** Más de una cifra grande; más de un gráfico dentro de la tarjeta.
