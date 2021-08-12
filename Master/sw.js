//+ Service Worker

let version = "version 3";

//* Instalando
// self.addEventListener("install", e =>{
//     console.log("instalando service worker");
// })

self.addEventListener("install", e =>{
    console.log("instalando service worker");
    caches.open(version).then(cache=>{
        cache.add("index.html").then(res=>{

            console.log("Informacion cacheada");

        }).catch(e=>{
           
            console.log(e);
        
        })
    })
})

//* Verificar que este activo
// self.addEventListener("activate", () =>{
//     console.log("el service worker esta activo");
// })

// self.addEventListener("activate", ()=>{
//     caches.keys().then(key=>{
//         return Promise.all(
//             key.map(cache=>{
//                 if(cache !== version){
//                     console.log("cache antiguo, eliminado");
//                     return caches.delete(cache);
//                 }
//             })
//         )
//     })
// })


//* error
// self.addEventListener("error");


//* Intercepta peticion
// self.addEventListener("fetch", () =>{
//     console.log("service worker interceptando peticion");
// })


//* Enviar mensajes
// self.addEventListener("message",e=>{
//     console.log("Mensaje recibido del navegador: ");
//     console.log(e.data);
//     e.source.postMessage("hola brothie")
// })



//* Ver pagina sin conexion a internet
self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
  });