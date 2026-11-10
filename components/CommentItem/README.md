Comentario con avatar, autor, hora, botón de respuesta y texto. En tarjeta (`surface-2`) para destacar; en versión `plain` para listas largas, separado del anterior por un filete.

**Props:** `name` (string): Autor; `initial` (string): Inicial del avatar; `time` (string): Hora relativa; `children` (string): Texto; `plain` (boolean): Sin tarjeta: separado por un filete superior; `reply` (boolean): Botón de respuesta; true.
**Cuándo:** Hilos de revisión de documentos. Las tarjetas se separan con `space-2`; los `plain` van pegados y el filete hace de separador.
**Evitar:** Mezclar tarjetas y `plain` en el mismo panel; para respuestas anidadas usa `CommentThread`.
