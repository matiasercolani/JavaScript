//+  Geolocalization




//* getCurrentPosition()

    //? Parametros (position, error, options)

    //? Propiedades de option (enableHightAccuracy, timeout, maximumAge)

    const geolocation = navigator.geolocation;

    const posicion = (pos)=>{
        console.log(pos);
    }

    const err = ()=>{ 
        console.log(e);
    }

    const options = {
        maximumAge: 0,
        timeout: 3000,
        enableHightAccuracy: true
    }

    geolocation.getCurrentPosition(posicion,err,options);






//* watchPosition() posicion en tiempo real
