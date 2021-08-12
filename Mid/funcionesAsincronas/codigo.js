//! Funciones Asincronas (Operador Async);
// Trabajan en tiempo real



//* Usos


//* Operador Await

const obtenerInfo = (text) =>{
    return new Promise((resolve, reyect)=>{
        setTimeout(()=>{resolve(text)}, Math.random()*200)
    })
}

const mostrarData = async()=>{
    data1 = await obtenerInfo("1: pito");
    data2 = await obtenerInfo("1: bernardo");
    data3 = await obtenerInfo("1: eduardo");

    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();



