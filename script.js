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
    <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
    <p>Numero:${datosPokemon.id}</p>
    <p>weight:${datosPokemon.weight/10}Kg</p>
    <p>height:${datosPokemon.height/10}m</p>    
    `
}
// Error en busqueda de pokemon
function mostrarError(contenedorNumero){
    let infoDivId=`pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDivId);
    infoDiv.innerHTML = `
    <p class= "pk-ms">Pokemon no encontrado , <br> Intenta con otro Nombre o Numero</p>

    `
}
// Mostrar pokemon inicial

window.onload = function(){
    document.getElementById("pokemonimput1").value = "133";
    buscarPokemon(1);
    document.getElementById("pokemonimput2").value = "136";
    buscarPokemon(2);
}