(async function load() {
  //await = esperar

  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData;('https://yts.mx/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');

  // //Para hacer un Selector de la forma jquery es asi

  // const $home = $('.home');

  // //Para hacer un Selector de la forma javaScript vanilla

  // const $modal = document.getElementById('modal'); //Obtenemos el elemento HTML por su id

  // document.getElementsByClassName('modal') //Obtenemos los elementos HTML por sus clases

  // document.getElementsByClassName('modal')[0] //Para obtener es especifico un elemento de todas las clases encontradas en especificamos el la posicion del elememto a escoger por medio de llaves cerradas []

  // document.getElementsByTagName('div')//Obtenemos el elementos HTML por su etiqueta o tag

  // document.getElementsByTagName('div')[20]//Para obtener es especifico un elemento de todas las etiquetas encontradas en especificamos el la posicion del elememto a escoger por medio de llaves cerradas []

  // document.querySelector('.modal'); //Va a buscar el primer elemento que coincida con el id, clase ó tag que le pases como parámetro. Debo especificar el si es un id o clase por medio de . ó # como si fuera en css

  // document.querySelectorAll('overlay') //Va a buscar todos los elementos que coincidan con el selector que le pases como parámetro.

  const $actionContainer = document.querySelector('#action')
  const $dramaContainer = document.getElementById('#drama')
  const $animationContainer = document.getElementById('#animation')
  
  const $featuringContainer = document.getElementById('#featuring')
  const $form = document.getElementById('#form')
  const $home = document.getElementById('#home')


  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle= $modal.querySelector('h1') //podemos buscar un selector por en especifico dendro de modal

  const $modalImage= $modal.querySelector('img')
  const $modalDescription= $modal.querySelector('p')
})()