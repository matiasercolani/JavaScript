let materias = {
    fisica:["Pablo", "Matias", "Antonella", "Claudio"],
    literatura:["Marcela", "Antonella", "Kaku", "Hernan"],
   ingles:["Pachano", "Antonella", "Matias", "Hernan"]
}



let inscripcion = (alumno, materia)=>{
    personas = materias[materia];
        if(personas.length >= 10){
            document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas <br>`)
        }else{
            personas.push(alumno);
            if(materia == "fisica"){
                materias = {
                    fisica:personas,
                    literatura:["literatura"],
                ingles:["ingles"]
                }
            }else if(materia == "literatura"){
                materias = {
                    fisica:["fisica"],
                    literatura:personas,
                ingles:["ingles"]
                }
            }else if(materia == "ingles"){
            materias = {
                fisica:["fisica"],
                literatura:["ingles"],
            ingles:personas
            }
        }

        document.write(`Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`)
    
    }
}

document.write(materias['fisica'] + "<br>");
inscripcion("cofla", "fisica");
inscripcion("pepito", "fisica");
inscripcion("Mascapito", "fisica");
inscripcion("cofla", "fisica");
inscripcion("pepito", "fisica");
inscripcion("Mascapito", "fisica");
inscripcion("cofla", "fisica");



document.write(materias['fisica'] + "<br>");
// !Hecho por mi
// let inscripcion = (alumno, materia)=>{

//     if(materias[materia].length < 20){
//         materias[materia].push(alumno);
//         document.write("Incripto.");
//         document.write(materias[materia]);
//     }else{
//         document.write("No se puede inscribir");
//     }
// }



// inscripcion("cofla", "fisica");
// inscripcion("pepito", "fisica");