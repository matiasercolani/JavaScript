//! AJAX (Abrir en XAMP)

//* Introduccion e instalacion del servidor

//* Objeto XMLHttpRequest

// const peticion = new XMLHttpRequest();

// peticion.open("GET", "informacion.txt");

// peticion.send();

// console.log(peticion);

//* Enviar peticiones GET
//+ Ya no se utiliza mas!
// const peticion = new XMLHttpRequest();

// peticion.addEventListener("readystatechange",()=>{
//     if(peticion.readyState == 4 && peticion.status == 200){
//         console.log(peticion.response);
//     }
// })

// peticion.open("GET", "informacion.txt");

// peticion.send();

//* Trabajar el resultado de las peticiones
//+ Esta es la forma Ajax actual

// const peticion = new XMLHttpRequest();

// peticion.addEventListener("load",()=>{
//     let respuesta;
//     if(peticion.status == 200) respuesta = peticion.response;
//     else respuesta = "Lo siento, no se a encontrado el recurso";
//     console.log(respuesta);
// })

// peticion.open("GET", "informacion.txt");

// peticion.send();

//* Objeto ActiveXObject
// let peticion;

// if(window.XMLHttpRequest){
//     peticion = new XMLHttpRequest();
// }else{
//     peticion = new ActiveXObject("Microsoft.XMLHTTP");
// }

// peticion.addEventListener("load",()=>{
//     let respuesta;
//     if(peticion.status == 200) respuesta = peticion.response;
//     else respuesta = "Lo siento, no se a encontrado el recurso";
//     console.log(JSON.parse(respuesta).nombre);
// })

// peticion.open("GET", "informacion.txt");

// peticion.send();


//* Nueva forma de trabajar el resultado

//* Enviar peticiones POST
let peticion;

if(window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
}else{
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

peticion.addEventListener("load",()=>{
    let respuesta;
    if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "Lo siento, no se a encontrado el recurso";
    console.log(JSON.parse(respuesta));
})

peticion.open("POST", "https://reqres.in/api/users");

peticion.setRequestHeader("Content-type", "application/json:charset=UTF8");

peticion.send(JSON.stringify({
    "nombre":"erco",
    "trabajo":"programador"
}));


