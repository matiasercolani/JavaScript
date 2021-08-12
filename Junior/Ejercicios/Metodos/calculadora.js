let numero1 = prompt("Numero uno");
let operador = prompt("Operador");

function pedirNum2(){
    let numero2 = prompt("Numero dos");
    return numero2;
}

function calculadora(numero1, operador){

    let numero2;

    if(operador == "+"){
        numero2 = pedirNum2();
        resultado = parseInt(numero1) + parseInt(numero2);
    }
    else if(operador == "-"){
        numero2 = pedirNum2();
        resultado = numero1 - numero2;
    }
    else if(operador == "*"){
        numero2 = pedirNum2();
        resultado = numero1 * numero2;
    }
    else if(operador == "/"){
        numero2 = pedirNum2();
        resultado = numero1 / numero2;
    }
    else if(operador == "**"){
        numero2 = pedirNum2();
        resultado = numero1 ** numero2;
    }
    else if(operador == "^2"){
        resultado = Math.sqrt(numero1);
    }
    else if(operador == "^3"){
        resultado = Math.cbrt(numero1);
    }
    document.write(resultado);
}


calculadora(numero1, operador);