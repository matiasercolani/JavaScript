//+ Fetch - para consumir APIs

fetch('https://pokeapi.co/api/v2/pokemon/') // esta funcion consume una URL
    .then((res)=>{ //el .then es para hacer la promesa, si no puede va al catch para atrapar el error
        return res.json(); // como es una promesa que viene en JSON, la transformamos
    }) //Espera una promesa
    .then(data => { 
        // console.log(data.results)
        data.results.forEach(element => {
            // console.log(element.name);
        });
    })
    .catch(error=>console.log(error))//el error viene del Backend(API)





    //+ async await - en lugar de .then(), se utiliza async y await en la actualidad. await siempre va a funcionar cuando este dentro de una funcion asincrona. En la ultimas
    //+ actualizaciones se puede usar await sin ser async.

    const obtenerPokemones = async() => {
        try {
           const res = await fetch('https://pokeapi.co/api/v2/pokemon/') //con await le estamos diciendo "esperemos esta peticion"
           const data = await res.json()
        //    console.log(data.results)
            const arrayNombres = data.results.map(poke=>poke.name) //map funciona como un foreach
            const filtroNombre = data.results.filter(poke=>poke.name==='bulbasaur') // filter() Filtra por propiedad. Por ejemplo se podria hacer una busqueda de los hombres mayores de 18 años o cualquier regla
            console.log(arrayNombres);
            console.log(filtroNombre);

        } catch (error) {
            console.log(error)
        }

    }


    obtenerPokemones();
