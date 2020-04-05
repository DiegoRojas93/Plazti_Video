# jQuery

### localStorge

El localStorrge o almacenamiento local guarda los datos de forma de que no se borren cuando se cierre el navegador. A diferecia de sessionStorage permite almacenar datos y estos datos se van a borrar cuando se termine la sessión del navegador.

Lo que vamos hacer en esta clase sera respaldar los datos de la api para que no se vuelvan a pedir cuando se recargue el navegador por medio del localStorage.

El localStorage, esta dentro de windows, y podermos acceder en la consola del navegardor escribiendo el sigiente codigo

```
window.localStorage
```
Para generar datos en localStorage lo hacemos con el sigiente codigo

```
window.localStorage.setItem('nombre':'Diego')
```
Para borrar datos en localStorage lo hacemos con el sigiente codigo

```
window.localStorage.Clear()
```
Para obtener datos en localStorage lo hacemos con el sigiente codigo

```
window.localStorage.getItem('nombre')
```

El localStorage solo guarda texto plano y no objetos. Para guardar objetos hay que convertir los objetos en texto plano por medio de la funcion llamada JSON.stringify()

```
window.localStorage.setItem('objeto',JSON.stringify({'pelicula':'Avergers'}))
```
Cuando queramos obtener el objeto que esta en el almacenamiento local por medio de window.localStorage.getItem('nombre') no arrojara el objeto como un string, para ello se podemos convertir este texto a un objeto real por medio de JSON.PARSE

```
JSON.parse(window.localStorage.getItem('nombre'))
```