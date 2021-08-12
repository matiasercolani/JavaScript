// Array asosiativo

let obtenerInformacion = (materia)=>{
    let materias = {
                 fisica:["Pablo", "Matias", "Antonella", "Claudio"],
                 literatura:["Marcela", "Antonella", "Kaku", "Hernan"],
                ingles:["Pachano", "Antonella", "Matias", "Hernan"]
             }

    if (materias[materia] !== undefined){
        return [materias[materia], materia,materias];
    }else{
        return materias;
    }
}


let mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
            Lod alumnos son: <b style="color:blue">${alumnos}</b><br><br>
        `);
    }
}




let cantidadDeClases = (alumno) =>{

    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let nombMat = [];
    let i = 0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            nombMat[i++] = info;
            
            cantidadTotal++;
        }
    }
    return `${alumno} esta en: ${cantidadTotal} clases (${nombMat})`;
}

mostrarInformacion("fisica");
document.write(cantidadDeClases("Matias"));





// !Echo por mi

// function profAlum(materia){

//     let materias = {
//         fisica:["Pablo", "Matias", "Antonella", "Claudio"],
//         literatura:["Marcela", "Antonella", "Kaku", "Hernan"],
//         ingles:["Pachano", "Antonella", "Matias", "Hernan"]
//     }

//     let resultado;

//     if(materia == "fisica"){
//        resultado = `
//        Profesor:<br> ${materias.fisica[0]}</br> <br>
//        Alumnos: `;
       
//        for(let i=1; i < materias.fisica.length; i++){
//         resultado = resultado + materias.fisica[i] + ', '; 
//         }

//     }else if(materia == "literatura"){
//         resultado = `
//         Profesor:<b> ${materias.literatura[0]}</b> <br>
//         Alumnos: `;
            
//         for(let i=1; i < materias.literatura.length; i++){
//          resultado = resultado + materias.literatura[i] + ', '; 
//         }
     
//     }else if(materia == "ingles"){
//         resultado = `
//         Profesor:<b> ${materias.ingles[0]}</b> <br>
//         Alumnos: `;
        
//         for(let i=1; i < materias.ingles.length; i++){
//          resultado = resultado + materias.ingles[i] + ', '; 
//         }
//      }else if(resultado == undefined){
//          resultado = "Materia no existente";
//      }

//      return resultado;
// }

// let materia = prompt("Materia: ");
// profAlum(materia);

// document.write(profAlum(materia));