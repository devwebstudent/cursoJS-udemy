/* Queremos que a varA tenha o valor de varB, varB tenha o valor de varC e varC tenha o valor de varA */

let varA = 'A'; // B - varA = varB
let varB = 'B'; // C - varB = varC
let varC = 'C'; // A - varC = varA

// Resolução com método antigo:
let varATemp = varA; // Para guardar o valor inicial de varA, pois posteriormente esse valor será perdido, pois varA vai passar a valer 'B'
varA = varB; // o valor de varB vai para dentro de varA -> B
varB = varC; // o valor de varC vai para dentro de varB -> C
varC = varATemp; // o valor de varATemp vai para dentro de varC -> A

console.log(varA, varB, varC); 


/* Resolução com método mais moderno (vamos ver isso mais pra frente no curso):

[varA, varB, varC] = [varB, varC, varA] -> O que colocamos no segundo [], é o valor da variável.

// o valor de varB vai para varA, varC vai para varB e varA vai para varC



console.log(varA, varB, varC); // Resultado: B, C, A

Obs.: fazendo desse jeito não precisamos criar uma variável para guardar o valor de varA.

*/
