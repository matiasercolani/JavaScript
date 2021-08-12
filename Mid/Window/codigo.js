
//! Window

//* open() - Carga un recurso en el contecto de un nuevo navegador o uno que ya existe.
// let youtubeURL = "https://youtube.com";
// let ventana = window.open(youtubeURL);


//* close() - Cierra la ventana actual, o la ventana en la que se llamo.
// ventana.close();

//* closed - Indica si la ventana referenciada esta cerrada o no.
// ventana.closed;

//* stop() - Detiene la carga de recursps em e; cpmtectp de mavegacop actual.
// ventana.stop();

//* alert() - muestra un cuadro de alerta con el contenido especificado y un boton Aceptar.
// alert("Sos un capo!");

//* print() -  muestra un cuadro de dialogo "Imprimir" para imprimir el documento actial.
// print();

//* pormpt() - Abre un cuadro de dialogo con un mensaje que solicita al usuario un dato (String).
// pormpt("Dame un dato");

//* confirm() - Abre un cuadro de dialogo con un mensaje y dos botones: Aceptar y cancelar que a su vez devuelve true or false.
//let respuesta = confirm("Estas seguro que deseas sali del sitio web");
// console.log(respuesta);

//* screen - Devuelve una referencia al objeto de pantalla asociado con la ventana.
// const screen = window.screen;
// console.log(screen);
// document.write(screen.availWidth);

//* screenLeft - Devuelve una distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
// const screenIzquierda = window.screenLeft;
//* screenTop - Devuelve una distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.
// const screenArriba = window.screenTop;

// document.write(`Left : <b>${screenIzquierda}</b><br>
// Top : <b>${screenArriba}</b><br></br>`);

//* scrollX - Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente.
// const scrollHorizontal = window.scrollX;

//* scrollY - Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente.
// const scrollVertical = window.scrollY;

// alert("X:" + scrollHorizontal + "  Y:" + scrollVertical);

//* scroll() - Desplaza la ventana a un lugar particular en el documento(con options y con posiciones).
// window.scroll(0,90);

//? Estos metodos se utilizan desde un servidor sino no funcionan
//* minimize() - Minimiza la ventana.[No se usa mas]
//* resizeBy() - Cambia el tamano de la ventana acutal en una cantidad especificada.
// const ventana = window.resizeBy(100,200);
//* resizeTo() - Redimenciona dinamicamente la ventana.
// const ventana = window.resizeBy(100,200);
//* moveBy() - Mueve la ventana en un ubicacion relativa.
// const ventana = window.moveBy(100,200);
//* moveTo() - Mueve la ventana en un ubicacion absoluta.
// const ventana = window.moveBy(100,300);

//! Objetos barprop - Tdoas devuelven true or false si son visibles. Casi no se utilizan
//* locationbar
// const resultado = window.location.visible;
//* menubar
//* personalbar
//* scrollbars
//* statusbar
//* toolbar

//! Location
//* window.location.href -------> (devuelve el href (URL) de la pagina actual)
// const href1 = window.location.href;
// document.write(href1);
//* window.location.hostname -------> (devuelve el nombre de dominio del servidor web)
// const nombrehost = window.location.hostname;
// document.write(nombrehost);

//* window.location.pathname -------> (devuelve la ruta y el nombre de archivo de la pagina actual) 
// const nombrepath = window.location.pathname;
// document.write(nombrepath);

//* window.location.protocol -------> (devuelve el protocolo web utilizado (http: o https:) )
// const protocolo = window.location.protocol;
// document.write(protocolo);

//* window.location.assign -------> (carga un nuevo documento)
window.location.assign('https://youtube.com');