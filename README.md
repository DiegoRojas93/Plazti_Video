# jQuery

### Ajax en jQuery y Javascript

Una característica muy solicitada en cualquier sitio dinámico es solicitar datos a un servidor, denominado API. Para esto normalmente se utiliza Ajax.

Ajax recibe dos parámetros los cuales son la url de la API y un objeto donde pondrás la configuración que se usara para realizar la petición. En la configuración se añaden dos funciones para manejar cuando la petición se realizo correctamente y cuando falla.

JavaScript internamente cuenta con una función llamada fetch que también realiza peticiones a una API. Al igual que Ajax necesita dos parámetros, una url y una configuración, pero si solo le mandas la url fetch usará una configuración por defecto donde el método HTTP será GET.
fetch te regresa una promesa, esa promesa al resolverse te da los datos de respuesta y tiene un método llamado json que te regresa otra promesa con los datos en formato JSON.

Las promesas resuelven el problema del Callback Hell haciendo que una promesa pueda devolver otra promesa y en lugar de ser anidadas como los callback, estas promesas son encadenadas.

https://www.youtube.com/feed/history