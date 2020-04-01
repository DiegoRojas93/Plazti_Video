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
  console.log(actionList)

  function videoItemTemplate(movie){
    return (
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }

  const $actionContainer = document.querySelector('#action')

  actionList.data.movies.forEach((movie) =>{
    const HTMLString = videoItemTemplate(movie)

    const $html = document.implementation.createHTMLDocument()
    // crea en memoria del JS un documento HTML

    $html.body.innerHTML = HTMLString //innerHTML agrega mas codigo html por medio de strings, en este caso el HTMLString

    // debugger


    $actionContainer.append($html.body.children[0]) // append hace añadir el HTMLString (codigo) al final de $acttion container del html

    //children[0]=children es una propiedad que solo selecciona la seccion que sea tomada por su parametro en este caso el el primero
  })



  
  const $dramaContainer = document.getElementById('#drama')
  const $animationContainer = document.getElementById('#animation')
  const $featuringContainer = document.getElementById('#featuring')
  const $form = document.getElementById('#form')
  const $home = document.getElementById('#home')


  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle= $modal.querySelector('h1')
  const $modalImage= $modal.querySelector('img')
  const $modalDescription= $modal.querySelector('p')

})()