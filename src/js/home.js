// De la forma de jQuery

$.ajax('https://randomuser.me/api/error',{
  method: 'GET',
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    console.log(error)
  }
})

// De la forma de JavaScript vanilla

fetch('https://randomuser.me/api/')
  .then(function (response) {
    // console.log(response)
    return response.json()
  })
  .then((user) => console.log('User', user.results[0].name.first))
  .catch(()=> console.log('Algo fallo'))