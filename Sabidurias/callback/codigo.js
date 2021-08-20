//+ Callback - Es una funcion que se pasa a otra funcion como argumento que luego se invoca dentro de la funcion externa para completar algun tipo de rutina o accion



//* Proceso normal. Primero se ejecutaria "SEGUNDO" y luego primero por el retraso generado por setTimeout() que esta simulando la respuesta de una API.

// function primero(){
//     setTimeout(()=>{
//         console.log("PRIMERO");
//     },30)
// }

// function segundo(){
//     console.log("SEGUNDO");
// }

// primero();
// segundo();






//* Para solucionar el problema anterio y que se ejecuten en el orden requerido "PRIMERO" y luego "SEGUNDO" se hace un Callback.

function primero(segundo){
    setTimeout(()=>{
        console.log("PRIMERO");
        segundo();
    },30)
}

function segundo(){
    console.log("SEGUNDO");
}

primero(segundo);