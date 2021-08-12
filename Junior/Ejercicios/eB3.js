let numero1 = prompt("Numero uno");
let operador = prompt("Operador");
let numero2 = prompt("Numero dos");

function calculadora(numero1, operador, numero2){
    if(operador == "+"){
    resultado = parseInt(numero1) + parseInt(numero2);
    }
    else if(operador == "-"){
        resultado = numero1 - numero2;
    }
    else if(operador == "*"){
        resultado = numero1 * numero2;
    }
    else if(operador == "/"){
        resultado = numero1 / numero2;
    }
    document.write(resultado);
}


calculadora(numero1, operador, numero2);