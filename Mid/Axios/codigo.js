//! Libreria Axios

//* Introduccion e instalacion  https://github.com/axios/axios

//* Basado en promesas

//* Objeto axios
// axios("informacion.txt")
//     .then(res=>console.log(res.data))


//* metodo get() y post()
//+ get()
// axios.get("informacion.txt")
//     .then(res=>console.log(res))

//+ post()
// axios.post("informacion.txt")
//     .then(res=>console.log(res))

//+ post()
axios.post("https://reqres.in/api/users",{
    "nombre" : "matias",
    "apellido" : "erco"
})
    .then(res=>console.log(res))

//* formas de enviar datos

//* Ventajas