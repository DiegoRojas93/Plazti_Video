# jQuery

### Eventos


Toda aplicación web necesita lidiar con interacciones del usuario, desde un click hasta arrastrar algún elemento, estas interacciones son escuchadas por el navegador mediante algo llamado eventos. Existen muchos tipos de eventos, el más común es el evento de click.
En esta clase vamos a trabajar con el evento click y submit.
Para que un elemento HTML pueda escuchar algún evento debemos usar el método addEventListener. Este método recibe dos parámetros, el nombre del evento que va a escuchar y la función que se va a ejecutar al momento de que se accione el evento.
La página se recarga al momento de ejecutarse el evento submit, para evitar esto debemos quitarle la acción por defecto que viene en submit usando el método event.preventDefault().