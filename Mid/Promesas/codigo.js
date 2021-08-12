//! Promesas

//* Concepto

//* Que puede representar?
// Terminacion de una operacion asincrona
// Fracaso de una operacion asincrona

// let nombre = "pedro";
// const promesa = new Promise((resolve, reject)=>{
//     if(nombre !== "pedro") reject("Lo siento, el nombre no es pedro")
//     else resolve(nombre)
// });

// promesa.then((resultado)=>{
//     console.log(resultado);
// }).catch((e)=>{
//     console.log(e);
// })




// Ejemplos y solucion al problema de los Callabacks

class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data =[
    ["Matias Ercolani", "@erco"],
    ["Robertico", "@Robertico"],
    ["Rancio", "@Ranci"],
    ["Camila Nesa", "@Milanesita"]
];

const personas = [];

for(let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id] == undefined) reject("No se ha encontrado la persona")
        else{resolve(personas[id])}
    });
}

const obtenerInstagram = (id) =>{
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram==undefined) reject("No se ha encontrado el instagram")
        else{resolve(personas[id].instagram)}
    })
}

let id = 2;
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
        console.log(instagram);
}).catch((e)=>{
    console.log(e);
});


console.log(personas);
