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
- window.location.protocol: Devuelve el protocolo web utilizado (http o https).
- window.location.assign() - Carga un nuevo documento.

## Herramientas de desarrollo del navegador

### Pestaña Elements

- Filtros y buscar por palabras clave.
- Modificar, crear y eliminar etiquetas.
- Event listeners.
- Properties.
- Opciones para copiar.
- Seguir explorando

### Pestaña Resources

- Ver y guardar archivos.
- Información ofrecida.
- Cambios en tiempo real.
- Snippets - Ejecutar codigo por fragmentos.

### Pestaña Networks

- Interfaz
- Sort By y Filtros de busqueda.
- Limpiar Cookies y Caché.
- Importar y Exportar.

### Pestaña Timeline

- Uso y Grabación.
- Screenshots de la grabación.
- Controls
- Overview:
  - FPS, CPU y Net.
- Flame Chart
- Details
- Sugerencias de Grabación.

### Pestaña Application

- Application
- Storage
- Caché
- Background Services
- Frames

### Pestaña Console

- Funcionamiento
- Apilamiento de mensajes
- Show timestamps
- Borrar el historial
- Conservar el historial
- Guardar el historial
- Eleccion de contexto de ejecución
- Filtrado de los resultados de console
- Filtros por nivel de gravedad:
  - Todos: Muestra todos los resultados de console.
  - Errors: Solo muestra los resultados de console.error().
  - Warnings: Solo muestra los resultados de console.warning().
  - Info: Solo muestra los resultados de console.info().
  - Logs: Solo muestra los resultados de console.log().

## Eventos

### Eventos del Mouse

- click: Ocurre con un click.
- dblclick: Ocurre con un doble click.
- mouseover: Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
- mouseout: Ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.
- OTROS:
  - contextmenu: Ocurre con un click en el boton derecho en un elemento para abrir un menú contextual.
  - mouseenter: Ocurre cuando el puntero se mueve sobre un elemento.
  - mouseleave: Ocurre cuando el puntero se mueve fuera de un elemento.
  - mouseup: Ocurre cuando el usuario suelta un boton del mouse sobre un elemento.
  - mousedown: Ocurre cuando el usuario aprieta un boton del mouse sobre un elemento.
  - mousemove: Ocurre cuando el puntero se mueve mientras está sobre un elemento.

### Eventos del Teclado

- keydown: Ocurre cuando una tecla se deja de presionar.
- keypress: Ocurre cuando una tecla se presiona.
- keyup: Ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.

### Eventos de la Interfaz

- error: Ocurre cuando sucede un error durante la carga de un archivo multimedia.
- load: Ocurre cuando un objeto se ha cargado.
- beforeunload: Ocurre antes de que el documento este a punto de descargarse.
- unload: Ocurre una vez que se a descargado una pagina.
- resize: Ocurre cuando se cambia el tamaño de la vista del documento.
- scroll: Ocurre cuando se desplaza la barra de desplazamiento de un elemento.
- select: Ocurre despues de que el usuario selecciona algún texto de <input> o <textarea>.

### Timers

- setTimeout()
- setInterval()
- clearTimeout()
- clearInterval()

## Control de Flujo y Manejo de Errores

- Sentencias de bloque
- Sentencias de control de flujo
- Sentencias de manejo de excepciones

### Sentencia Switch

- sintaxis y clausula case
- break
- default

### Excepciones y Tipos de excepciones

- Excepciones ECMAScript
- DOMException y DOMError

### try... catch

- Sintaxis
- Objeto Error
- Catch Incondicional
- Catch Condicional
- Sentencia 'Throw'
- Finally

## Desventajas de trabajar de manera obsoleta

- Los efectos negativos (aplicado a metodos, clases y propiedades)

  - Uso excesivo de recursos
  - Código con bugs o fallos
  - Código innecesariamente largo
  - SEO

- ¿Cuando algo se vuelve obsoleto?

  - 'Deprecated'
  - Inútil
  - No recomendado
  - Con bugs o fallos
  - Está por ser remplazado
  - Hay mejores formas de hacerlo

- ¿Como verificar si esta obsoleto?
  - 1 de cada 3 webs utiliza librerias de JavaScript obsoletas
  - Verificar si tienen o usan funciones, metodos, objetos o metodologías obsoletas
  - Verificar en los sitios basados en estandares oficiales

## Callbacks

- Concepto (function in function)

### Promesas

- ¿Que puede representar?
  - Terminación de una operación asíncrona
  - Fracaso de una operación asíncrona

### Funciones Asíncronas

- Operador ASYNC
- Operador AWAIT
