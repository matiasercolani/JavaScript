// Document Object Model

//* Nodo - Un nodo en el DOM es cualquier etiueta del cuerpo, como un parrafo, el mismo body o incluso

//* Document: el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
//* Element: nodos definidos por etiquetas.
//* Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
//* Attribute: los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos).
//* Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera. 



//! Document - Metodos de seleccion de elementos


//* getElementById() - Selecciona un elemento por ID.

// let parrafo = document.getElementById('parrafo');

//* getElementByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.\

// let parrafo = document.getElementsByTagName('p');

//* querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.

// let parrafo = document.querySelector('.parrafito');

//* querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

// let parrafo = document.querySelectorAll('.parrafito');

// document.write(parrafo);

// document.write(parrafo[1]);





//! Document - Metodos para Definir, Obtener y Eliminar valores de atributos.

//* setAttribute() - Modifica el valor de un atributo

// const rangoEtario = document.querySelector(".rangoEtario");

// rangoEtario.setAttribute("type","color");

//* getAttribute() - Obtiene el valor de un atributo

// let valorDelAtributo = rangoEtario.getAttribute("type");

// document.write(valorDelAtributo);

//* removeAttribute() - Modifica el valor de un atributo

// valorDelAtributo = rangoEtario.removeAttribute("type");



//! Atributos globales (hay mas pero estos son los pincipales)

// const titulo = document.querySelector(".titulo");
//* class - lista de clases del elemento separadas por espacios

//* contenteditable - indica si el elemento puede ser modificable por el usuario (bool)

// titulo.setAttribute("contentEditable","true");

// titulo.setAttribute("contentEditable","false");

//* dir - indica la direccionalidad del texto (Conviene hacerlo en css)

// titulo.setAttribute("dir","ltr");
// titulo.setAttribute("dir","rtl");

//* hidden - indica si el elemento aun no es, o ya no es, relevante

// titulo.setAttribute("hidden","true");
// titulo.removeAttribute("hidden");

//* id - define un identificador unico
//* style - contiene declaaraciones de estilo css para ser aplicadas al elemento
//* tabindex - indica si el elemento puede obtener un focus de input

// titulo.setAttribute("tabindex", "0");

//* title - contiene un texto con informacion relacionada al elemento al que pertenece

// titulo.setAttribute("title", "jajaja XD");


//! Atributos de Inputs

const input = document.querySelector(".input-normal");
const input2 = document.querySelector(".input-normal2");
const input3 = document.querySelector(".forminimo");
const titulo2 = document.querySelector(".titulo2");
//* className

// document.write(input.className);

//* value

// document.write(input.value);

//* type

// input.type = "range";
// input.type = "color";

//* accept

// input.type = "image/gif";
// input.type = "image/png";

//* form - para colocar boton fuera de las etiquetas form

//* minLength

input3.minLength = 4;

//* placeholder

input3.placeholder = "daleee";

//* required

input3.required = " ";


//! Atributos Style

//* usos y ejemplos
//* propiedades Camel Case


// titulo2.style.color = "red";

// titulo2.style.backgroundColor = "#222";

// titulo2.style.padding = "30px";


//! Clases, classList y Metodos de classList

//* add() - añade un clase

// titulo.classList.add("grande");

//* remove() - remueve una clase

// titulo.classList.remove("grande");

//* item() - devuelve la clase del indice especificado

// let valor = titulo.classList.item(1);

// document.write(valor);

//* contains() - verifica si ese elemento pposee o no, la clase especificada

// let valor = titulo.classList.contains("grande");

// if(valor){
//     document.write("La clase Existe");
// }else{
//     document.write("La clase NO Existe");
// }

//* replace() - reemplaza una clase por otra

// titulo.classList.replace("grande", "chico");

//* toggle() -  si no tiene la clase especificada, la agrega, si ya la tiene, la elimina

// titulo.classList.toggle("grande");
// parametro opcional para forzar true or false
// titulo.classList.toggle("grande",true);


//! Obtencion y modificacion de Elementos

const titulo = document.querySelector(".titulo");
//* textContent - devuelve el texto de cualquier nodo.

//  let resultado = titulo.textContent;

