const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click", ()=>{
    let resultado, mensaje;
    try{
        let prevRes = parseInt(document.getElementById('nota').value);
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,9,prevRes);
    }catch(e){
        resultado = 'Sos graciosos?';
        mensaje = 'He descubierto que intentaste hackear el sitio';
    }
    abrirModal(resultado, mensaje);
});


const definirMensaje = (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "no podes ser tan pelotudo";
        break;
        case 2: resultado = "2";
        break;
        case 3: resultado = "3";
        break;
        case 4: resultado = "4";
        break;
        case 5: resultado = "5";
        break;
        case 6: resultado = "6";
        break;
        case 7: resultado = "7";
        break;
        case 8: resultado = "8";
        break;
        case 9: resultado = "9";
        break;
        case 10: resultado = "10";
        break;
        default: resultado =  null;
    }
    return resultado;
}


const verificarAprobacion = (nota1, nota2, prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio >= 7){
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>";
}

const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}

