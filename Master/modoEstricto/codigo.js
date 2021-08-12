"use strict";



//+ Modo strict ("use strict")

// convierte errores de JavaScript en excespciones

// Mejorando la optimizacion de los errores y consigue mejores tiempos de ejecucion

// Evita sintaxis usadas en posteriores a ES6

// No permite que el programador realize una "mala sintaxis"


//+ Usando Modo Esctricto

//* Variables declaradas

let nombre = "matias";
const variable = "pepe";

//* Modificar propiedadaes (defineProperty() y writable)

// const obj = {};

// Object.defineProperty(obj,"nombre", {value:"pedro", writable: false});

// console.log(obj.nombre);

//* Agregar propiedades

// const obj = {nombre:"Matias"};

// obj.apellido = "Ercolani";

// console.log(obj.nombre);
// console.log(obj.apellido);


//* No se puede agregar propiedades a un String

// const obj = {nombre:"Matias"};

// Object.preventExtensions(obj);

// obj.apellido = "Ercolani";

// console.log(obj.nombre);
// console.log(obj.apellido);


//* No existen las multiples variables en una funcion

// function hablar(texto, texto){
//     console.log(texto);
// }

//* Delete en objetos o variables

// const obj = {
//     nombre: "Matias"
// }

// delete obj.nombre;

// console.log(obj.nombre);

//* Las palabras reservadas no pueden ser usadas como variables 

// let await = "pedro";

//* Cambia el This

//* Numeros Octales con una "o" adelante y no existe el With

// console.log(0O25);

//* Arguments y Eval no puede ser variables

// arguments = "hola";
// console.log(arguments);

// eval = "hola";
// console.log(eval);

// Dentro de una funciones y fuera

nombre = "Matias";

function decir(){
    console.log(nombre);
}

decir();
