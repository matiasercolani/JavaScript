// Console.

//! Funciones de registro

//* assert() - Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparecera nada.(NO ESTANDAR)

console.assert(6<5);

//* clear() - Limpia consonla

console.clear();

//* error() - Muestra un mensaje de error en consola.

console.error("Che capo, que hiciste?");

//* info() - Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muesetra un pequeño icono "i"  junto a estos elementos en el registro de la Consola Web.

console.info("Todo bie?");

//* log() - Muestra un mensaje en la consola web (o interprete JavaScript).

console.log("Aca andamos!");

//* table() - Esta funcion toma los argumentos obligatorio: data, qude debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en consola. 

console.table([5,2,4,6,8]);

//* warn() - Imprime un mensaje de advertencia en la Consola Web.

console.warn("Che capo venis bien, pero cuidado porque...");

//* dir() - Despliega una lista interactiva de las propiedades del objeto JavaScript especificado [NO ESTANDAR].

console.dir([5,2,4,6,8]);


//! Funciones de conteo

//* count() - Registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional un etiqueta.

console.count();
console.count();
console.count();
console.count();

//* countReset() - Resetea el contador console.count().

console.countReset();

console.count();
console.count();


//! Funciones de agrupacion

//* group() - Crea un nuevo grupo en linea en el registro de la consola web.

console.group();
console.group("frutas");
console.log("Dentro del subgrupo 'frutas'");

//* groupEnd() - Remueve un grupo en linea en el registro de la consola web.

console.groupEnd();
console.groupEnd();

//* groupCollapsed() - Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.

console.groupCollapsed("Futbol");
console.groupEnd();


//! Funciones de agrupacion

//* time() - inicia un temporizador

console.time();

//* timeLog() - Detiene un temporizador.

console.timeLog();
console.timeLog();
console.timeLog();
console.timeLog();
console.timeLog();
console.timeLog();


//* timeEnd() -Registra el valor, actual de un temporizador

console.timeEnd();
console.timeLog();

//* Modificando estilos de consola.
console.log("%cRancio","color:white; background:black; padding:20px 100px; border:3px solid blue;");
