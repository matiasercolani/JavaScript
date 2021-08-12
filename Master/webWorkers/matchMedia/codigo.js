//+ matchMedia()
"use strict";

//* matchMedia()

//* propiedad match

//* evento onchange

//* ¿cuando deberia usarlo?

const mq = matchMedia("(max-width:500px)");
const caja = document.querySelector(".caja");
console.log(mq);

mq.addEventListener("change",()=>{
    if(mq.matches)caja.classList.replace("caja","responsive-caja")
    else if (caja.className = "responsive-caja") caja.classList.replace("responsive-caja", "caja")
})


