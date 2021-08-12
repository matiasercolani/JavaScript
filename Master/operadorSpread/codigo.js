"use strict";
//+ Operador Spread (spread operator)

// let valor1 = "valor 1";
// let valor2 = "valor 2";
// let valor3 = "valor 3";

// let arr = ["valor 1", "valor 2", "valor 3"];


// console.log(valor1, valor2, valor3);

// console.log(...arr);

//* añadir arrays a otros arrays

// let arr1 = ["manzana", "pera","banana"];
// let arr2 = ["kiwi", "naranja"];

// arr1.push(...arr2);

// console.log(arr1);




//* Concatenar arrays

// let arr3 = [...arr1,...arr2];

// console.log(arr3);



//* Como argumento rest

const sumar = (num1,num2,num3) =>{
    console.log(num1 + num2 +num3);
}

let arr = [3,6,9];

sumar(...arr);