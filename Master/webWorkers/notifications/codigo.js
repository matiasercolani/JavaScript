//+ Notificaciones

// Notification.requestPermission()
// Notification.permission
// Notification(msg, options)

if(!('Notification' in window)){
    console.log("Las notificaciones no estan disponibles en tu navegador");
}


Notification.requestPermission(()=>{
    if(Notification.permission == "granted"){
        console.log("permiso concedido");
        new Notification("Subscribite papu");
    }
})
