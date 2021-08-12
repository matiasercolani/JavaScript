// Datos de la pantalla
// let alto = window.screen.availHeight;
// let ancho = window.screen.availWidth;

// comprar = confirm(`El alto es: ${alto} y de Ancho es: ${ancho}`);

// if(comprar){
//     alert("compra realizada con exito");
// }else{
//     alert("Compra Cancelada");
// }

// Datos de la web
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `URL Completa: <b>${href}</b><br>`;

document.write(html);