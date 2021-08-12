"use strict";

// console.log(history);

//* back() (vuelve atras)
// history.back();

//* forward() (va hacia delante)
// history.forward();

//* tamaño del historial
// console.log(history.length);

//* go() (va al sitio indicado con el numero relativo -1 o 1)
// history.go()

//* pushState() (Modifica la URL y conserva la info)
console.log(location.href);
history.pushState({nombre:"pedro"}, "", "?jaja" )
history.pushState({nombre:"pedro"}, "", "?jaja1" )
history.pushState({nombre:"pedro"}, "", "?jaja2" )
console.log(location.href);

//* propiedad state y evento popstate
history.state;

addEventListener("popstate",(e)=>{
    console.log(e.state);
})


//* replaceState (modifica la URL y no la conserva en el historial)
history.replaceState({nombre:"pedro"},"","?jaja87")

