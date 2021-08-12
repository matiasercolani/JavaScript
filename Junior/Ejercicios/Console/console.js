let materias = {
    fisica: [90,6,3,"fisica"],
    matematica: [80,6,3,"matematica"],
    programacion: [90,6,3,"programacion"]
}


const aprobacion = ()=>{

    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedios = materias[materia][1];
        let tps = materias[materia][2];

        console.log(materias[materia][3]);
        
        if(asistencias >= 90){
            console.log("%c Asistencia en Orden", "color:green");
        }else{
            console.log("%c Falta de asistencia", "color:red");
        }

        if(promedios < 7){
            console.log("%c Desaprobado", "color:red");
        }else{
            console.log("%c Aprobado", "color:green");
        }

        if(tps < 3){
            console.log("%c Tps no entregas", "color:red");
        }else{
            console.log("%c Tps entregados", "color:green");
        }
    }
}

aprobacion();