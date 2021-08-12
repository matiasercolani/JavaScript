class App{
    constructor(descargas, puntos){
        this.descargas = descargas;
        this.puntos = puntos;
        this.instalar = false;
        this.abrir = false;
    }

    botonInsDes(){
        if(this.instalar == false){
            alert('Instalar');
            this.instalar = true;
        }else {
            alert('Desistalar')
            this.instalar = false;
        }
    }

    botonAbCe(){
        
        if(this.instalar == true ){
        if(this.abrir == false ){
            alert('Iniciando');
            this.abrir = true;
        }else {
            alert('Cerrando')
            this.abrir = false;
        }
    }
    
    }

    mostrarEstad(){
        return ` 
       Descargas: ${this.descargas}<br>
       Puntaje: ${this.puntos}<br>
        `;
    }
}


const notas = new App("1000","200");
const whatsapp = new App("15000","300");


document.write(`
    ${notas.mostrarEstad()}<br><br>
    ${whatsapp.mostrarEstad()}<br><br>
`);

notas.botonInsDes();
notas.botonInsDes();
notas.botonInsDes();
