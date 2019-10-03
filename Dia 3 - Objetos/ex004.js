// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando

pokemon.sabe_voar = true

pokemon.voar = function() {
    if (pokemon.sabe_voar == true){
        console.log(`To voaaaaaando!`)
    }else{
        console.log(`Não ser voar!`)
    }
}
pokemon.voar()