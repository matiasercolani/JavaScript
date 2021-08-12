dinero = prompt("Dinero en los bolsillos");

// Precios
palitoAgua = 0.6;
palitoCrema = 1;
bombonHeladix = 1.6;
bombonHeladovich = 1.7;
bombonHelardo = 1.8;
potecitoConfite = 2.9;
poteCuarto = 2.9;

vuelto = 0;

if( dinero >= palitoAgua  &&  dinero < palitoCrema){
    vuelto = dinero - palitoAgua; 
    document.write("Palito agua");
}
else if( dinero >= palitoCrema  &&  dinero < bombonHeladix){
    vuelto = dinero - palitoCrema; 
    document.write("Palito Crema");
}
else if( dinero >= bombonHeladix  &&  dinero < bombonHeladovich){
    vuelto = dinero - bombonHeladix; 
    document.write("Bombon Heladix");
}
else if( dinero >= bombonHeladovich  &&  dinero < bombonHelardo){
    vuelto = dinero - bombonHeladovich; 
    document.write("Bombon Heladovich");
}
else if( dinero >= bombonHelardo  &&  dinero < potecitoConfite){
    vuelto = dinero - bombonHelardo; 
    document.write("Bombon Helardo");
}
else {
    vuelto = dinero - potecitoConfite; 
    document.write("Potecito Confite o Pote Cuarto");
}
vuelto = parseInt(vuelto);

document.write(`, el vuelto es ${vuelto}`);