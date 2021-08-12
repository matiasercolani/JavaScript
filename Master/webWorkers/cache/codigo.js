//? Cache


//+ Memoria volatil de cortoplazo

//+ Usos

//+ Cache.add(request)
//* Toma una URL, la recupera y agrega el objeto respuesta resultante a la cache dada. Este es funcionalmente equivalente a llamar fetch() y luego usar put() para agregar los resultados a la cache.
// caches.open("archivos-estaticos").then(cache =>{
//     cache.add("index.html");
// })

//+ Cache.addAll(request)
//* Toma una URL, las recupera y agrega los objetos de respuesta resultantes a la cache dada
// caches.open("archivos-estaticos").then(cache =>{
//     cache.addAll(["index.html","style.css","webWorkers/cache/codigo.js"]);
// })

//+ Cache.match(request, options)
//* Devuelve un Promise que se resuelve con la respuesta asociada con la primera solicitud en el objeto asociado
// caches.open("archivos-estaticos").then(cache =>{
//     cache.match("index.html").then(res => {
//         console.log(res);
//     })
// })



//+ Cache.matchAll(request, options)
//* Devuelve un Promise que se resuelve en una matriz de todas las solicitudes coincidentes en el objeto almacenado
// caches.open("archivos-estaticos").then(cache =>{
//     cache.matchAll("index.html").then(res => {
//         console.log(res);
//     })
// })

//+ Cache.put(request, response)
//* Toma tanto una solicitud como su respuesta y la agrega a la cache dada
// caches.open("archivos-estaticos").then(cache =>{
//     fetch("index.html").then(res => {
//         cache.put("index.html", res);
//     })
// })


//+ Cache.delete(request, options)
//* Encuentra la entrada del objeto cuya clave es la solicitud, devolviendo un Promise que resuelve true si el objeto se encuentra y se elimina un entrada coincidente. Si no se encuentra ninguna entrada, la promesa se resuelve en false.
// caches.open("archivos-estaticos").then(cache =>{
//     cache.delete("index.html");
// })


//+ Cache.keys(request, options)
//* Devuelve un Promise que se resuelve en una matriz de keys de los objetos alamacenados
// caches.open("archivos-estaticos").then(cache =>{
//     cache.addAll(["index.html","style.css","webWorkers/cache/codigo.js"]);
//     cache.keys().then(res=>{
//         console.log(res);
//     })
// })

