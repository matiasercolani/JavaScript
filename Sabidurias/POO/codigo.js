//+ POO - Programacion Orientada a Objetos. Es un paradigma de programacion en resumen es lo que se utiliza para crear programas o sistemas completos, existen diversos paradigmas desde la perspectiva de la POO
//+ una app un sistema en un conjunto de objetos que se comunican entre si. Basamos estos objetos en cosas del mundo real, un objeto podria ser una TV y este objeto se comunica con otros como por ejemplo el control remoto
//+ y cuando estos 2 objetos se comunican entre si evitan que te levantes del sofa.

//* Analogia PlayStation


//* Clase (Plantilla para crear objetos).
// class SonyPlaystation{
//     skin = "";

//     encender() {
//         alert("Sony Computer Entertainment... ");
//     }
// }


//* Instancia de objeto.
// ps2 = SonyPlaystation();
// ps1 = SonyPlaystation();



//* Metodos(funciones de objetos).
// ps1 = encender();
// ps2 = encender();



//* Propiedades (variables del objeto).
// ps1.skin ="Spiderman";
// ps2 = "Star Wars";




//+ 4 Pilares fundamentales de POO
//* Abstraccion - es eliminar los detalles innecesarios para solo enfocarnos en los aspectos que son necesarios para el contexto o sistema que estamos desarrollando.
//* Encapsulamiento - Ocultar  los detalles que no son relevantes para el exterior. Agrupar datos (propiedades) y metodos que actuan sobre esas propiedades de manera que el acceso a esos datos esta restringido desde fuera del paquete.
//* Herencia - Por medio de la herencia una clase "hija" hereda de una clase "padre" sus metodos y atributos.
//* Polimorfismo - Se refiere a la capacidad de realizar una misma accion en diferentes formas. Ejemplo: una clase puede sobreescribir un metodo de una clase de la que hereda para emplear la misma funcionalidad pero con alguna variante.


// Ejemplo real 
const _private = new WeakMap();
class Book{
    //* La clase solo de encarga de contener variables y funciones (que son propiedades y metodos)
    // constructor(title, author, price){
    //     this._title = title;    //! La palabra clave this hace referencia al instancia del objeto en cuestion. Por ejemplo es como si pusieramos: book1._title = title;  o  book2._title = title;
    //     this._author = author;
    //     this._price = price;

    // }


    //* Ejemplo de Encapsulamiento - Propiedades privadas con getters y setters. Sino se tienen estas funciones no se puede visualizar ni setear los parametros
    constructor(title, author, price){
        const properties = {
            _title: title,
            _author: author,
            _price: price
        }

        _private.set(this,{properties});
    }
    

        // Obtiene el titulo de un libro:
        get title(){
            return _private.get(this).properties['_title'];
        }
    
        // Setea/Modifica el titulo de un libro:
        set title(newTitle){
            return _private.get(this).properties['_title'] = newTitle;
        }


        get author(){
            return _private.get(this).properties['_author'];
        }


        set author(newAuthor){
            return _private.get(this).properties['_author'] = newAuthor;
        }


        get price(){
            return _private.get(this).properties['_price'];
        }


        set price(newPrice){
            return _private.get(this).properties['_price'] = newPrice;
        }

        getAllData(){
            console.log(`Titulo: ${this.title}, Autor:${this.author}, Precio:${this.price}`);
        }


}



class Comic extends Book{

    constructor(title, author, price, illustrators){
            super(title,author,price);
            this.illustrators = illustrators;
    }


    addIllustrator(newIllustrator = []){
        this.illustrators.push(newIllustrator);
    }

    getAllData(){
        super.getAllData();
        console.log(`Illustradores: ${this.illustrators}`);
    }

}





class ShoppingCart{
    constructor(){
        this.products=[];
    }

    addProduct(amount, price){
        this.products.push(...Array(amount).fill(price)) // ... - Los tres puntos se llaman Sprites y se usan para hacer una copia del array y que no se vaya metiendo un array en otro array.          fill() rellena el array
    }

    showProducts(){
        console.log(this.products);
    }

    calcTotal(){
        return this.products
                .map(price => price) //map - lo que hace es ejecutar una funcion sobre cada uno de los productos 
                .reduce((ac,price) => ac + price, 0)
    }

    printTicket(){
        console.log(`Total a pagar ${this.calcTotal()}`)

    }
}




//! Instancias de Book
const book1 = new Book('1984','G.O',350);
const book2 = new Book('Frankeistein','M.S',200);
//! Instancia de Comic
const comic1 = new Comic('The Killing Joke','A.M',150,['B.B','J.M']);
//! Instancias de ShoppingCart
const cart = new ShoppingCart();

cart.addProduct(2,comic1.price);
cart.addProduct(1,book1.price);
cart.showProducts();
cart.printTicket();

// Polimorfismo
book1.getAllData();
comic1.getAllData();



// console.log(book1.title);
// console.log(book1.author);
// console.log(book1.price);

// console.log(comic1.title);
// console.log(comic1.author);
// console.log(comic1.price);
// console.log(comic1.illustrators);
// comic1.addIllustrator('M.H.E')
// console.log(comic1.illustrators);
