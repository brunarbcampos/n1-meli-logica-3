// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

const pokemon = {
    nome: "Articuno",
    nomejapa: 'フリーザー Freezer',
};

pokemon.falar = function() {
    console.log(`Oi, meu nome é ${pokemon.nome}! Meu nome em japonês é ${pokemon.nomejapa}.`)
}

console.log(pokemon.falar())
