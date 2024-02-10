/* 
Tipos de dados PRIMITIVOS (valores imutáveis): string, number, boolean, undefined, null, bigint, symbol
Quando estamos falando que o dado é imutável, estamos falando especificamente do valor

Os valores PRIMITIVOS são copiados quando passamos o valor dele para outra variável utilizando o sinal de atribuição

Veja abaixo:
*/

//          0123
let nome = 'Luiz';
//      012345
nome = 'Otávio';
nome[0] = 'A' // Essa linha não faz nada, pois o 'A' não vai ficar no lugar do 'O', pois a string é IMUTÁVEL, o dado é imutável.
console.log(nome[0], nome) // O 'A' deveria substituir a letra 'O', mas a string é IMUTÁVEL, então continua sendo exibida a letra 'O'

//

let a = 'A';
let b = a; // Copiando o valor de a para b - As duas variáveis estão com o valor de 'A' - Ao longo do código, b vai manter o seu valor independente do valor que a tiver
console.log(a, b) // Resultado: A A

a = 'Outra coisa';
console.log(a, b) // Como podemos ver, somente o valor de a foi alterado, enquanto o de b se manteve o mesmo de quando ela copiou o valor inicial de a.


/* RESUMINDO: 

VALORES PRIMITIVOS: valores primitivos são copiados de uma variável para outra. Os valores das variáveis vão ser independentes, caso alguma mude seu valor.
VALORES POR REFERÊNCIA: as variáveis vão apontar para o mesmo lugar na memória que a outra variável caso fazemos b = a; Se mudo uma variável, a outra tb muda.


*/