// ! Clase
class animal{

    constructor(especieP, edadP, colorP){
        this.especie = especieP;
        this.edad = edadP;
        this.color = colorP;
        this.informacion = `Soy ${this.especie} tengo ${this.edad} anos y soy de color ${this.color}`;
    }

    verInfo(){
        document.write(this.informacion + "<br>");
    }
}

// ! Herencia
class perro extends animal{
    
    constructor(especieP,edadP,colorP,razaP){
    super(especieP, edadP, colorP);
    this.raza = razaP;   
    }

    // ! static sirve para utilizar un metodo sin instanciar la clase

    // static ladrar(){
    //     alert("GUaaauu");
    // }

    ladrar(){
        alert("GUaaauu");
    }

    
}


class gato extends animal{
    
    constructor(especieP,edadP,colorP,razaP){
    super(especieP, edadP, colorP);
    this.raza = null;   
    }

    // ! Los getters (mostrar) y setters (modificar) se utilizan para acceder a propiedades privadas
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }

    
}


//los "this" del constructor equivalen a perro.
const perrito = new perro("perro", 5, "rojo", "doberman");
const gatito = new gato("gato", 2, "negro");
const pajaro = new animal("pajaro", 1, "verde");

// document.write(perro.informacion + "<br>");
// document.write(gato.informacion + "<br>");
// document.write(pajaro.informacion + "<br>");

perrito.ladrar();
gatito.setRaza = "Siamez";
pajaro.verInfo();

document.write(gatito.getRaza);

// Cuando se crea una funcion dentro de una clase se le llama metodo
// las funciones flechas no pueden ser usadas para crear metodos

