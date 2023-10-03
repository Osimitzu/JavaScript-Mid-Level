# JavaScript Mid-Level

### Introducción a Window

- Hereda las propiedades de EventTarget
- open() - Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.
- close() - Cierra la ventana actual, o la ventana en la que se llamo.
- closed: Indica si la ventana referenciada esta cerrada o no.
- name: Obtiene / establece el nombre del contexto de exploración de la ventana.
- stop() - Detiene la carga de recursos en el contexto de navegación actual.
- alert() - Muestra un cuadro de alerta con el contenido especificado y un boton aceptar.
- print() - Abre el cuadro de dialogo imprimir para imprimir el documento actual.
- prompt() - Abre un cuadro de dialogo con un mensaje que solicita al usuario un dato (string).
- confirm() - Abre un cuadro de dialogo con un mensaje y dos botones: 'Aceptar' y 'Cancelar'.

- screen: Devuelve una referencia al objeto de pantalla asociado con la ventana.
- screenLeft: Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
- screenTop: Devuelve la distancia vertical entre el boder superior del navegador y el borde superior de la pantalla.
- scrollX: Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente.
- scrollY: Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente.
- scroll() - Desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)

- minimize() - Minimiza la ventana.
- resizeBy() - Cambia el tamaño de la ventana actual en una cantidad especifica.
- resizeTo() - Redimenciona dinámicamente la ventana.
- moveBy() - Mueve la ventana en una ubicación relativa.
- moveTo() - Mueve la ventana en una ubicación absoluta.

- Objetos barprop:
  - locationbar
  - menubar
  - personalbar
  - scrollbars
  - statusbar
  - toolbar

### Location

- window.location.href: Devuelve el href (URL) de la pagina actual.
- window.location.hostname: Devuelve el nombre del dominio del servidor web.
- window.location.pathname: Devuelve la ruta y el nombre del archivo de la pagina actual.
