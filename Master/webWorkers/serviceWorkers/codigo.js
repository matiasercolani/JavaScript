//+ Service Workers
//* Intercepta el envio y respuestas.Ejemplo Navegador >> Service Workers << Servidor

// Interfaz
if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
}


// *
// navigator.serviceWorker.ready.then(res=>console.log(res.active.postMessage("Hola bro como andas?")))

// navigator.serviceWorker.addEventListener("message", e=>{
//     console.log("Mensaje recibido del Service Worker:");
//     console.log(e.data);
// })


//* Registrar en cache y mostrar sitio web offline