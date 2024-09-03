//buscar datos del pokemon dependiendo de su numero o nombre
function buscarPokemon(contenedorNumero){
    let inputId = `pokemonimput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();

    console.log(inputId)

}