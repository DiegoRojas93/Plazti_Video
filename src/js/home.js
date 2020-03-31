const getUser1 = new Promise(function (todoBien, todoMal) {
  // llama a una api
  setTimeout(function () {
    //luego de 3 segundos
    todoBien()
  },3000)
})
const getUser2 = new Promise(function (todoBien, todoMal) {
  // llama a una api
  setTimeout(function () {
    //luego de 3 segundos
    todoBien()
  },5000)
})



Promise.all([getUser1,getUser2]) // retorna una respuesta si todas las promesas son ejejutadas
  .then(()=>console.log('Todo está Bien en la vida 😀'))
  .catch((message)=>console.log(message))


Promise.race([getUser1,getUser2])// retorna una respuesta de la promesas se que sea ejecutada de la forma mas rapida
  .then(()=>console.log('Todo está Bien en la vida 2😀'))
  .catch((message)=>console.log(message))
