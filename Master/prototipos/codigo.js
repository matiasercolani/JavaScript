//+ Prototipos (En javaScript todo es un objeto)
//? Definicion
// objeto normal
let objeto = {
    "propiedad":"datos"
};

let cadena = "cadenito";



console.log(objeto);

console.log(cadena.__proto__);


// Cada vez que creamos una funcion nosotros creamos nuestro propio proto
let funcion = function(){};

console.log(funcion.prototype.__proto__);




//? Prototype Chain

//? Prototype Object (todos los prototipos lo contienen)








//+ Caracteristicas

//  Un prototipo definido en su codigo fuente es mutable

// Es en si mismo un objeto, asi como otros.

// Tiene una existencia fisica en la memoria

// Puede ser modificado y llamado.

// Puede ser visto como un modelo ejemplar de una familia objeto.

// Un objeto hereda propiedades (valores y metodos) de su prototipo.








//+ Propiedad proto(dunder proto)
// dentro de __proto__ estan todas los metodos que se pueden utilizar.

let variable = ["hola", 9, true];

variable.reverse();

console.log(variable);



class Objeto{
    constructor(){};
    hablar(){
        console.log("hola");
    }
}

const objeto1 = new Objeto();

console.log(objeto1);

console.log(objeto1.__proto__);

console.log(objeto1.__proto__.__proto__);








//+ Sobrescribir __proto__ vs SobreEscribir metodo

//? De esta forma se esta agregando y no modificando
// objeto1.hablar = ()=>{
//     console.log("modificado afuera");
// }

// objeto1.hablar();


//? De esta forma se esta modificando
//  objeto1.__proto__.hablar = ()=>{
//      console.log("modificado afuera");
//  }

// console.log(objeto1);



//? Heredar propiedades

// let arr = [];

// arr.__proto__ = objeto1;

// arr.hablar();


//? Modifica y heredar

  objeto1.__proto__.hablar = ()=>{
      console.log("Hablando desde afuera");
 }

let arr = [];

arr.__proto__ = objeto1;

arr.hablar();

