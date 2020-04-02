# jQuery

### FORMULARIOS

Este es el resumen de la clase de formularios (Esta es una pequeña muestra de lo que se puede hacer ****new FormData**** en nuestros proyectos).

Podemos tomar la información que se deja en un formulario de un sitio web  al fijarla cuando escribimos sobre ella. Uno de los atributos de form o un input en HTML es **name**, en ella guarda en memoria la  información de que dejamos escrito.


```
<form action="" class="search" id="form">
<input type="text" name="name" placeholder="Buscar un artista o tema favorito"/>
</form>
```
Para obtener toda la información a javaScript la conseguimos creando un nuevo objeto (inf de FormData: https://developer.mozilla.org/es/docs/Web/Guide/Usando_Objetos_FormData#Creaci%C3%B3n_de_un_objeto_FormData_desde_cero)


```
const data = new FormData($form);
```
ó

```
const data = new FormData(document.getElementById('form'));
```
para obtener el dato que pusimos por parámetro en nuestro formulario es por el método get.

```
const informacion = data.get('name');
console.log(informacion);
	// Avengers
```

**_Nota:_**para establecer datos de un formulario en JavaScript utilizamos el método get.

```
const nuevaData = new FormData(document.getElementById('form') )
nuevaData.set('name','avengers')
```
para verla la podemos visualizar en cosola utilizado el método get ya anteriormente dicho.
```
data.get('name');
```