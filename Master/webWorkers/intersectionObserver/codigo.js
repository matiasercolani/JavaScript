//+ Intersection Observer


// ¿Que es y para que sirve?

// intersection Observer

// Callback y options

// Ejemplo de uso (Laze Load)

const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries) =>{
    for (const entry of entries){
        if(entry.isIntersecting) console.log("se esta viendo la caja:", entry.target.textContent);
    }
}

const observer = new IntersectionObserver(verifyVisibility);

for(const caja of cajas){
    observer.observe(caja);
}


// options

// const options = {
//     // rootMargin:"30px";
//     // treshold:1
// }

// const observer = new IntersectionObserver(verifyVisibility, options);

