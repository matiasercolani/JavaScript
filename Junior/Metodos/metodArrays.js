// ! ------------------------------Metodos de Arrays--------------------------------------------

let nombres = ["pedro", "maria","jorge", "alberto"];
let numeros = [1,3,2];
let resultado;

// ! ------------------------------Transformadores--------------------------------------------

document.write("Array original: <b>" + nombres + "</b><br>");

// * pop() - elimina el ultimo elemento de un array y lo devuelve

// resultado = nombres.pop();

// * shift() - elimina el primer elemento de un array y lo devuelve

// resultado = nombres.shift();

// * push() - agrega un elemento al array al final de la lista

// resultado = nombres.push("erco","robert");

// * reverse() - invierte el orden de los elementos de un array

// resultado = nombres.reverse();

// * unshift() - agrega uno o mas elementos al inicio  del array, y devuelve el arreglo ordenado

// resultado = nombres.unshift("erco","robert");

// * sort() - ordena (alfabetico o numerico) los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

// resultado = numeros.sort();

// * splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

// resultado = nombres.splice(1,3,"Teresa");




// ! ------------------------------Accesores--------------------------------------------

// * join() - une todos los elementos de una matriz (u objeto similar) en una cadena y lo devuelve.

// resultado = nombres.join(" - ");

// * slice() - devuelve una parte del array dentro de un nuevo array empezando por inicio hasya fin (fin no incluido).

// resultado = nombres.slice(1,3);

// resultado = nombres.slice(0,-1);


// * Metodos ya vistos en cadenas: toString(), indexOf(), lasIndexOf(), include() funcionan exactamente igual que en un string



// ! ------------------------------De Repeticion--------------------------------------------

// * filter() - crea un nuevo array con todos los elementos que cumplan la condicion

resultado = nombres.filter(nombre => nombre.length > 5);

// * foreach() - ejecuta la funcion indicada una vez por cada elemento del array


// document.write("Elemento removido: <b style='color:red'>" +resultado + "</b><br>");

document.write("Resultado: <b>" + resultado + "</b><br>");




