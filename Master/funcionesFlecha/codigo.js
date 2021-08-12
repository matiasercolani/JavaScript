"use strict";
//+ Funciones Flecha

//*¿Porque aparecieron? (Funciones compactas y el uso del this)


//* Si solo hay una expresion, la retornan
// Con cuerpo
// const saludar = ()=>{
//     console.log("Hola");
//     console.log("como estas");
// }

// resultado = saludar();
// console.log(resultado);

// Una sola linea
// const saludar = ()=> nombre="Hola";

// resultado = saludar();
// console.log(resultado);


//* Parentesis opcionales ante un solo parametro (sin parametros se requiere parentesis)
// const saludar = resp => nombre = resp;

// resultado = saludar("hola MAtias");

// console.log(resultado);


//* No son adecuadas para ser usadas como metodos
// const objeto = {
//     nombre : "Matias",
//     saludar : function(){console.log(`hola ${this.nombre}`)}
// }

// const objeto2 = {
//     nomnre : "Matias",
//     saludar : ()=>{console.log(`Hola ${this.nombre}`)}
// }

// window.nombre = "PEPE";

// objeto.saludar();
// objeto2.saludar();

//* y no pueden ser usadas como contructores.
// const constructorPersona = (nombre, apellido) => {
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// const persona =  new constructorPersona("Matias", "Erco");

// console.log(persona.nombre);



//* Retornan literales si su cuerpo esta entre ()

//* THIS contextual (No tienen propio this, sino que toman el de la funcion que lo envuelve)

// console.log(this);

// console.log(window == this);

// this.nombre = "Ercolani";

// function saludar(){
//     console.log(`hola ${this.nombre}`);
// }

// const objeto = {
//     nombre:"MAtias",
//     saludar: saludar
// }

// objeto.saludar();


//*con funcion flecha  toma el this.nombre de fuera del objeto
// this.nombre = "Ercolani";

// const saludar = ()=>{
//     console.log(`hola ${this.nombre}`);
// }

// const objeto = {
//     nombre:"MAtias",
//     saludar: saludar
// }

// objeto.saludar();

//! SIEMPRE USAR FUNCTION Y NO "FUNCION DE FLECHA" DENTRO DE LOS OBJETOS

//* las reglas de modo estricto aplicadas a this, son ignoradas

//* Funcion flecha invocada a traves de los metodos call, apply y bind

//* No tienen objeto Arguments

//* No tienen propiedad del prototipo prototype

//* No se piede usar Yield (por ende no se pueden usar como funciones generadoras)

//* No puede contener saltos de linea entre sus parametros y su flecha

//* Orden de parseo


