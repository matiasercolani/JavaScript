//+ Cambio de Pestaña

"use strict";

//! Simple
// addEventListener("visibilitychange", e=>{
//     console.log(document.visibilityState);
// })


//!
addEventListener("visibilitychange", e=>{
    if(document.visibilityState == "visible"){
        document.write("che rancio, porque abandonas la pagina");
    } else{
        alert("ah volviste, muy bien");
    }
})