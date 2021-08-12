const contenedor = document.querySelector(".flex-container");
let contador = 0;

function crearLlave(nombre,modelo,precio){
    contador++;
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre,modelo,precio];
}


// const llave = crearLlave("Llave1","modelo X", "33");
// contenedor.innerHTML += llave[0] + llave[1] +llave[2];
// contenedor.innerHTML += llave[0] + llave[1] +llave[2];
// document.write(llave[0],llave[1],llave[2]);

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for(let i = 1; i<=20;i++){
    let modeloRandom =Math.round(Math.random()*10000);
    let precioRandom =Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.classList.add("flex-item", `item-${i}`);
    div.tabIndex=i;
    div.innerHTML =  llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);