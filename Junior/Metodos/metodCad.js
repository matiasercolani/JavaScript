
// ! ------------------------------Metodos de cadenas--------------------------------------------

let cadena = " Cadena de prueba";
let cadena2 = "Hola,como,estas";
let numero = 10;
let resultado;

// * concat() junta dos o mas cadenas

// let resultado = cadena.concat(cadena2);

// * startsWith() si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.

// resultado = cadena.startsWith("cadena");

// * endsWith() si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

// resultado = cadena.endsWith("prueba");

// * includes() si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

// resultado = cadena.includes("prueba");

// * indexOf() devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1

// resultado = cadena.indexOf("prueba");

// * lastIndexOf() devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1

// resultado = cadena.lastIndexOf("de");



// ! ------------------------------No standard (aun)--------------------------------------------



// * padStart() [propuesta de Estandar] - Rellenar cadena al principio con los caracteres deseados

// resultado = cadena.padStart(10,"1");

// * padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados

// resultado = cadena.padEnd(10,"2");

// * repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos

// resultado = cadena.repeat(10);



// ! ------------------------------Manipulacion de cadenas--------------------------------------------


// * split() - Divide la cadena como le pidamos

// resultado = cadena2.split(",");
// document.write(resultado[2]);

// * substring() - Nos retorna un pedazo de la cena que seleccionamos

// resultado = cadena2.substring(0,2);

// * toLowerCase() - Convierte una cadena a minuscula 

// resultado = cadena.toLowerCase();

// * toUpperCase() - Convierte una cadena a mayuscula

// resultado = cadena.toUpperCase();

// * toString() - metodo devuelve una cadena que representa al objeto especificado

// resultado = numero.toString();

// * trim() - elimina los espacios en blanco al principio y al final de una cadena

// resultado = cadena.trim();

// * trimEnd() - elimina los espacios en blanco al final de una cadena

// resultado = cadena.trimEnd();

// * trimStart() - elimina los espacios en blanco al comienzo de una cadena

// resultado = cadena.trimStart();

// * valueOf() - retorna el valor primitivo de un objeto string

resultado = cadena.valueOf();

document.write(cadena);

