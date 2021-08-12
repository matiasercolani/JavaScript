"user strict";

//+ Operador Ternario (basicament usa menos recursos que un if)
// con solo una linea de codigo

(edad > 18) ? console.log("es mayor de edad")
            : console.log("es menor de edad")




// con mas de una linea de codigo
(edad > 18) 
        ? 
        (
            console.log("es mayor de edad"),
            console.log("no puede pasar")
            
        )
        
        : (console.log("es menor de edad"),
        console.log("puede pasar")
        )
