(async function load() {
  //await = esperar

  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')

  function setAttributes($element, attributes) {
    for(const attribute in attributes){
      $element.setAttribute(attribute, attributes[attribute])
    }
  }

  $form.addEventListener('submit',(event) => {
    event.preventDefault()
    $home.classList.add('search-active')
    const $loader = document.createElement('img') // cremos la etiqueta <img>

    // la forma para crear un atributo en jquery es asi
    //${'selector'}.attr{'atributo':'parametros o instancia ,height: '50px'}
    setAttributes($loader,{
      src : 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader)
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
      showModal()
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


  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle= $modal.querySelector('h1')
  const $modalImage= $modal.querySelector('img')
  const $modalDescription= $modal.querySelector('p')

  function showModal() {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  const hideModal = () => {
    $overlay.classList.remove('active'); //podemos modificar el nombre de la clase de HTML
    $modal.style.animation = 'modalOut .8s forwards'; // modificamos el los estilos de css por su clase
  }

  $hideModal.addEventListener('click',hideModal)

})()