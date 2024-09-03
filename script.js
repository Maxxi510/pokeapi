//buscar datos del pokemon dependiendo de su numero o nombre
function buscarPokemon(contenedorNumero){
    let inputId = `pokemonimput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`

    fetch(urlApi)
    .then(Response => Response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon,contenedorNumero))
    .catch(()=> mostrarError(contenedorNumero))   
}
//Mostrar informacion del Pokemon

function mostrarPokemon(datosPokemon, contenedorNumero){
    let infoDivId=`pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);
    infoDiv.innerHTML = `
    <h2>${datosPokemon.name.toUpperCase()}</h2>`
}