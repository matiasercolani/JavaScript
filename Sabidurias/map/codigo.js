//+ map
//* Sirve para recorrer arrays de fprma mas sencilla. No modfica el array original.




let almuerzos = [
    {principal:'pizza', postre:'helado'},
    {principal:'tacos', postre:'queso y dulce'},
    {principal:'pasta', postre:'volcan'},
    {principal:'asadao', postre:'panqueque'},
];


// *Ejemplo sin map
// let platosPrincipales = [];


// for(let i=0; i < almuerzos.length; i++){
//     platosPrincipales.push(almuerzos[i].principal);
// }




//* Con map

let platosPrincipales = almuerzos.map(almuerzos=>{
    return almuerzos.principal;
})


console.log(platosPrincipales);