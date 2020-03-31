# jQuery

### Selectores

Un selector nos sirve para poder manipular un objeto del DOM, puedes buscar dicho objeto ya sea por su id, clase, atributo, etc.

Para PlatziVideo necesitamos un selector de un contenedor para ponerle dentro la lista de películas.

En jQuery hacemos un selector de la siguiente forma:

- const $home = $(‘ .home ’);

Por convención una variable que este represente un objeto del DOM lleva el signo $, esto es para tener claro que estamos manipulando un objeto del DOM y no algún tipo de información o dato.

Dentro de JavaScript existen distintas funciones para hacer selectores, entre ellas se encuentra:

-getElementById: recibe como parámetro el id del objeto del DOM que estás buscando. Te regresa un solo objeto.

-getElementsByTagName: recibe como parámetro el tag que estas buscando y te regresa una colección html de los elementos que tengan ese tag.

-getElementsByClassName: recibe como parámetro la clase y te regresa una colección html de los elementos que tengan esa clase.

-querySelector: va a buscar el primer elemento que coincida con el selector que le pases como parámetro.

-querySelectorAll: va a buscar todos los elementos que coincidan con el selector que le pases como parámetro.