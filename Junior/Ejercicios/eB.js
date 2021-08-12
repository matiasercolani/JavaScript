let free = false;

const mayores = (free) => {
    let edad = prompt("Cual es tu edad?");
    let hora = prompt("Hora de ingreso");
    if(edad >= 18){
        document.write("Autorizado ");
        if(hora >= 2 && free == false){
            document.write("Free");
            free = true;
        } else{
            document.write("Paga");
        }
    }else{
        document.write("sin Autorizacion");
    }
}

mayores(free);

