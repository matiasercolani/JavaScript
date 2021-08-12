
//? Ejemplo simple
// console.log("Hola Mundo");


//? Ejemplo Bucle infinito e input

// const ejecutarBucle =()=>{
//     let i = 0;
//     while(true){
//         console.log(i++);
//         setTimeout(()=>{
//             console.log("Holis");
//         },10000)

//         if(i == 3000){
//             break;
//         }
//     }
// }

// addEventListener("message", ejecutarBucle);


//? Ejemplo 2

// addEventListener("message",e=>{
//     console.log(e.data);
// })


//? Metodo terminate() (Finaliza la ejecucion del web worker)
addEventListener("message", e=>{
    if(e.data.length > 4){
        console.log(e.data);
        postMessage("todo bien, vos?")
    }
})