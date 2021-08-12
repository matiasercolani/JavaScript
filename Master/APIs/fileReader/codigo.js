"use strict";
//+ FileReader



//* ReadAsText()


// const archivo = document.getElementById('archivo');

// archivo.addEventListener("change", (e)=>{
    // console.log(archivo.files[0]);
//     leerArchivo(archivo.files)
// })

// const leerArchivo = ar =>{

    //? Seleccionar mas de un archivo

    // for (var i=0; i < ar.length; i++){
    //     const reader = new FileReader();
    //     reader.readAsText(ar[i]);
    //     reader.addEventListener("load", (e)=>{ 
    //     console.log(JSON.parse(e.currentTarget.result))
    //     })
    // }

    //? Seleccionar un solo archivo

    // const reader = new FileReader();
    // reader.readAsText(ar);
    // reader.addEventListener("load", (e)=>{ 
    //     console.log(JSON.parse(e.currentTarget.result))
    // })

// }

//* ReadAsDataUrl() Cargar img etc
//* Ejemplo de uso 1 (Cargar galeria dinamicamente)
// const leerArchivo = ar =>{

//     for (var i=0; i < ar.length; i++){
//         const reader = new FileReader();
//         reader.readAsDataURL(ar[i]);
//         reader.addEventListener("load", (e)=>{ 
//         let newImg = `<img src='${e.currentTarget.result}'>`;
//         document.querySelector(".resultado").innerHTML += newImg;
        
//         })
//     }
// }



//* Ejemplo de uso 2 (Combinar con Drag & Drop)
const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#444");
})

zona.addEventListener("dragleave", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
})

zona.addEventListener("drop", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
    cargarArchivo(e.dataTransfer.files[0]);
})

const changeStyle = (obj, color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}


const cargarArchivo = ar =>{
    const reader = new FileReader();
    //? Carga txt
    // reader.readAsText(ar);
    //? Carga img
    // reader.readAsDataURL(ar);
    //? Carga video
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress",e=>{
        let carga = (e.loaded / ar.size*100);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px";
        document.querySelector(".barra-de-carga").style.width = `${carga/3.6}%`;
    });

    reader.addEventListener("loadend", e=>{
        changeStyle(zona, "#2e7");
        zona.style.borderStyle = "solid";
        document.querySelector(".barra-de-carga").style.background = "#2e7";
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "¡Carga completa!";
        },500)
    })

    reader.addEventListener("load", e=>{
        //? Carga img
        // let url = URL.createObjectURL(ar);
        // let img = document.createElement("IMG");
        // img.setAttribute("src", url);
        // document.querySelector(".resultado").appendChild(img);
        //? Carga txt
        // document.querySelector(".resultado").textContent = e.currentTarget.result;
        //? Carga video
        let video = new Blob([new Uint8Array(e.currentTarget.result),{type:'video/mp4'}])
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(img);
        img.play();

    })
}
//* Ejemplo de uso 3 (Barra de progreso con progress y loadend)