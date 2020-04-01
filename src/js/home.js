(async function load() {
  //await = esperar

  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const $form = document.getElementById('form')

  $form.addEventListener('submit',(event) => {
    event.preventDefault()
  })

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log('accion',actionList)
  console.log('drama',dramaList)
  console.log('animation',animationList)

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

  function createTemplate(HTMLString) {
    const $html = document.implementation.createHTMLDocument();
    $html.body.innerHTML = HTMLString
    return $html.body.children[0]
  }

  function addEventClick($element) {

    //Para que un elemento HTML pueda escuchar algún evento debemos usar el método addEventListener. Este método recibe dos parámetros, el nombre del evento que va a escuchar y la función que se va a ejecutar al momento de que se accione el evento.

    $element.addEventListener('click', () => {
      alert('Click')
    })

    //para la forma de jQuery deberia hacerce se esta forma
    // $('div,'.normalize('click', ()=>{}))
  }
  function renderMovieList(list,$container) {
    //list = acttionList.datamovies
    $container.children[0].remove()
    list.forEach((movie) =>{
      const HTMLString = videoItemTemplate(movie)
      const movieElement = createTemplate(HTMLString)
      $container.append(movieElement);
      addEventClick(movieElement)
    })
  }

  const $actionContainer = document.querySelector('#action')
  renderMovieList(actionList.data.movies, $actionContainer)

  const $dramaContainer = document.getElementById('drama')
  renderMovieList(dramaList.data.movies, $dramaContainer)

  const $animationContainer = document.getElementById('animation')
  renderMovieList(animationList.data.movies, $animationContainer)

//
  const $featuringContainer = document.getElementById('#featuring')
  const $home = document.getElementById('#home')


  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle= $modal.querySelector('h1')
  const $modalImage= $modal.querySelector('img')
  const $modalDescription= $modal.querySelector('p')

})()