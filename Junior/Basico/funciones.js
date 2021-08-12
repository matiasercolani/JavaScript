// funciones
// function saludar(){
//     respuesta = prompt("Hola Matias! Como andas?");
//     if(respuesta == "bien"){
//         alert("me alegro");
//     }
//     else{
//         alert("una pena");
//     }
// }


// Otra forma de declararla
// const hola = function(){
//     respuesta = prompt("Hola Matias! Como andas?");
//     if(respuesta == "bien"){
//         alert("me alegro");
//     }
//     else{
//         alert("una pena");
//     }
// }

// saludar();


// return. devuelve un valor la funcion. Cuando de lo declara todo lo que este debajo de no se ejecuta
// function retornar(){
//     let respondido;
//     respondido = "erco";
//     return respondido;
// }

// Funcion de flecha

saludito = (nombre) => {
    document.write("Hola " + nombre);
}

saludito('pedro');