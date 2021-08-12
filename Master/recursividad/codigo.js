//+ Funciones Recursivas (Recursividad) volver a usar una funcion automaticamente
"strict mode";

// const validarEdad = (msg)=>{
//     let edad;
//     try {
//         if(msg) edad = prompt(msg);
//         else edad = prompt("introduce tu edad");
//         edad = parseInt(edad);
//         if(isNaN(edad)) throw "introduce un numero para la edad";
//         if(edad > 18) console.log("sos mayor de edad");
//         else console.log("sos menor de edad");
//     }catch(e){
//         validarEdad(e);
//     }

// }

// validarEdad();


//* Clausuras (o closures)


//? sin Clausuras
// const cambiarTamaño = tamaño =>{
//     document.querySelector(".texto").style.fontSize = `${tamaño}px`;
// }

// document.querySelector(".t12").addEventListener("click",()=>cambiarTamaño(12))
// document.querySelector(".t14").addEventListener("click",()=>cambiarTamaño(14))
// document.querySelector(".t16").addEventListener("click",()=>cambiarTamaño(16))  

//? Con Clausuras
// const cambiarTamaño = tamaño =>{
//     return ()=>{
//         document.querySelector(".texto").style.fontSize = `${tamaño}px`;
//     }
// }

// px12 = cambiarTamaño(12);
// px14 = cambiarTamaño(14);
// px16 = cambiarTamaño(16);

// document.querySelector(".t12").addEventListener("click",px12)
// document.querySelector(".t14").addEventListener("click",px14)
// document.querySelector(".t16").addEventListener("click",px16)  


// * Parametros por defecto (validacion antigua vs actual). // a = 0 por ejemplo es por si las dudas que el usuario haya ingresado solo un numero

// const suma = (a = 0, b = 0)=>{
//     console.log(a+b);
// }

// suma(12,23,24);


//* Parametros Rest (...param) // siempre tiene que ser el ultimo parametro
const suma  = (frase,...num)=>{
    let resultado = 0;
    for(let i=0; i < num.length; i++){
        resultado+= num[i];
    }
    console.log(`${frase} ${resultado}`);
}

suma("matias",25,62,98)



//* Destructuracion

//* Destructuracion Arrays y Objetos

//* Funcion destructuradora