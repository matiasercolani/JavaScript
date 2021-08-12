// Signo +
saludo = "Hola\n\ matias!";
respuesta = "Todo bien? - ";

frase = saludo + respuesta;
document.write(frase);

//Concat
fraseConcat = saludo.concat(respuesta);
document.write(fraseConcat);


// Forzar string(sino suma aunque tenga comillas)
numero = "53";
numero2 = "8";
resultado = "" +  numero + numero2;

//Con backtiks y la variable entre ${}
nombre = 'Matias';
frase3 = `Hola ${nombre}.
Sos un kpo`;
document.write(frase3);

