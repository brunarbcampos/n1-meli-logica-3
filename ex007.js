//7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela

/*
const array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
*/

//ou


const impar = []
for (let i = 1; i < 10; i+=2) {
    impar.push(i)
}
console.log(impar)
