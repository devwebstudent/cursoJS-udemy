//               01234567
let umaString = "Um texto";
console.log(`Essa string possui ${umaString.length} caracteres`) // Essa string possui 8 caracteres
console.log(umaString[0]) // Retorna o valor de determinado índice // Resultado: U
console.log(umaString.charAt(5)) // Função para retornar valor de determinado índice // Resultado: x

console.log(umaString.concat(' em um lindo dia')) // Função para concatenar; mesmo resultado que o +

console.log(umaString.indexOf('t', 2)) // Função que busca o valor do começo até o final // Estamos buscando o t começando pelo índice 2. // Resultado: 3
console.log(umaString.lastIndexOf('x', 4)) // Função que busca o valor de trás pra frente // Estamos buscando o x começando pelo índice 4. // Resultado: -1 (significa que não encontrou o valor)

console.log(umaString.match(/[a-z]/g)); // Função referente a expressões regulares; no caso, vai me retornar todas as letras minúsculas
// Professor não vai entrar muito em detalhes, pois iria requerer um curso específico para expressões regulares, pois é algo muito grande.

console.log(umaString.search('U')) // Procura o VALOR e retorna o ÍNDICE; Muito similar ao indexOf(), mas ele aceita expressões regulares. // Resultado: 0
console.log(umaString.replace('Um', 'Outro')) // Função para substituir valores; No caso, vamos substituir a palavra 'Um' pela palavra 'Outro' // Resultado: Outro texto

// match(), search() e replace() aceitam expressões regulares.


let umaString2 = "O rato roeu a roupa do rei de Roma."

console.log(`Essa string possui ${umaString2.length} caracteres`) // Atributo length, para saber o tamanho da nossa variável // Resultado 35 caracteres
console.log(umaString2.slice(2, 6)) // Vai fatiar a palavra que começa do índice 2 e termina no índice 5 (temos que colocar um índice a mais) // Resultado: rato
console.log(umaString2.slice(-5)) // Estamos dizendo que o começo é o tamanho da string - 5; 35 - 5 - 30 (sempre colocando um índice a mais de onde tu quer que corte). // Resultado: Roma.
console.log(umaString2.slice(-5, -3)) // Estamos cortando começando da posição -5 até a posição -3 // Resultado: Ro
console.log(umaString2.substring(umaString2.length - 5)) // Faz a mesma coisa que a slice(); Professor disse que é melhor utilizar slice () para fazermos a mesma coisa // Resultado: Roma.

console.log(umaString2.split(' ')) // Essa função divide uma STRING baseado em um caracter qualquer, que no caso foi um espaço // Resultado: [ 'O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'Roma.' ]
console.log(umaString2.split('r')) // Vai dividir baseado no 'r'; o r não será incluído no resultado // Resultado: [ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de Roma.' ]
console.log(umaString2.split(' ', 5)) // Vai dividir 5 vezes nossa STRING onde tem o espaço em branco // Resultado: [ 'O', 'rato', 'roeu', 'a', 'roupa' ]

console.log(umaString2.toUpperCase()) // Essa função serve para deixar nossa STRING em letras MAIÚSCULAS // Resultado: O RATO ROEU A ROUPA DO REI DE ROMA.
console.log(umaString2.toLowerCase()) // Serve para deixar nossa STRING em letras MINÚSCULAS // Resultado: o rato roeu a roupa do rei de roma.