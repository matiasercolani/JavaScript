const getInfo = async()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
    try{
        resultado = await axios("sinformacion.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch(e){
        aprobados.innerHTML = "La API fallo";
       desaprobados.innerHTML = "La API fallo";
    }  
}

document.getElementById("getInfo").addEventListener("click",getInfo);