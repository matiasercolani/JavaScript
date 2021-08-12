//+ Drag & Drop


//* Eventos del objeto
// const circulo = document.querySelector(".circulo");
// const cuadrado = document.querySelector(".cuadrado");

    //? dragstart
    // circulo.addEventListener("dragstart",(e)=>{
    //     //? setData()
    //     e.dataTransfer.setData("clase", e.target.className)
    // });

    //? drag
    // circulo.addEventListener("drag",()=>{console.log(2)});

    //? dragend
    // circulo.addEventListener("dragend",()=>{alert("Soltado")});



//* Eventos de zona

    //? dragenter
    // cuadrado.addEventListener("dragenter",()=>{console.log(1)});

    //? dragover
    // cuadrado.addEventListener("dragover",(e)=>{
    //     // Permite que se active el "drop al dejar el objeto dentro del cuadrado"
    //     e.preventDefault();
    //     console.log(2);
    // });

    //? drop
    // cuadrado.addEventListener("drop",(e)=>{
    //     //? getData()
    //     console.log(e.dataTransfer.getData("clase"))
    // });

    //? dragleave
    // cuadrado.addEventListener("dragleave",()=>{console.log(4)});


//* Propiedad data transfer

    //? getData()
    //? setData()




//* Eventos de uso (Texturizador)



const zona = document.querySelector(".zona");
zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("APIs/DragAndDrop/textura${n}.png")`;
})

for(let i=1; i < document.querySelector(".texturas").children.length + 1; i++){
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>cambiarTextura(i,e))
}

const cambiarTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n);
}