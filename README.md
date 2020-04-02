# jQuery

### DataSet

Dataset permite acceder a un objeto con todos los atributos data de un elemento DOM.

```html
<div id="element" data-id="10" data-category="action">
</div>
```

```javascript

const $element = document.getElementById("element");

//guarda el valor de data-id
const id = $element.dataset.id;
//guarda el valor de data-category
const category = $element.dataset.category;
```