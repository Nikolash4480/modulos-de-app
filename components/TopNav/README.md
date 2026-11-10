Barra superior de 64px con marca a la izquierda, enlaces y una acción a la derecha.

**Props:** `brand` (string): Nombre de la marca; `logo` (string): Icono de la marca; `links` ((string | { label, active?, menu? })[]): Enlaces; `menu` añade flecha; `action` (ReactNode): Botón a la derecha.
**Cuándo:** Cabecera de un sitio o de una app web, bajo un `Announcement`.
**Evitar:** Más de 5 enlaces (los que no caben se recortan); dos acciones primarias.
