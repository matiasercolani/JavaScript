//+ IndexedDB

//* Caracteristicas
//* Almacena Informacion en el navegador de forma similar a localStorage
//* Es orientada a objetos
//* Es asincrona
//* Trabaja con eventos del DOM





//! Procedimiento de creacion

// *Objeto IndexedDB
//* Metodo open()
//* onupgradeneeded, onsucess, onerror



//! Crear Almacen de objetos

//* Almacen de objetos - conceptos
//* Metodo createObjectStore
//* autoIncrement vs KeyPath


const IDBRequest = indexedDB.open("ercobase", 1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    console.log("se creo correctamente");
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement:true
    })
})


// IDBRequest.addEventListener("success",()=>{
//     console.log("todo salio correctamente");
// })

IDBRequest.addEventListener("error", ()=>{
    console.log("ocurrio un error al abrir la base de datos");
})

// document.getElementById("add").addEventListener("click",()=>{
//     let nombre = document.getElementById("nombre").value;
//     if(nombre.length > 0){
//         addObjetos({nombre});
//         leerObjetos();
//     }
// })




//! Almacenar objetos

//* Metodo transaction()
//* IDBTransaction.objectStore
//* IDBObjectStore

// const addObjetos = objeto =>{
//     const IDBData = getIDBData("readwrite","objeto agregado correctamente"); 
//     IDBData[0].add(objeto);
// }


// const leerObjetos = ()=>{
//     const IDBData = getIDBData("readonly"); 
//     const cursor = IDBData.openCursor();
//     cursor.addEventListener("success",()=>{
//         if(cursor.result){
//             console.log(cursor.result.value);
//             cursor.result.continue();
//         }else console.log("todos los datos fueron leidos")
//     })
// }





//! Modificar objetos

//* IDBObjectStore.put()
const modificarObjeto = (key, objeto) =>{
    const IDBData = getIDBData("readwrite","objeto modificado correctamente"); 
    IDBData.put(objeto, key);
}



//! Eliminar objetos

//* IDBObjectStore.delete()

const eliminarObjeto = (key) =>{
    const IDBData = getIDBData("readwrite","objeto eliminado correctamente"); 
    IDBData.delete(key);
}


//manera mas corta 


const getIDBData = (mode, msg)=>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres",mode) //readwrite o readonly
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete",()=>{
        console.log(msg);
    })
    return objectStore;
}









// IndexedDB + Drag & Drop
document.getElementById("add").addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    if(nombre.length > 0){
        if(document.querySelector(".posible") != undefined){
            if(confirm("Hay elementos sin guardar: ¿Quieres continuar?")){
                addObjetos({nombre});
                leerObjetos();
            }
        
        }else{
            addObjetos({nombre});
            leerObjetos();
        }
    }
})


IDBRequest.addEventListener("success",()=>{
    leerObjetos();
})


const addObjetos = objeto =>{
    const IDBData = getIDBData("readwrite","objeto agregado correctamente"); 
    IDBData.add(objeto);
}


const leerObjetos = ()=>{
    const IDBData = getIDBData("readonly"); 
    const cursor = IDBData.openCursor();

    const fragment = document.createDocumentFragment();

    document.querySelector(".nombres").innerHTML="";

    cursor.addEventListener("success",()=>{

        if(cursor.result){
            let elemento = nombresHTML(cursor.result.key, cursor.result.value)
            fragment.appendChild(elemento);
            cursor.result.continue();
        }else document.querySelector(".nombres").appendChild(fragment);
    })
    
}



const nombresHTML = (id, name) =>{
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";
    
    
    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable", "true");
    h2.setAttribute("spellcheck", "false");



    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible");
    })

    saveButton.addEventListener("click",()=>{
        if(saveButton.className == "posible"){
            modificarObjeto(id,{nombre:h2.textContent});
            saveButton.classList.replace("posible","imposible");
        }
    })


    deleteButton.addEventListener("click",()=>{
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;

}