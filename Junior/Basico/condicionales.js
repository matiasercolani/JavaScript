// if

uno = 1;

if(uno == 1){
    document.write("Es 1");
}
// else if infinitos
else if(uno == 2){
    document.write("Es 2");
}
else{
    document.write("Es Cualquier");
}



// While

let numero = 1;
while(numero < 10){
    numero++;
    document.write(numero);
}


// break. Sale de la iteracion

numero = 0;
while(numero < 1000){
    numero++;
    document.write('<br>');
    document.write(numero);
    if(numero == 20){
        
        break;
    }
}

// Do while. Ejecuta el al menos una vez la tarea
numero = 0;

do{
    numero++;
    document.write('<br>');
    document.write(numero);
}
while(numero < 0);


// For y continue. i se puede declarar afuera. Continue salta iteraciones

for(let i = 0; i < 6; i++){
    if(i == 4){
        continue;
    }

    document.write(i + "<br>");

}
document.write("<br> <br><br>")

// for in. Devuelve indice.
let animales = ["gato", "perro", "tiranosaurio"];
animales.edad = 20;

for (animal in animales){
    document.write(animal + "<br>");
}


// for of. Devuelve contenido.
for (animal of animales){
    document.write(animal + "<br>");
}

document.write(animales.edad);


let array1 = ["Carlos", "roberta", "fernando"];
let array2 = ["pedro", "marcelo", array1,"josefina"];

for(let array in array2){

    if(array == 2){
        for(let array of array1){
            document.write(array + "<br>");
        }
    }else{
        document.write(array2[array]+"<br>");
    }
}


// label. Sirve para terminar un bucle padre desde un bucle hijo. Con el break sale y con el continue 


forlabelPeron:
for(let array in array2){

    if(array == 2){
        for(let array of array1){
            document.write(array + "<br>");
            break forlabelPeron;
        }
    }else{
        document.write(array2[array]+"<br>");
    }
}