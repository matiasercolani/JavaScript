let alumnos = [{
    nombre:"Matias Ercolani",
    email:"matias@gmal.com",
    materia:"Fisica 3"
},{
    nombre:"Cacho Castana",
    email:"cachito@gmal.com",
    materia:"Fisica 3"
},{
    nombre:"Hernan Tacano",
    email:"herni@gmal.com",
    materia:"MAtematica 3"
},{
    nombre:"Robocop",
    email:"robo@gmal.com",
    materia:"Prog 3"
},{
    nombre:"Wanda Nara",
    email:"wanda@gmal.com",
    materia:"Ingles 1"
},{
    nombre:"Roberto Petersen",
    email:"rober@gmal.com",
    materia:"Fisica 3"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");
let htmlCode = "";
for(alumno in alumnos){
    let datos = alumnos[alumno];
    console.log(datos);
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
    <div class="grid-item nombre" id="">${nombre}</div>
    <div class="grid-item email" id="">${email}</div>
    <div class="grid-item materia" id="">${materia}</div>
    <div class="grid-item semana" id="">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>

    </div>
    `;
}
contenedor.innerHTML = htmlCode;
;

boton.addEventListener("click",()=>{
    let confirmar = confirm("Realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});