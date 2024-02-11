// OUTRO EXEMPLO: Percorrendo um Array com o FOR
// Vamos exibir os valores que estão dentro do Array

// Índice          0       1      2        3         4           5         6         7         8         9
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Abacaxi', 'Melancia', 'Caju', 'Abacate', 'Laranja', 'Mamão']
console.log(`${frutas.length} elementos`) // 10 elementos


// Vamos começar do 0; Queremos parar no tamanho do array (frutas.length é 10). Não pode ser <=, tem que ser <, pois ele tem que parar no 9.
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} é ${frutas[i]}`); // Fazendo a estrutura de repetição mostrar qual fruta está em determinado Índice
}

// Resultado: Índice 0 é Maçã, Índice 1 é Pêra, Índice 2 é Uva, Índice 3 é Banana, Índice 4 é Abacaxi, Índice 5 é Melancia, Índice 6 é Caju, Índice 7 é Abacate, Índice 8 é Laranja, Índice 9 é Mamão