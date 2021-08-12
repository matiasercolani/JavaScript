//! Callbacks

// Concepto: funcion dentro de otra funcion

//* Ejemplo
// function prueba(callback){
//     callback("pedro");
// }

// function decirNombre(nombre){
//     console.log(nombre);
// }

// prueba(decirNombre);

//* Otra forma
// function prueba(callback){
//     callback("pedro");
// }

// prueba(function decirNombre(nombre){
//     console.log(nombre);
// });


//* Funcion flecha
// function prueba(callback){
//     callback("pedro");
// }

// prueba((nombre)=>{
//     console.log(nombre);
// });

//* Funcion flecha de una sola linea
// function prueba(callback){
//     callback("pedro");
// }

// prueba(nombre=>console.log(nombre));



//* Ejemplo
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

const obtenerPersona = (id, cb)=>{
    if(personas[id]==undefined){
        cb("No se ha encontrado la persona");
    }else{
        cb(null, personas[id], id);
    }
}

const obtenerInstagram = (id,cb) =>{
    if(personas[id].instagram==undefined){
        cb("No se ha encontrado el instagram");
    }else{
        cb(null, personas[id].instagram);
    }
}


obtenerPersona(2,(err,persona, id)=>{
    if(err){
        console.log(err);
    }else{
        console.log(persona.nombre);
        obtenerInstagram(id, (err, instagram)=>{
            if(err){
                console.log(err);
            }else{
                console.log(instagram);
            }
        });
    }
});


console.log(personas);

// Problemas
