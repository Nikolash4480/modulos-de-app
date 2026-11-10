Agrupa un comentario raíz y sus respuestas: las respuestas se sangran 24px y cuelgan de una línea continua con un codo redondeado en cada una.

**Props:** `children` (CommentItem[]): El primero es el comentario raíz; los demás, sus respuestas en orden.
**Cuándo:** Cuando un comentario recibe respuestas. Cada comentario va en tarjeta; la línea une siempre a la última respuesta.
**Evitar:** Más de dos niveles; mezclar `plain` dentro del hilo; poner estilos de márgenes a los comentarios hijos.
