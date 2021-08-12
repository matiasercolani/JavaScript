class celular{

    constructor(color, peso, resPant, resCam,ram){
        this.color = color;
        this.peso = peso;
        this.resPant = resPant;
        this.resCam = resCam;
        this.ram = ram;
        this.encendido = false;
    }

    botonEA(){
        if(this.encendido == false){
            alert("Prendido");
            this.encendido = true;
        }else{
            alert("Apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        alert("Reiniciar");
    }

    apagar(){
        alert("Apagado");
    }

    foto(){
        alert("Foto tomada");
    }

    grabar(){
        alert("Granbando");
    }


    mostrarInfo(){
        return ` 
        Color: ${this.color} <br>
        Peso: ${this.peso} <br>
        Resolucion pantalla: ${this.resPant} <br>
        Resolucion Camara: ${this.resCam} <br>
        Ram: ${this.ram} <br>
        `;
    }

}

class gamaAlta extends celular{
    constructor(color, peso, resPant, resCam, ram,camara2){
        super(color, peso, resPant, resCam, ram);
        this.camara2 = camara2; 
    }
    
    grabarVideoLento(){
        alert ("estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }

    infoGamaAlta(){
        return this.mostrarInfo() + `Resolucion de Camara 2: ${this.camara2}`;
    }
}


const iPhone = new celular("red","200g","300px","12px","4gb");
const nexus = new celular("blue","400g","200px","8px","2gb");
const pocophone = new celular("brown","300g","150px","2px","3gb");


iPhone.botonEA();

document.write(`
${iPhone.mostrarInfo()}<br><br>
${nexus.mostrarInfo()}<br><br>
${pocophone.mostrarInfo()}<br><br>
`);


// Alta gama

const razer = new gamaAlta("black","200g","300px","42px","4gb", "HD");
const asusRog = new gamaAlta("white","400g","300px","32px","4gb", "HD");

document.write(`
---------------------------------<br><br>

${razer.infoGamaAlta()}<br><br>
${asusRog.infoGamaAlta()}<br><br>
`);