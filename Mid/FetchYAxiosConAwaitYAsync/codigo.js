//!Fetch y Axios con Await y Async

//* Implementacion
//+ No se usa
// const getName = ()=>{
//     fetch("informacion.txt")
//     .then(res=>{
//         if(res.ok) Promise.resolve(res)
//         else Promise.reject(res)
//     })
//     .then(res=>console.log(res))
//     .catch(e=>console.log(e))
// }
// getName();
//+ fetch y await

// const getName = async()=>{
//     let peticion = await fetch("informacion.txt");
//     let resultado = await peticion.json();
//     console.log(resultado);
//     let HTMLCode = `Nombre: ${resultado.nombre}<br>
//                     Edad: ${resultado.edad}`;
//     document.querySelector(".resultado").innerHTML = HTMLCode;
// }


//+ axios y await
 const getAge = async()=>{
     let resultado = await axios("informacion.txt");
     let div = document.createElement("DIV");
     div.classList.add("edad");
     div.innerHTML = resultado.data.edad;
     document.body.appendChild(div);
 }

// document.querySelector('.boton').addEventListener("click",getName);
document.querySelector('.getAge').addEventListener("click",getAge);
//* Importancia el Try Catch 