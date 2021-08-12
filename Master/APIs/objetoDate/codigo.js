//+ Objeto Date

"use strict";

//* getDate()
// const fecha = new Date();

// console.log(fecha.getDate());


//* getDays()
// console.log(fecha.getDay());

// Domingo -> 0
// Lunes -> 1
// Martes -> 2
// Miercoles -> 3
// Jueves -> 4
// Viernes -> 5
// Sabado -> 6


//* getMonth()
// console.log(fecha.getMonth());

// Arranca desde 0 como getDays()


//* getYear()
// console.log(fecha.getYear()+1900);


//* getHours()
// console.log(fecha.getHours());

//* getMinutes()
// console.log(fecha.getMinutes());

//* getSeconds()
// console.log(fecha.getSeconds());



//* Ejemplo de uso (Alarma)

const addZeros = n =>{
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora()

setInterval(actualizarHora,1000);




