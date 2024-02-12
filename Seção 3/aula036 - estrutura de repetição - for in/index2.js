// Fazendo a mesma coisa, só que FOR IN
// FOR IN -> Ele vai ler os ÍNDICES do nosso array ou as chaves do objeto

//                 0       1      2
const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let indice in frutas) { // Está percorrendo o índice do array frutas
    console.log(frutas[indice])
}