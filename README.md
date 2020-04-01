# jQuery

### Creación de DOM

La plantilla que creamos la clase anterior de momento es puro texto, no es un elemento HTML que podamos poner dentro del navegador pues si los imprimimos en el navegador lo único que veremos es texto.
Vamos a insertar la plantilla dentro de nuestro container, para ello recuerda que JavaScript se lee de arriba hacia abajo entonces debemos declarar la variable del container antes de llamar a algún método de este.
Para convertir nuestra plantilla de texto a un Document Object Model necesitamos crear dentro de memoria un documento HTML, esto es posible gracias al método document.implementation.createHTMLDocument. A este documento HTML le vamos a añadir al body, mediante innerHTML, nuestra plantilla de texto. Una vez añadida le pedimos al body el primer elemento hijo que tenga y este lo añadimos a nuestro container.
Este flujo es la magia que hay detrás de varias librerías y frameworks que nos ayudan a crear interfaces.