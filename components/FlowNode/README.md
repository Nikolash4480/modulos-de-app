Tarjeta de nodo: tile de icono, título, subtítulo, insignia opcional y texto descriptivo; el seleccionado lleva borde verde y halo.

**Props:** `icon` (string): Icono del tile; `iconTone` (IconTile tone): Color del tile; `dark` para acciones externas; `title` (string): Título; `subtitle` (string): Tipo de nodo o servicio; `body` (string): Descripción; `badge` (string): Insignia verde (confianza, 96 %); `selected` (boolean): Estado seleccionado; `width` (number): Ancho; 196 por defecto.
**Cuándo:** Cada paso de un flujo. `neutral` para disparadores y datos, `dark` para integraciones externas.
**Evitar:** Texto de más de tres líneas; más de un nodo seleccionado.
