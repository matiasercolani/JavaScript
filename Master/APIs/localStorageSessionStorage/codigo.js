//+ LocalStorage (la informacion persiste aunque cierres la pestaña o el explorador) y SessionStorage (la informacion de se borra al cerrar la pestaña o explorador)

//* Diferencias
// Dos tipos de almacenamiento local
// console.log(localStorage);


//* setItem()

//? localStorage
// localStorage.setItem("nombre", "pedro");

// console.log(localStorage);

//? sessionStorage
// sessionStorage.setItem("nombre" , "pepito");






//* getItem()

//? localStorage
// let nombre = localStorage.getItem("nombre")

// console.log(nombre);

//? sessionStorage
// let nombre = sessionStorage.getItem("nombre");

// console.log(nombre);






//* removeItem()

//? localStorage
// setTimeout(()=>{
//         let nombre = localStorage.removeItem("nombre")
//     },2000);


//? sessionStorage
// setTimeout(()=>{
//         let nombre = sessionStorage.removeItem("nombre")
//     },2000);







//* clear() Limpia todo el localStorage o sessionStorage

// setTimeout(()=>{
//     let nombre = localStorage.clear();
// },2000);



//* Ejemplo de uso
// const modal = document.querySelector(".modal-overlay");

// const definirIdioma = ()=>{
//     document.querySelector(".en").addEventListener("click", ()=>{
//         localStorage.setItem("idioma", "en");
//         cerrarModal();
//     })
//     document.querySelector(".es").addEventListener("click", ()=>{
//         localStorage.setItem("idioma", "es");
//         cerrarModal();
//     })
// }

// const cerrarModal = ()=>{
//     modal.style.animation = "desaparecer 1s forwards";
//     setTimeout(()=>modal.style.display = "none", 1000);
// }

// const idioma = localStorage.getItem("idioma");

// if(idioma === null) definirIdioma();
// else {
//     console.log(`Idioma: ${idioma}`);
//     modal.style.display="none";
// }


