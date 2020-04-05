(async function load() {
  //await = esperar

  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json();
    if(data.data.movie_count > 0){
      //aqui se acaba
      return data;
    }
    // si no hay pelis aqui continua
    throw new Error('No se encontro ningun resultado')
  }
  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')

  function setAttributes($element, attributes) {
    for(const attribute in attributes){
      $element.setAttribute(attribute, attributes[attribute])
    }
  }

  const BASE_API = 'https://yts.mx/api/v2/'

  function featuringTemplate(peli) {
    return(
      `<div class="featuring">
        <div class="featuring-image">
        <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
        <p class="featuring-title">Pelicula encontrada</p>
        <p class="featuring-album">${peli.title}</p>
        </div>
        </div>`
    )
  }



  $form.addEventListener('submit', async (event) => {
    event.preventDefault() //no recarga la pag web cuando enviamos datos
    $home.classList.add('search-active')
    const $loader = document.createElement('img') // cremos la etiqueta <img>

    setAttributes($loader,{
      src : 'src/images/loader.gif',
      height: 50,
      width: 50,
    })

    $featuringContainer.append($loader)


    const data = new FormData($form);
    try {
      const {
        data:{
          movies : pelis
        }
      } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
      const HTMLString = featuringTemplate(pelis[0])
      $featuringContainer.innerHTML = HTMLString
    } catch (error) {
      alert(error.message)
      $loader.remove()
      $home.classList.remove('search-active')
    }
  })



  function videoItemTemplate(movie,category){
    return (
      `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
        <div class="primaryPlaylistItem-image"
          <p${movie.id}></p>
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
    $element.addEventListener('click', () => {
      showModal($element)
    })
  }

  function renderMovieList(list,$container,category) {
    //list = acttionList.datamovies
    $container.children[0].remove();
    list.forEach((movie) =>{
      const HTMLString = videoItemTemplate(movie,category)
      const movieElement = createTemplate(HTMLString)
      $container.append(movieElement);
      const image = movieElement.querySelector('img')
      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn')
      })
      addEventClick(movieElement)
    })
  }

  //Si hay datos de api alamacenados en localStorage hay que traerlos y si no los tiene, hay que Pedirlos y almacenarlos.

  async function cacheExist(category) {
    const listName = `${category}List`;

    const cacheList = window.localStorage.getItem(listName);

    if(cacheList){
      return JSON.parse(cacheList)
    }

    const {data: {movies: data} } = await getData(`${BASE_API}list_movies.json?genre=${category}`);

    window.localStorage.setItem(listName, JSON.stringify(data))

    return data
  }

  const fictionList = await cacheExist('Sci-Fi')

  function templatePlayList(title){
    return(
      `<li class="myPlaylist-item">
        <a href="#">
          <span>
          ${title}
          </span>
        </a>
      </li>`
    )
  }

  fictionList.forEach((movie)=>{
      const $playList = document.getElementsByClassName('myPlaylist')[0]
      const HTMLString = templatePlayList(movie.title);
      const div = document.createElement('div')
      div.innerHTML = HTMLString
      $playList.append(div.children[0])
  })


  const animationList = await cacheExist('animation')
  const $animationContainer = document.getElementById('animation')
  renderMovieList(animationList, $animationContainer, 'animation')

  const actionList = await cacheExist ('action')
  const $actionContainer = document.querySelector('#action')
  renderMovieList(actionList,$actionContainer, 'action')

  const dramaList= await cacheExist ('drama')
  const $dramaContainer = document.getElementById('drama')
  renderMovieList(dramaList, $dramaContainer, 'drama')


  const $modal = document.getElementById('modal')
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')

  function findById(List, id) {
    return List.find(movie=> movie.id === parseInt(id,10))
  }

  function findMovie(id, category) {
    switch (category) {
      case 'animation':
        return findById(animationList,id)
      case 'action':
        return findById(actionList,id)
      default:
        return findById(dramaList,id)
    }
  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id,category)

    $modalTitle.textContent = data.title
    $modalDescription.textContent = data.description_full
    $modalImage.setAttribute('src', data.medium_cover_image)
  }

  $hideModal.addEventListener('click',hideModal)
  function hideModal() {
    $overlay.classList.remove('active'); //podemos modificar el nombre de la clase de HTML
    $modal.style.animation = 'modalOut .8s forwards'; // modificamos el los estilos de css por su clase
  }

})()


//------------------------usuarios random--------------------------
async function load2 () {

  async function getData(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error('No se encontro ningun resultado')
    }
  }



  function template(personData) {
    return(
      `<a href="#" class="container_Friend">
      <img src="${personData.picture.thumbnail}" alt="echame la culpa" />
      <span>
      ${personData.name.first} ${personData.name.last}
      </span>
      </a>`
    )
  }
  async function random() {
    for (let i = 0; i < document.getElementsByClassName('playlistFriends-item').length; i++) { // este codigo mira la catidad de veces que tengo la misma  clase en html
      const {results: users} = await getData('https://randomuser.me/api/')
      let $Friend_item = document.getElementsByClassName('playlistFriends-item')[i]
      users.forEach(personData => {
        // console.log($Friend_item);
        // console.log('personData',personData);
        const HTMLString = template(personData);
        var html = document.implementation.createHTMLDocument()
        html.body.innerHTML = HTMLString
        $Friend_item.append(html.body.children[0])
        // console.log($Friend_item);
      })
    }
  }

  await random()
}

load2()
