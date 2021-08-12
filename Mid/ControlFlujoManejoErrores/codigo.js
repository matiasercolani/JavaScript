//! Control de flujo y manejo de errores
    //* Sentencias de bloque
    //* Sentencias de control de flujo
    //* Sentencias de manejo de excepciones

//! Sentencias Switch
    //* sintaxis y clausula case
    //* break
    //* default

/*let pito = "x";

switch(pito){
    case "Banana":
        console.log("esta fruta es amarilla");
        alert("Banana");
        break;
    case "Pera":
        console.log("tiene forma de mi tio roberto");
        alert("Pera");
        break;
    case "Manzana":
        console.log("los primeros humanos pecaaron comiendola");
        alert("Manzana");
        break;
    default:
        alert("no es ninguna");
}*/

//!Excepciones y tipos de Excepciones
    //* Definicion y usos
    //* Excepciones ECMAScript
    //* DOMException y DOMError

//!Try... Catch
    //* Sirve para controlar error, siempre y cuando no sean de sintaxis
    //* Sintaxis 
    //* Objeto error

    //* Catch Incondicional
/*    try{
        sdasd
    }

    catch(error){
        console.log("Lo siento, ocurrio un error de referencia");
    }
*/

    //* Catch Condicional
/*    try{
        sdasd
    }

    catch(error){
        if(3>5){
        console.log("Ha ocurrido un error");
        }else{
            console.log("pito");
        }
    }
*/
    
    //* Sentencia Throw
    try{
        throw{
            error:"NombreDelError",
            info:"Informacion del error"
        }
    }
   catch(e){
        console.log(e.error);
        }
    finally{

    }
    
    //* Finally

 /*    try{
        sdasd
    }

   catch(error){
        if(3>5){
        console.log("Ha ocurrido un error");
        }else{
            console.log("pito");
        }
    } finally{
        console.log("me muestro igual");
    }*/

    //? otro ejemplo
 /*  
    const pruebaTry = ()=>{
        try{
            return 1;
        }
        catch(e){
            return 2;
        }
        finally{
            return 3;
        }
    }

    console.log(pruebaTry());*/