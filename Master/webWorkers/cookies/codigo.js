//+ Cookies

// Una cookie HTTP, cookie web o cookie de navegador es una pequeña pieza 
// de datos que un servidor envía a el navegador web del usuario. 
// El navegador guarda estos datos y los envía de regreso junto con la nueva petición al mismo servidor.





//* Crea Cookies con fecha de expiracion. Sino se borran automaticamente al cerrar la sesion

// document.cookie = "user=erco";

function setCookie(c_name,c_value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    document.cookie=encodeURIComponent(c_name) 
      + "=" + encodeURIComponent(c_value)
      + (!exdays ? "" : "; expires="+exdate.toUTCString());
      ;
 }



 setCookie("usuario","matias",4);


//* Leer cookies
// let coookies = document.cookie;
// console.log(coookies);



//* Leer muchas cookies
const obtenerCookie = cookieName=>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(i=0; cookies.length > i; i++){
        cookie = cookies[i].trim();
        if(cookie.startsWith(cookieName)){
            return cookie.split("=")[1];
        }
    }
    return "No se encuentra cookie";
}



//* Modificar cookies
  document.cookie = "user=mario";


//* Boorrar cookies
//  document.cookie = "user=mario;max-age=0";


// Ejemplo de usi (Aviso de uso de cookies, cumplimiento con el RGPD y la privacidad)


