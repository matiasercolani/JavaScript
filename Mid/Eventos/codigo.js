//! Eventos


// Eventos
//* Definicion: Cualquier cosa que suceda en la pagina



//* De eventos o "Event Handlers"
//? No es recomendable esta practica
const boton = document.querySelector(".boton");
// boton.onclick = ()=>{
//     alert("hola");
// }

//* Escucha de eventos o "Event Listener"
// const boton = document.querySelector(".boton");
// boton.addEventListener('click', saludar);

//? Solo se puede con funciones normales
// function saludar(){
//     alert("hola");
    //? Para que el evento no se pueda hacer nuevamente
//     boton.removeEventListener("click", saludar);
// }


//? Con funcion flecha es dentro de los parametros de la funcion addEventListener
// boton.addEventListener('click', ()=>{
//     alert("pedro")
// });





//* El objeto Event
//  boton.addEventListener("click", (e)=>{
//      console.log(e.target);
//  });



//* Flujo de Eventos o 'event flow'

//? Event Bubbling
// const boton = document.querySelector(".boton");
// const contenedor = document.querySelector(".contenedor");
// const contenedor_2 = document.querySelector(".contenedor2");

// contenedor.addEventListener("click",(e)=>{
//     alert("Click Contenedor Rojo");
// });

// boton.addEventListener("click",(e)=>{
//     alert("Click boton");
// });

// contenedor_2.addEventListener("click",(e)=>{
//     alert("Click Contenedor azul");
// });

//? Event Capturing - Manejo del orden de los eventos


// contenedor.addEventListener("click",(e)=>{
//     alert("Click Contenedor Rojo");
// }, true);

// boton.addEventListener("click",(e)=>{
//     alert("Click boton");
// });

// contenedor_2.addEventListener("click",(e)=>{
//     alert("Click Contenedor azul");
// }, true);

//* event.stopPropagation()
// contenedor.addEventListener("click",(e)=>{
//     alert("Click Contenedor Rojo");
//     e.stopPropagation();
// },true);

// boton.addEventListener("click",(e)=>{
//     alert("Click boton");
// });

// contenedor_2.addEventListener("click",(e)=>{
//     alert("Click Contenedor azul");
// }, true);




//! Eventos del Mouse
// const boton = document.querySelector(".boton");
// const contenedor = document.querySelector(".contenedor");
//* click - ocurre con un click
//* dblclick - ocurre con un doble click
// boton.addEventListener("dblclick",(e)=>{
//     alert('doble click');
// });

//* mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
// contenedor.addEventListener("mouseover",(e)=>{
//      alert('Contenedor rojo');
//  });

//* mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.
// contenedor.addEventListener("mouseout",(e)=>{
//      alert('Contenedor rojo');
//  });

//? ----- otros -----

//* contextmenu - ocurre con un click en el boton derecho en un elemento para abrir un menu contextual.
// contenedor.addEventListener("contextmenu",(e)=>{
//      alert('Click derecho');
//   });

//* mouseenter - ocurre cuando el punterto se mueve sobre un elemento.
// contenedor.addEventListener("mouseenter",(e)=>{
//     alert('Elemento');
//   });

//* mouseleave - ocurre cuando el puntero se mueve fuera de un elemento.
// contenedor.addEventListener("mouseleave",(e)=>{
//          alert('Elemento');
//        });

//* mousemove - ocurre cuando el puntero se mueve mientras esta sobre un elemento.
// contenedor.addEventListener("mousemove",(e)=>{
//     alert('Elemento');
//   }); 

//* mousedown - ocurre cuando un usuario apreta un boton del mouse sobre un elemento.
// contenedor.addEventListener("mousedown",(e)=>{
//     alert('Elemento');
//   }); 

//* mouseup - ocurre cuando un usuario suelta un boton del mouse sobre un elemento.
// contenedor.addEventListener("mouseup",(e)=>{
//     alert('Elemento');
//   }); 

//! Eventos del Mouse
// const boton = document.querySelector(".boton");
// const contenedor = document.querySelector(".contenedor");
// const input = document.querySelector(".input-prueba");

//* keydown - ocurre cuando una tecla se deja de presionar.
//  input.addEventListener("keydown", (e)=>{
//      console.log("una tecla fue presionada");
//  });

//* keypress - ocurre cuando una tecla se presiona.
// input.addEventListener("keypress", (e)=>{
//     console.log("una tecla fue presionada y se solto");
// });

//* keyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.
// input.addEventListener("keyup", (e)=>{
//     console.log("una tecla fue soltada");
// });

//? Otro Ejemplo de keyup

// const input = document.querySelector(".input-prueba");
// const contenedor = document.querySelector(".seleccionado");

// input.addEventListener("keyup",(e)=>{
// let tecla = e.key;
// nuevoContenido = `La ultima tecla presionada fue: <b>${tecla}</b>`;
// contenedor.innerHTML = nuevoContenido;
// });

//! Eventos de la interfaz

//* error - ocurre cuando sucede un error durante la carga de un archivo multimedia.
// const img = document.querySelector(".img-prueba");
// img.addEventListener("error",()=>{
//     console.log("ha sucedidos un error");
// });

//* load - ocurre cuando un objeto se ha cargado
// window.addEventListener("load", ()=>{
//     console.log("ha cargado el body");
// });

//* beforeunload - ocurre antes de que el documento este a punto de descargarse.
// addEventListener("beforeunload", ()=>{
//     console.log("te estas por ir del sitio");
// });

//* unload - ocurre una vez que se ha descargado una pagina
// addEventListener("unload", ()=>{
//     console.log("te estas por ir del sitio");
// });

//* resize - ocurre cuando se cambia el tamaño de la vista del documento.
// addEventListener("resize", ()=>{
//     console.log("Se ha actualizado la resolucion");
// });

//* scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento.
// addEventListener("scroll", ()=>{
//     console.log("Se ha scrolleado");
// });

//* select - ocurre despues de que el usuario selecciona algun texto de <input> o <textarea>.
// const input = document.querySelector(".input-prueba");
// const contenedor = document.querySelector(".seleccionado");

// input.addEventListener("select", (e)=>{
//     let start = e.target.selectionStart;
//     let end = e.target.selectionEnd;
//     let textoCompleto = input.value;
//     contenedor.innerHTML = textoCompleto.substring(start, end);
// });


//! Timers (Temporizadores)

//* setTimeout()
// setTimeout(()=>{
//     document.write("hola");
// },2000);

//? Otro Ejemplo

// const saludar = ()=>{
//     document.write("Hola");
// };

// setTimeout(saludar,2000);

//* setInterval()
// setInterval(()=>{
//         document.write("hola");
//     },2000);


//* clearTimeout()
// const teporizador = setTimeout(()=>{
//     document.write('Hola');
// },2000);

// clearTimeout(teporizador);


//* clearInterval()
// const intervalo = setInterval(()=>{
//     document.write("hola");
// },2000);

// setTimeout(()=>{
//          clearInterval(intervalo);
//      },7000);





//? Mas en: https://www.w3schools.com/jsref/obj_events.asp