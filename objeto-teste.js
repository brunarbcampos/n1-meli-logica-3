const cadaver = {};
cadaver.nome = "Morto"
cadaver.idade = 150

console.log(cadaver)

cadaver.falar = function() {
    console.log(`O ${cadaver.nome} nao fala, está enterrado há ${cadaver.idade} anos. `)
}

console.log(cadaver.falar())