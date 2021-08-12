//! Fetch

//* Introduccion (Es el reemplazo actual de AJAX)

//* Basado en promesas

//* Objeto fetch

//* text() - Es lo mismo que poner JSON.stringify()
// peticion = fetch("https://reqres.in/api/unknown/2");

// peticion
//     .then(res=>res.text())
//     .then(res=>console.log(res))

//* json()

// peticion = fetch("https://reqres.in/api/unknown/2");

// peticion
//     .then(res=>res.json())
//     .then(res=>console.log(typeof res))

//+ Otra forma parseando 
// peticion = fetch("https://reqres.in/api/unknown/2");

// peticion
//     .then(res=>res.text())
//     .then(res=>console.log(typeof JSON.parse(res))


//+ Alternativa POST (La mejor)
// fetch("https://reqres.in/api/users",{
//     method : "POST",
//     body : JSON.stringify({
//         "nombre" : "Matias",
//         "apellido" : "Erco"
//     }),
//     headers: {"Content-type" : "application/json"}
// })
//     .then(res=>res.json())
//     .then(res=>console.log(res))



//* blob()


const imagen = document.querySelector(".imagen");

fetch("fa.png")
    .then(res=>res.blob())
    .then(img=>imagen.src = URL.createObjectURL(img))
    



//* formData() - investigar

//* arrayBuffer() - investigar
