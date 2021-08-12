let alumnos = [
    {
        nombre: "Matias",
        faltas:0,
        regularizacion:"regular"
    },
    {
        nombre: "Nicolas",
        faltas:0,
        regularizacion:"regular"
    },
    {
        nombre: "Carla",
        faltas:0,
        regularizacion:"regular"
    }
]

const presencia = (alumnos) =>{

    for(let i = 0; i < 2 ; i++){
        for(let alumno of alumnos ){
            
            let presente = prompt("Presente?");
            if(presente == "si"){
            alumno.faltas++;
            }
            // document.write("Nombre: " + alumno.nombre + "    -   Faltas: " + alumno.faltas + "<br>");
            if(alumno.faltas > 1){
                alumno.regularizacion = "irregular";
            }
        }
    }
    for(alumno of alumnos ){
    document.write("Nombre: " + alumno.nombre + "    -   Faltas: " + alumno.faltas +  "    -   Regularizacion: " + alumno.regularizacion +"<br>");
    }
}


presencia(alumnos);