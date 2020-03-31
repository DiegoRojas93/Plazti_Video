# jQuery

### Creación de templates

Vamos a crear una plantilla con nuestro elemento base, dicha plantilla será recibirá valores dinámicos.

Dentro de jQuery, la creación de un template seria con un texto base y si nuestro texto cuenta con distintas líneas más aparte tuviera valores dinámicos se vería de la siguiente forma:

```html
‘<div class=”container”>’ +
    ‘<p id=’+ id +’>Hola Mundo<p>’ +
‘<div>’
```

Desde ECMAScript 6 contamos con una nueva característica llamada template literals que se representan con las comillas invertidas ``, el ejemplo anterior pasaría a verse de esta forma:

```html
`<div class=”container”>
    <p id=${id}>Hola Mundo<p>
<div>`
```