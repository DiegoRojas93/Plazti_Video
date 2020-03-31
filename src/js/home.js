(async function load() {
  //await = esperar

  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
  const horrorList = await getData('https://yts.mx/api/v2/list_movies.json?genre=horror')
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')

  console.log('actionList', actionList);
  console.log('horrorList', horrorList);
  console.log('animationList', animationList);
  console.log('');

  console.log(actionList, horrorList, animationList);
})()