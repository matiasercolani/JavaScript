//+ Web Workers

//? Tipos de Web Worker (Dedicated Worker, Shared Worker y Abstract Worker)

//? Dedicated Worker: Worker()(Constructor)

const worker = new Worker("webWorkers/webWorkers/worker.js");

// console.log(worker);


//? Parametro Options (type, credentials y name)



//? Metodo postMassage() (Enviar mensajes entre el web worker y el script principal)
// document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());

// const ejecutarBucle = ()=>{
//     worker.postMessage(true);
// }
// console.log(worker);



//? Evento onmessage (Recibir mensajes entre el web worker y el script principal)

//? Metodo terminate() (Finaliza la ejecucion del web worker)
document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());

worker.addEventListener("message", e=>{
    console.log(e.data);
})


const ejecutarBucle = ()=>{
    worker.postMessage("que onda bro, todo bien?");
    setTimeout(()=>{
        worker.terminate();

    },3000)
}
console.log(worker);

//? Politica de origen cruzado (Same-Origin)

