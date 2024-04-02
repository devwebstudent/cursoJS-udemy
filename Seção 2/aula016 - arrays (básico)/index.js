// ARRAYS SÃO INDEXADOS
//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'] // Podemos colocar qualquer coisa no nosso array, mas é uma boa prática colocar apenas 1 tipo de dado
console.log(alunos); // Para mostrar o array completo // Resultado: [ 'Luiz', 'Maria', 'João' ]
console.log(alunos[1]); // Para mostrar quem está no índice 1, utilizando [] // Resultado: Maria
console.log(alunos[2]); // Resultado: João
console.log(alunos.indexOf('João')); // Vai me mostrar o índice de João // Resultado: 2

// PARA ALTERAR VALOR EM UM ARRAY
alunos[0] = 'Eduardo'; // Quem está na posição 0 vai ser substituído por Eduardo
console.log(alunos); // Resultado: [ 'Eduardo', 'Maria', 'João' ]


// ADICIONANDO ELEMENTO NO ARRAY
alunos[3] = 'Luiza'; // Se o índice não existe, ele vai ser criado e o elemento será adicionado
console.log(alunos); //Resultado: [ 'Eduardo', 'Maria', 'João', 'Luiza']


// ADICIONANDO ELEMENTOS NO FINAL DO ARRAY - FUNÇÃO push() - [MAIS USADO]
alunos.push('Fábio');
console.log(alunos); // Resultado: [ 'Eduardo', 'Maria', 'João', 'Luiza', 'Fábio' ]


// ADICIONANDO ELEMENTOS NO COMEÇO DO ARRAY - FUNÇÃO unshift()
alunos.unshift('Otávio');
console.log(alunos); // Resultado: [ 'Otávio', 'Eduardo', 'Maria', 'João', 'Luiza', 'Fábio' ]


// REMOVENDO ELEMENTO DO FINAL DO ARRAY - FUNÇÃO pop()
let removido1 = alunos.pop(); // Salvando elemento removido do final do array em uma variável
console.log(removido1); // Para mostrar qual foi o elemento removido // Resultado: Fábio
console.log(alunos); // Resultado: [ 'Otávio', 'Eduardo', 'Maria', 'João', 'Luiza' ]


// REMOVENDO ELEMENTO DO COMEÇO DO ARRAY - FUNÇÃO shift()
let removido2 = alunos.shift(); // Salvando elemento removido do começo
console.log(removido2); // Mostra quem foi removido // Resultado: Otávio
console.log(alunos); // Resultado: [ 'Eduardo', 'Maria', 'João', 'Luiza' ]


// DELETANDO ELEMENTO SEM ALTERAR OS ÍNDICES - delete 
delete alunos[1];
console.log(alunos); // Resultado: [ 'Eduardo', <1 empty item>, 'João', 'Luiza' ] -> Fico com um elemento vazio onde estava Maria
console.log(alunos[1]); // Acessando onde estava Maria // Resultado: undefined
console.log(alunos[50]); // Acessando um índice que não existe // Resultado: undefined


// FATIANDO ELEMENTOS DO ARRAY - slice()
console.log(alunos.slice(0, 3)) // Se quero do elemento 0 ao 2, temos que colocar 0 e 3 // Resultado: [ 'Eduardo', <1 empty item>, 'João' ]
console.log(alunos.slice(0, -2)) // Vai cortar os 2 últimos elementos // Resultado: [ 'Eduardo', <1 empty item> ]


console.log(typeof alunos); // Vai mostrar que array é um objeto // Resultado: object
console.log(alunos instanceof Array); // Para sabermos se é um array ou não // Resultado: true