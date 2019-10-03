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

// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

pokemon.nomejapa = 'フリーザー Freezer'

pokemon.falar = function() {
    console.log(`Oi, meu nome é ${pokemon.nome}! Meu nome em japonês é ${pokemon.nomejapa}.`)
}

pokemon.falar()

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".

pokemon.sabe_voar = true

pokemon.voar = function() {
    if (pokemon.sabe_voar == true){
        console.log(`To voaaaaaando!`)
    }else{
        console.log(`Não ser voar!`)
    }
}
pokemon.voar()

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

/*não sei fazer esseeeeeeeeeeee*/

// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.