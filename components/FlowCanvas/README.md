Contenedor de disposición: apila de arriba abajo, centrados, los nodos, condiciones y conectores de un flujo. No pinta fondo; para el punteado se coloca dentro de un `DotField`.

**Props:** `children` (ReactNode): Nodos, conectores y condiciones en orden de arriba hacia abajo.
**Cuándo:** Siempre que se arme un flujo vertical. Dentro de `DotField` para el lienzo clásico, o directamente sobre una tarjeta o la página.
**Evitar:** Ponerle fondo o relleno (eso es de `DotField`); usarlo para listas sin conexiones.
