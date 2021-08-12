AnchoTotal = screen.width; //ancho total de la pantalla
AlturaTotal = screen.height; //altura total de la pantalla

AnchoDisponible = screen.availWidth; //ancho disponible de la pantalla
AlturaDisponible = screen.availHeight; //altura disponible de la pantalla

Resolucion = screen.pixelDepth // resolucion de color de la pantalla
Profundidad = screen.colorDepth // profundidad de bits de la paleta de colores



console.log(`Width: ${AnchoTotal}`);
console.log(`height: ${AlturaTotal}`);

console.log(`availWidth: ${AnchoDisponible}`);
console.log(`availHeight: ${AlturaDisponible}`);

console.log(`pixelDepth: ${Resolucion}`);
console.log(`colorDepth: ${Profundidad}`);


//* Solo en consola. Altura y anchura intern
    // innerWidth
    // innerHeight