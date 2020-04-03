# jQuery

### Encontrando elementos en lista (find)

find() devuelve el primer elemento de un array que cumpla con el criterio de búsqueda. Si no se encuentra ningún elemento devuelve undefined.

```javascript

function find(list, id) {
  return list.find(movie => movie.id === id)
}
```
Información referencial: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find

### Switch

```javascript

switch (category) {
  case "action": {
    //código de action
  }
  case "drama": {
    //código de drama
  }
  default: {
    //código por defecto
  }
}
```