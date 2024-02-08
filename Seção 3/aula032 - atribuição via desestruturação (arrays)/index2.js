// Com a atribuição via destruturação podemos extrair coisas dos arrays e já jogar dentro das variáveis

// Índices       0     1     2     3     4     5     6     7     8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// Suponha que queremos atribuir esses valores à várias variáveis. Para cada item do array, vou pegar um elemento
const [primeiroNumero, segundoNumero, ...resto] = numeros
console.log(primeiroNumero, segundoNumero)


// Outra coisa que podemos fazer é pegar o resto do array numeros e atribuir a outro array que eu quero guardar esse resto com o operador ...<nomedavariávelaqui> -> ... = rest operator
console.log(resto) // Agora temos nessa variável o resto dos números do array numeros que não utilizei // Resultado: [3000, 4000, 5000, 6000, 7000, 8000, 9000]