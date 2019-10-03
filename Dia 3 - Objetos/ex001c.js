// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {
    nome: "Articuno",
    cor: 'azul',
    tipo: 'gelo/voador',
    pokedex: 144,
};

pokemon.dados = function() {
    console.log(`O ${pokemon.nome} é um Pokémon lendário do tipo ${pokemon.tipo}, de cor ${pokemon.cor} que fica na posição ${pokemon.pokedex} da Pokedex.`)
}

console.log(pokemon.dados())