// document.write(resultado);

//? innerText - devuelve el texto visible de un node element(NO SE USA MAS)
//? outerText - devuelve el texto que las etiquetas html incluidas las etiquetas(NO SE USA MAS)
//* innerHTML - devuelve el contenido html de un elemento

// let resultado = titulo.innerHTML;

//* outerHTML- devuelve el codigo HTML completo del elemento

// let resultado = titulo.outerHTML;

// alert(resultado);


//! Creacion de elementos

//* createElements()

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI");


//* createTextNode()
// const textDelItem = document.createTextNode("Este es un item de la lista");

// document.write(item);

// console.log(item);

// console.log(textDelItem);


//* appendChild() agrega un elemento hijo

// item.appendChild(textDelItem);

// tambien se puede hacer de otra forma
// item.innerHTML = "Este es un item de la lista ";

// contenedor.appendChild(item);

// console.log(item);

//* createDocumentFragment() - consume menos recursos si hay que crear un elemento varias veces

// const fragmento = document.createDocumentFragment();

// for(i = 0; i < 20; i++){
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista ";
//     fragmento.appendChild(item);
// }

// contenedor.appendChild(fragmento);
// console.log(contenedor);



//! Obtencion y modificacion de Childs (Hijos)

// const contenedor = document.querySelector(".contenedor");

//* firstChild - toma lo primero dentro del elemento padre, asi sea un espacio vacio o texto

// const primerHijo = contenedor.firstChild;

// console.log(primerHijo);

//* lastChild - toma lo ultimo dentro del elemento padre, asi sea un espacio vacio o texto

// const ultimoHijo = contenedor.lastChild;

// console.log(ultimoHijo);

//* firstElementChild - toma el primer elemento dentro del elemento padre.

// const primerHijo = contenedor.firstElementChild;

// console.log(primerHijo);

//* lastElementChild - toma el ultimo elemento dentro del elemento padre.

// const ultimoHijo = contenedor.lastElementChild;

// console.log(ultimoHijo);

//* childNodes - devuelve todos los nodos, asi sea un espacio vacio o texto

//  const todosLosHijos = contenedor.childNodes;

//  console.log(todosLosHijos);

// todosLosHijos.forEach(hijo => console.log(todosLosHijos));

//* children - devuelve todos los nodos(etiquetas html). Se recorre con un for of

// const todosLosHijos = contenedor.children;

// console.log(todosLosHijos);

// for(hijo of todosLosHijos){
//     console.log(hijo);
// }




//! Metodos de Childs (Hijos)
const contenedor = document.querySelector(".contenedor");

//* replaceChild()
//  const parrafo = document.createElement("P").innerHTML = "Parrafo";
//  const h2_nuevo = document.createElement("H2");
//  h2_nuevo.innerHTML = "Titulo Nuevo";
h2_antiguo = document.querySelector(".h2");
// contenedor.replaceChild(h2_nuevo,h2_antiguo);

//* removeChild()
// contenedor.removeChild(h2_antiguo);

//* hasChildNodes()
// let respuesta = h2_nuevo.hasChildNodes();
// if(respuesta){
//     document.write("El elemento tiene hijos");
// }else{
//     document.write("El elemento NO tiene hijos");
// }

//! Propiedades de parents (Padres)

//* parentElement()
// console.log(contenedor.parentElement);
//* parentNode() Hacer casi lo mismo que parentElement
// console.log(contenedor.parentNode);



//! Propiedades de Siblings (Hermanos) mismo rango/nivel

//* nextSibling - devuelve el siguiente nodo, asi sea un espacio vacio o texto
// console.log(h2_antiguo.nextSibling);

//* previousSibling - devuelve el nodo anterior, asi sea un espacio vacio o texto
// console.log(h2_antiguo.previousSibling);

//* nextElementSibling - devuelve el elemento siguiente
// console.log(h2_antiguo.nextElementSibling);

//* previousElementSibling - devuelve el elemento anterior
// console.log(h2_antiguo.previousElementSibling);


//! Nodos - Extras

//* closest() - selecciona el elemento acendente mas cercano

const div = document.querySelector(".div-3");

console.log(div.closest(".div"));