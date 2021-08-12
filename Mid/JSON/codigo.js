//! Datos Estructurados (JSON)

//* Definicion, Usos y Sintaxis

// const objeto = {
//     "variable1" : "PEDRO",
//     "variable2" : "JORGE"
// };

// console.log(objeto.variable1);

//* Serializacion y Deserializacion

//* Metodo parse() - Convierte un string con estructura JSON a Formato JSON (Deserializar)
const serializado = '{"variable1" : "PEDRO", "variable2" : "JORGE"}';

const deserializado = JSON.stringify(serializado);
console.log(typeof deserializado);


//* Metodo stringify() - Convierte un datos de JavaScript en una cadena de texto JSON (Serializar)
// const deserializado  = {"variable1" : "PEDRO", "variable2" : "JORGE"};

// const serializado = JSON.stringify(deserializado);
// console.log(typeof serializado);

//* JSON PolyFill - Simulador de JSON para explorador antiguos (raro) https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse